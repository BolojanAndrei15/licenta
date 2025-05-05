import { Client } from "pg";

export const dynamic = "force-dynamic";

export async function GET(req) {
  const client = new Client({ connectionString: process.env.DATABASE_URL });
  await client.connect();
  await client.query("LISTEN notify_channel");

  const stream = new ReadableStream({
    start(controller) {
      client.on("notification", (msg) => {
        controller.enqueue(
          `data: ${JSON.stringify({ destinatar_id: msg.payload })}\n\n`
        );
      });
      client.on("error", (err) => {
        controller.enqueue(`event: error\ndata: ${err.message}\n\n`);
      });
    },
    cancel() {
      client.end();
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
    },
  });
}
