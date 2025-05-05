// Ascultă notificări din Postgres și emite evenimente prin Socket.IO
import { Client } from 'pg';

let started = false;

export function startPgNotify(io) {
  if (started) return; // Previne inițializarea multiplă
  started = true;

  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  client.connect();
  client.query('LISTEN notify_channel');

  client.on('notification', (msg) => {
    // msg.payload conține destinatar_id (sau poți extinde payload-ul după nevoie)
    io.emit('notificare_noua', { destinatar_id: msg.payload });
  });

  client.on('error', (err) => {
    console.error('Eroare conexiune PG NOTIFY:', err);
  });
}
