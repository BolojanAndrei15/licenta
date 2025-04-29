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
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-2">Setări Aplicație</h1>
      <Tabs value={tab} onValueChange={setTab} className="mb-6">
        <TabsList>
          <TabsTrigger value="utilizatori">Utilizatori</TabsTrigger>
          <TabsTrigger value="aspect">Aspect Vizual</TabsTrigger>
          <TabsTrigger value="configurare">Configurare</TabsTrigger>
          <TabsTrigger value="notificari">Notificări</TabsTrigger>
          <TabsTrigger value="backup">Backup</TabsTrigger>
          <TabsTrigger value="loguri">Loguri</TabsTrigger>
        </TabsList>
        <TabsContent value="utilizatori">
          {/* Carduri roluri + adaugare rol nou */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-base font-medium">Gestionare Roluri</h2>
              <AddRolNou onSuccess={() => queryClient.invalidateQueries(['roluri'])} />
            </div>
            <div className="flex flex-wrap gap-4">
              {loadingRoles && <div>Se încarcă rolurile...</div>}
              {errorRoles && <div className="text-red-500">Eroare la încărcare roluri!</div>}
              {roles.length === 0 && !loadingRoles && !errorRoles && <div className="text-gray-400">Nu există roluri.</div>}
              {roles.map((rol) => (
                <RolCard key={rol.id} rol={rol} onDelete={() => queryClient.invalidateQueries(['roluri'])} />
              ))}
            </div>
          </div>
          {/* ...restul codului pentru utilizatori... */}
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-base font-medium">Gestionare Utilizatori</h2>
            <AddUtilizatorNou />
          </div>
          <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Utilizator</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Rol</TableHead>
                  <TableHead>Departament</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Acțiuni</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isLoading && (
                  <TableRow><TableCell colSpan={6}>Se încarcă...</TableCell></TableRow>
                )}
                {error && (
                  <TableRow><TableCell colSpan={6} className="text-red-500">Eroare la încărcare!</TableCell></TableRow>
                )}
                {users.length === 0 && !isLoading && !error && (
                  <TableRow><TableCell colSpan={6} className="text-gray-400">Nu există utilizatori.</TableCell></TableRow>
                )}
                {users.map((user) => (
                  <TableRow key={user.id}>
                    <TableCell>
                      <div className="flex items-center gap-3 font-medium">
                        <Avatar>
                          <img src={user.avatar || '/file.svg'} alt="avatar" />
                        </Avatar>
                        {user.nume}
                      </div>
                    </TableCell>
                    <TableCell>{user.email}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-blue-700 border-blue-200 bg-blue-50">{user.roluri?.nume || '-'}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-gray-700 border-gray-200 bg-gray-50">{user.departamente?.nume || '-'}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-green-700 border-green-200 bg-green-50">Activ</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button size="icon" variant="ghost" title="Editează">
                          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
                        </Button>
                        <DeleteUserDialog user={user} />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </TabsContent>
        {/* Alte taburi pot fi completate la nevoie */}
      </Tabs>
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