"use client";
import { useSession } from "next-auth/react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { Switch } from "@/components/ui/switch";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { formatDistanceToNow, format } from "date-fns";
import { useState } from "react";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import { notificariCountAtom } from "@/lib/notificariCountAtom";
import axios from "axios";

const NOTIF_TYPES = [
  { value: "all", label: "Toate notificările" },
  { value: "document", label: "Document nou înregistrat" },
  { value: "procesare", label: "Cerere procesată" },
];
const STATUS = [
  { value: "all", label: "Toate" },
  { value: "necitita", label: "Necitite" },
  { value: "citita", label: "Citite" },
];
const PERIODS = [
  { value: "all", label: "Toată perioada" },
  { value: "week", label: "Ultima săptămână" },
  { value: "month", label: "Ultima lună" },
];

export default function NotificariPage() {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const [tip, setTip] = useState("all");
  const [status, setStatus] = useState("all");
  const [period, setPeriod] = useState("week");
  const [notifDoc, setNotifDoc] = useState(true);
  const [notifEmail, setNotifEmail] = useState(false);
  const [page, setPage] = useState(1);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [notifToDelete, setNotifToDelete] = useState(null);
  const [markAllModalOpen, setMarkAllModalOpen] = useState(false);
  const pageSize = 6;

  const setPageTitle = useSetAtom(pageTitleAtom);
  const setNotificariCount = useSetAtom(notificariCountAtom);
  useEffect(() => {
    setPageTitle("Notificări");
    return () => setPageTitle("");
  }, [setPageTitle]);

  const queryClient = useQueryClient();

  const {
    data,
    isLoading,
    error
  } = useQuery({
    queryKey: ["notificari", userId],
    queryFn: async () => {
      if (!userId) return [];
      const res = await fetch(`/api/notificari?destinatar_id=${userId}`);
      if (!res.ok) throw new Error("Eroare la încărcare notificări");
      return (await res.json()).notificari;
    },
    enabled: !!userId,
  });

  useEffect(() => {
    if (data) {
      const necitite = data.filter(n => !n.citita).length;
      setNotificariCount(necitite);
    }
  }, [data, setNotificariCount]);

  // Filtering (simulate, backend can be extended for real filters)
  let filtered = data || [];
  if (tip !== "all") filtered = filtered.filter(n => n.mesaj?.toLowerCase().includes("document") ? tip === "document" : tip === "procesare");
  if (status !== "all") filtered = filtered.filter(n => status === "citita" ? n.citita : !n.citita);
  // Period filter (simulate week/month)
  if (period !== "all") {
    const now = new Date();
    filtered = filtered.filter(n => {
      if (!n.created_at) return false;
      const d = new Date(n.created_at);
      if (period === "week") return (now - d) / (1000 * 60 * 60 * 24) <= 7;
      if (period === "month") return (now - d) / (1000 * 60 * 60 * 24) <= 31;
      return true;
    });
  }
  const totalPages = Math.ceil(filtered.length / pageSize);
  const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="w-full ">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-2">
      </div>
      <div className="bg-white rounded-xl border p-4 flex flex-col md:flex-row gap-4 items-center mb-4">
        <div className="flex-1 flex gap-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">Tip notificare</div>
            <Select value={tip} onValueChange={setTip}>
              <SelectTrigger className="w-44"><SelectValue /></SelectTrigger>
              <SelectContent>
                {NOTIF_TYPES.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Status</div>
            <Select value={status} onValueChange={setStatus}>
              <SelectTrigger className="w-32"><SelectValue /></SelectTrigger>
              <SelectContent>
                {STATUS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">Perioadă</div>
            <Select value={period} onValueChange={setPeriod}>
              <SelectTrigger className="w-40"><SelectValue /></SelectTrigger>
              <SelectContent>
                {PERIODS.map(opt => <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex gap-2 items-center mt-4 md:mt-0">
          <Button variant="ghost" className="text-gray-700 flex gap-1 items-center"
            onClick={async () => {
              if (!window.confirm("Sigur vrei să ștergi toate notificările?")) return;
              await axios.delete("/api/notificari", { data: { destinatar_id: userId } });
              window.dispatchEvent(new Event("notificari-updated"));
            }}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            Șterge toate
          </Button>
          <Button variant="ghost" className="text-gray-700 flex gap-1 items-center"
            onClick={() => setMarkAllModalOpen(true)}
          >
            <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
            Marchează toate ca citite
          </Button>
        </div>
      </div>
      <div className="space-y-2 mb-8">
        {isLoading && (
          <div className="space-y-2">
            {[...Array(3)].map((_, i) => <Skeleton key={i} className="h-20 w-full" />)}
          </div>
        )}
        {!isLoading && paginated.length === 0 && (
          <div className="text-gray-400 text-center py-8">Nu ai notificări pentru filtrele selectate.</div>
        )}
        {paginated.map((notif) => (
          <Card key={notif.id} className={`flex flex-col md:flex-row items-start md:items-center gap-2 px-4 py-3 border ${!notif.citita ? 'bg-blue-50 border-blue-100' : ''}`}>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                {notif.mesaj?.toLowerCase().includes("document") ? (
                  <span className="inline-flex items-center gap-1 text-blue-700 font-semibold">
                    <svg width="20" height="20" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                    Document nou inregistrat
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 text-gray-700 font-semibold">
                    <svg width="20" height="20" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                    Cerere procesată
                  </span>
                )}
              </div>
              <div className="text-gray-700 text-sm">
                {notif.mesaj}
              </div>
              {notif.documente?.rezumat && (
                <div className="text-xs text-gray-500 mt-1">{notif.documente.rezumat}</div>
              )}
            </div>
            <div className="flex flex-col items-end gap-2 min-w-[110px]">
              <span className="text-xs text-gray-400">
                {notif.created_at ?
                  (formatDistanceToNow(new Date(notif.created_at), { addSuffix: true, locale: undefined })) : ""}
              </span>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className={notif.citita ? "text-gray-400 hover:text-blue-600" : "text-gray-400 hover:text-blue-600"}
                  onClick={async () => {
                    try {
                      await axios.patch('/api/notificari', { id: notif.id, citita: !notif.citita });
                      toast.success(`Notificarea a fost marcată ca ${notif.citita ? 'necitată' : 'citită'}!`);
                      queryClient.invalidateQueries(["notificari", userId]);
                    } catch (err) {
                      toast.error('Eroare la actualizare notificare!');
                    }
                  }}
                >
                  {notif.citita ? (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg>
                  ) : (
                    <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
                  )}
                </Button>
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-600"
                  onClick={() => {
                    setNotifToDelete(notif);
                    setDeleteModalOpen(true);
                  }}
                >
                  <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </Button>
              </div>
            </div>
          </Card>
        ))}
        {/* Modal confirmare ștergere notificare */}
        <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
          <DialogContent>
            <DialogTitle>Șterge notificarea?</DialogTitle>
            <div className="mb-4">Ești sigur că vrei să ștergi această notificare?</div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>Anulează</Button>
              <Button variant="destructive" onClick={async () => {
                try {
                  await axios.delete('/api/notificari', {
                    data: { id: notifToDelete.id }
                  });
                  setDeleteModalOpen(false);
                  toast.success('Notificarea a fost ștearsă cu succes!');
                  queryClient.invalidateQueries(["notificari", userId]);
                } catch (err) {
                  toast.error('Eroare la ștergerea notificării!');
                }
              }}>Șterge</Button>
            </div>
          </DialogContent>
        </Dialog>
        {/* Modal confirmare marchează toate ca citite */}
        <Dialog open={markAllModalOpen} onOpenChange={setMarkAllModalOpen}>
          <DialogContent>
            <DialogTitle>Marchează toate notificările ca citite?</DialogTitle>
            <div className="mb-4">Ești sigur că vrei să marchezi toate notificările ca citite?</div>
            <div className="flex justify-end gap-2">
              <Button variant="outline" onClick={() => setMarkAllModalOpen(false)}>Anulează</Button>
              <Button variant="default" onClick={async () => {
                try {
                  await axios.patch("/api/notificari", { destinatar_id: userId, citita: true });
                  toast.success("Toate notificările au fost marcate ca citite!");
                  queryClient.invalidateQueries(["notificari", userId]);
                  setMarkAllModalOpen(false);
                } catch (err) {
                  toast.error("Eroare la marcarea tuturor notificărilor ca citite!");
                }
              }}>Marchează toate</Button>
            </div>
          </DialogContent>
        </Dialog>
        {totalPages > 1 && (
          <div className="flex justify-center gap-2 mt-4">
            <Button variant="outline" size="sm" onClick={() => setPage(page - 1)} disabled={page === 1}>&lt;</Button>
            {Array.from({ length: totalPages }, (_, i) => (
              <Button key={i} variant={page === i + 1 ? "default" : "outline"} size="sm" onClick={() => setPage(i + 1)}>{i + 1}</Button>
            ))}
            <Button variant="outline" size="sm" onClick={() => setPage(page + 1)} disabled={page === totalPages}>&gt;</Button>
          </div>
        )}
      </div>
      
    </div>
  );
}