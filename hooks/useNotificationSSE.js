import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";

export function useNotificationSSE(userId) {
  const queryClient = useQueryClient();

  useEffect(() => {
    if (!userId) return;
    // Ensure userId is a string for comparison if needed
    const stringUserId = String(userId);
    const es = new EventSource("/api/notificari/stream");

    es.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        // Ensure destinatar_id exists and compare
        if (data && data.destinatar_id === stringUserId) {
          console.log("SSE received for user:", stringUserId, "Invalidating queries.");
          // Invalidate both the list query and the count query
          queryClient.invalidateQueries({ queryKey: ["notificari", userId] }); // For the list in NotificariPage
          queryClient.invalidateQueries({ queryKey: ["notificari", userId, "count"] }); // For the count in useNotificariCount
        }
      } catch (error) {
         console.error("Error parsing SSE message:", error);
      }
    };

    es.onerror = (error) => {
      console.error("SSE Error:", error);
      // Consider adding reconnection logic here if needed
      es.close();
    };

    // Cleanup function to close the connection when the component unmounts or userId changes
    return () => {
      console.log("Closing SSE connection for user:", stringUserId);
      es.close();
    };
  }, [userId, queryClient]); // Dependencies are correct
}
