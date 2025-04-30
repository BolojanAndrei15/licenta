"use client";
import React from "react";
import { useState } from "react";
import { useQuery } from '@tanstack/react-query';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { toast } from "sonner";
import AddUtilizatorNou from "@/components/AddUtilizatorNou";
import AddRolNou from "@/components/AddRolNou";
import { useSetAtom } from "jotai";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import RolCard from "@/components/RolCard";
import LoguriTable from "@/components/LoguriTable";

const fetchUsers = async () => {
  const res = await axios.get('/api/utilizatori');
  return res.data.utilizatori || [];
};

const fetchRoles = async () => {
  const res = await axios.get('/api/rol_utilizator');
  return Array.isArray(res.data) ? res.data : [];
};

export default function SetariPage() {
  const [tab, setTab] = useState("utilizatori");
  const setPageTitle = useSetAtom(pageTitleAtom);
  React.useEffect(() => {
    setPageTitle("Setări Aplicație");
    return () => setPageTitle("");
  }, [setPageTitle]);

  const { data: users = [], isLoading, error } = useQuery({
    queryKey: ['utilizatori'],
    queryFn: fetchUsers,
    enabled: tab === 'utilizatori',
  });

  const queryClient = useQueryClient();
  const { data: roles = [], isLoading: loadingRoles, error: errorRoles } = useQuery({
    queryKey: ['roluri'],
    queryFn: fetchRoles,
  });

  return (
    <div className="p-0 max-w-7xl mx-auto">
    
      {/* Tabs - mutate mai sus */}
      <div className="px-8">
        <Tabs value={tab} onValueChange={setTab} className="mb-0">
          <TabsList className="flex gap-2 border-b border-gray-200 bg-transparent rounded-none shadow-none p-0 mb-8">
            <TabsTrigger value="utilizatori" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Utilizatori & Roluri</TabsTrigger>
            <TabsTrigger value="aspect" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Aspect Vizual</TabsTrigger>
            <TabsTrigger value="configurare" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Configurare</TabsTrigger>
            <TabsTrigger value="notificari" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Notificări</TabsTrigger>
            <TabsTrigger value="backup" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Backup</TabsTrigger>
            <TabsTrigger value="loguri" className="px-0 py-2 text-base font-semibold border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 rounded-none transition">Loguri</TabsTrigger>
          </TabsList>
          <TabsContent value="utilizatori">
            <div className="flex flex-col lg:flex-row gap-6 items-start w-full">
              {/* Utilizatori */}
              <div className="flex-1 w-full">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-900">Gestionare Utilizatori</h2>
                  <AddUtilizatorNou>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-none">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      Adaugă Utilizator
                    </Button>
                  </AddUtilizatorNou>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-x-auto">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead className="font-semibold text-gray-500 text-xs uppercase">Utilizator</TableHead>
                        <TableHead className="font-semibold text-gray-500 text-xs uppercase">Email</TableHead>
                        <TableHead className="font-semibold text-gray-500 text-xs uppercase">Rol</TableHead>
                        <TableHead className="font-semibold text-gray-500 text-xs uppercase">Data Înregistrării</TableHead>
                        <TableHead className="font-semibold text-gray-500 text-xs uppercase">Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {isLoading && (
                        <TableRow><TableCell colSpan={5}>Se încarcă...</TableCell></TableRow>
                      )}
                      {error && (
                        <TableRow><TableCell colSpan={5} className="text-red-500">Eroare la încărcare!</TableCell></TableRow>
                      )}
                      {users.length === 0 && !isLoading && !error && (
                        <TableRow><TableCell colSpan={5} className="text-gray-400">Nu există utilizatori.</TableCell></TableRow>
                      )}
                      {users.map((user) => (
                        <TableRow key={user.id} className="hover:bg-gray-50">
                          <TableCell>
                            <div className="flex items-center gap-3 font-medium">
                              <Avatar className="w-8 h-8">
                                <img src={user.avatar || '/file.svg'} alt="avatar" />
                              </Avatar>
                              <span className="text-sm font-semibold text-gray-900">{user.nume}</span>
                            </div>
                          </TableCell>
                          <TableCell className="text-sm text-gray-700">{user.email}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-xs font-semibold border border-blue-200">{user.roluri?.nume || '-'}</span>
                          </TableCell>
                          <TableCell className="text-sm text-gray-700">{user.data_inregistrare ? user.data_inregistrare : '-'}</TableCell>
                          <TableCell>
                            <span className="inline-flex items-center px-2 py-0.5 rounded bg-green-50 text-green-700 text-xs font-semibold border border-green-200">Activ</span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </div>
              {/* Roluri */}
              <div className="w-full lg:w-[370px] flex-shrink-0">
                <div className="flex justify-between items-center mb-2">
                  <h2 className="text-lg font-semibold text-gray-900">Gestionare Roluri</h2>
                  <AddRolNou onSuccess={() => queryClient.invalidateQueries(['roluri'])}>
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-4 py-2 text-sm font-semibold flex items-center gap-2 shadow-none">
                      <svg width="18" height="18" fill="none" viewBox="0 0 24 24"><path d="M12 5v14m7-7H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
                      Adaugă Rol
                    </Button>
                  </AddRolNou>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2">
                  <ul className="divide-y divide-gray-100">
                    {loadingRoles && <li className="p-4">Se încarcă rolurile...</li>}
                    {errorRoles && <li className="p-4 text-red-500">Eroare la încărcare roluri!</li>}
                    {roles.length === 0 && !loadingRoles && !errorRoles && <li className="p-4 text-gray-400">Nu există roluri.</li>}
                    {roles.map((rol) => (
                      <li key={rol.id} className="flex items-start gap-3 py-3 px-2 group">
                        <span className="mt-1 w-2.5 h-2.5 rounded-full" style={{background: rol.culoare || '#6366f1'}}></span>
                        <div className="flex-1">
                          <div className="flex items-center gap-1">
                            <span className="font-semibold text-sm text-gray-900">{rol.nume}</span>
                          </div>
                          <div className="text-xs text-gray-500 leading-tight">{rol.descriere || 'Fără descriere'}</div>
                        </div>
                        <button className="ml-2 opacity-60 hover:opacity-100 transition" title="Editează rolul">
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="loguri">
            <LoguriTable />
          </TabsContent>
          {/* Alte taburi pot fi completate la nevoie */}
        </Tabs>
      </div>
    </div>
  );
}

function DeleteUserDialog({ user }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/utilizatori", { data: { id: user.id } });
      toast.success("Utilizator șters cu succes!");
      setOpen(false);
      queryClient.invalidateQueries(['utilizatori']);
    } catch (err) {
      toast.error("Eroare la ștergere utilizator!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" title="Șterge">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirmă ștergerea</DialogTitle>
        </DialogHeader>
        <div className="mb-4">Ești sigur că vrei să ștergi utilizatorul <b>{user.nume}</b>?</div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={loading}>Anulează</Button>
          <Button variant="destructive" onClick={handleDelete} disabled={loading}>{loading ? "Se șterge..." : "Șterge"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}