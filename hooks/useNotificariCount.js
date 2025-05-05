import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useNotificariCount(userId) {
  return useQuery({
    // Change the query key to be specific for the count
    queryKey: ["notificari", userId, "count"],
    queryFn: async () => {
      const { data } = await axios.get(`/api/notificari?destinatar_id=${userId}`);
      // Returnează doar numărul de notificări necitite!
      return Array.isArray(data.notificari)
        ? data.notificari.filter(n => !n.citita).length
        : 0;
    },
    enabled: !!userId,
    refetchOnWindowFocus: true,
  });
}
