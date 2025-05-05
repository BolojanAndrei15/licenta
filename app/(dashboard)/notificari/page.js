"use client";
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Check, Trash2, Circle, MoreVertical, MailCheck, MailOpen, Search, CheckSquare, CircleDot } from "lucide-react";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import { useSetAtom } from "jotai";
import { Skeleton } from "@/components/ui/skeleton";

export default function NotificariPage() {
  const { data: session, status: sessionStatus } = useSession();
  const destinatar_id = session?.user?.id;
  const queryClient = useQueryClient();
  const setPageTitle = useSetAtom(pageTitleAtom);
  useEffect(() => {
    setPageTitle("Notificările mele");
    return () => setPageTitle("");
  }, [setPageTitle]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [tipFilter, setTipFilter] = useState("");

  // Fetch notificari - Enable when session is authenticated, key depends on destinatar_id
  const { data, isLoading: isLoadingNotificari, error, refetch } = useQuery({
    // The query will only run when destinatar_id has a value.
    queryKey: ["notificari", destinatar_id],
    queryFn: async () => {
      // No need to check destinatar_id here, query won't run if it's undefined.
      const res = await axios.get(`/api/notificari?destinatar_id=${destinatar_id}`);
      return res.data.notificari || [];
    },
    // Enable the query as soon as the session is authenticated.
    // React Query will wait for destinatar_id to be defined due to the queryKey.
    enabled: sessionStatus === "authenticated",
  });

  const notificari = Array.isArray(data) ? data : [];
  // Filtrare/căutare locală
  const notificariFiltrate = notificari.filter((n) => {
    const lowerSearch = search.toLowerCase();
    const matchesSearch = search === "" ||
                          n.mesaj?.toLowerCase().includes(lowerSearch) ||
                          n.documente?.numar_document?.toLowerCase().includes(lowerSearch) ||
                          n.documente?.rezumat?.toLowerCase().includes(lowerSearch);
    const matchesStatus = !statusFilter || n.status === statusFilter;
    const matchesTip = !tipFilter || n.tip === tipFilter;
    return matchesSearch && matchesStatus && matchesTip;
  }).sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

  // Marcare ca citit
  const markReadMutation = useMutation({
    mutationFn: async (id) => {
      await axios.patch("/api/notificari", { id, citita: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notificari", destinatar_id]);
    },
    onError: () => toast.error("Eroare la marcarea notificării ca citită"),
  });

  // Stergere notificare
  const deleteMutation = useMutation({
    mutationFn: async (id) => {
      await axios.delete("/api/notificari", { data: { id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notificari", destinatar_id]);
    },
    onError: () => toast.error("Eroare la ștergerea notificării"),
  });

  // Marchează toate ca citite
  const markAllReadMutation = useMutation({
    mutationFn: async () => {
      await axios.patch("/api/notificari", { destinatar_id, citita: true });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notificari", destinatar_id]);
    },
    onError: () => toast.error("Eroare la marcarea tuturor ca citite"),
  });

  // Șterge toate notificările
  const deleteAllMutation = useMutation({
    mutationFn: async () => {
      await axios.delete("/api/notificari", { data: { destinatar_id } });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["notificari", destinatar_id]);
    },
    onError: () => toast.error("Eroare la ștergerea tuturor notificărilor"),
  });

  // Accept Notification Mutation - Updated Logic
  const acceptMutation = useMutation({
    mutationFn: async (notif) => {
      // Send notification ID, document ID, and current user ID
      await axios.patch("/api/notificari", {
        id: notif.id,
        document_id: notif.document_id, // Make sure document_id is available on the notif object
        preluat_de: destinatar_id, // The current user accepts it
        citita: true,
        status: 'atribuit' // Explicitly set status to atribuit
      });
      toast.success("Document preluat și notificare actualizată.");
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["notificari", destinatar_id] });
      // Optionally invalidate document queries if needed elsewhere
      // queryClient.invalidateQueries({ queryKey: ['documente'] });
    },
    onError: (error) => {
        console.error("Eroare la acceptarea notificării:", error);
        toast.error(`Eroare la preluarea documentului: ${error.response?.data?.message || error.message}`);
    },
  });

  if (sessionStatus === "loading") {
    return (
      <div className="w-full p-6">
        <Skeleton className="h-8 w-1/4 mb-6" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 w-full">
          <Skeleton className="h-10 w-full md:w-1/3" />
          <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center">
            <div className="flex gap-2">
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-24" />
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Skeleton className="h-9 w-48" />
              <Skeleton className="h-9 w-32" />
            </div>
          </div>
        </div>
        <div className="space-y-4 w-full">
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton className="h-24 w-full rounded-lg" />
          <Skeleton className="h-24 w-full rounded-lg" />
        </div>
      </div>
    );
  }

  if (sessionStatus === "unauthenticated" || !destinatar_id) {
    return <div className="p-8 text-center text-gray-500">Trebuie să fii autentificat pentru a vedea notificările.</div>;
  }

  return (
    <div className="w-full">
      <div className="">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 w-full">
          <div className="relative flex-grow md:flex-grow-0 md:w-1/3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Caută notificări..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="pl-9"
            />
          </div>
          <div className="flex flex-col md:flex-row gap-2 items-stretch md:items-center">
            <div className="flex gap-2">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto justify-between">
                    {statusFilter ? (statusFilter === 'atribuit' ? 'Atribuit' : 'Neatribuit') : "Toate statusurile"}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setStatusFilter("")}>Toate statusurile</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("atribuit")}>Atribuit</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setStatusFilter("neatribuit")}>Neatribuit</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="w-full md:w-auto justify-between">
                    {tipFilter ? (tipFilter === 'document' ? 'Document' : 'Sistem') : "Toate"}
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem onClick={() => setTipFilter("")}>Toate</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTipFilter("document")}>Document</DropdownMenuItem>
                  <DropdownMenuItem onClick={() => setTipFilter("sistem")}>Sistem</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
            <div className="flex gap-2 mt-2 md:mt-0">
              <Button
                size="sm"
                variant="default"
                onClick={() => markAllReadMutation.mutate()}
                disabled={markAllReadMutation.isPending || isLoadingNotificari || notificari.filter(n => !n.citita).length === 0}
                className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-1.5"
              >
                <CheckSquare className="w-4 h-4" /> Marchează toate ca citite
              </Button>
              <Button
                size="sm"
                variant="default"
                onClick={() => deleteAllMutation.mutate()}
                disabled={deleteAllMutation.isPending || isLoadingNotificari || notificari.length === 0}
                className="bg-gray-800 hover:bg-gray-700 text-white flex items-center gap-1.5"
              >
                <Trash2 className="w-4 h-4" /> Șterge toate
              </Button>
            </div>
          </div>
        </div>
        {isLoadingNotificari ? (
          <div className="text-center text-gray-400">Se încarcă notificările...</div>
        ) : error ? (
          <div className="text-center text-red-500">Eroare la încărcarea notificărilor.</div>
        ) : notificariFiltrate.length === 0 ? (
          <div className="text-center text-gray-400">Nu există notificări.</div>
        ) : (
          <ul className="space-y-4 w-full">
            {notificariFiltrate.map((notif) => (
              <li
                key={notif.id}
                className={`relative p-4 rounded-lg border bg-white flex items-start gap-4 shadow-sm transition hover:shadow-md w-full ${notif.citita ? 'opacity-70' : ''}`}
              >
                <div className="mt-1">
                  {notif.citita ? (
                    <Circle className="w-2.5 h-2.5 text-gray-400 fill-current" />
                  ) : (
                    <Circle className="w-2.5 h-2.5 text-blue-600 fill-current" />
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <span className="font-medium text-gray-800">{notif.mesaj || 'Notificare'}</span>
                  {notif.documente?.rezumat && (
                    <p className="text-sm text-gray-600">{notif.documente.rezumat}</p>
                  )}
                  <div className="flex items-center gap-2 text-xs text-gray-500 mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    <span>{new Date(notif.created_at).toLocaleString('ro-RO', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}</span>
                    {notif.status && (
                      <>
                        <span className="mx-1">·</span>
                        <Badge variant={notif.status === 'atribuit' ? 'outline' : 'secondary'} className="capitalize text-xs px-1.5 py-0.5 font-normal">
                          {notif.status === 'atribuit' ? 'Atribuit' : 'Neatribuit'}
                        </Badge>
                      </>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {!notif.citita ? (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-gray-700 h-8 w-8"
                        onClick={() => markReadMutation.mutate(notif.id)}
                        disabled={markReadMutation.isPending}
                        title="Marchează ca citită"
                      >
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-500 hover:text-red-600 h-8 w-8"
                        onClick={() => deleteMutation.mutate(notif.id)}
                        disabled={deleteMutation.isPending}
                        title="Șterge"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>

                      {notif.tip === 'document' && notif.status === 'neatribuit' && notif.document_id && (
                         <Button
                           size="sm"
                           className="bg-gray-800 hover:bg-gray-700 text-white h-8 px-3"
                           onClick={() => acceptMutation.mutate({ id: notif.id, document_id: notif.document_id })}
                           disabled={acceptMutation.isPending}
                         >
                           Acceptă
                         </Button>
                      )}
                    </>
                  ) : (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-gray-600 h-8 w-8"
                        onClick={() => {/* TODO: Implement mark as unread */}}
                        title="Marchează ca necitită (TODO)"
                      >
                        <CircleDot className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-gray-400 hover:text-red-600 h-8 w-8"
                        onClick={() => deleteMutation.mutate(notif.id)}
                        disabled={deleteMutation.isPending}
                        title="Șterge"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </>
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}