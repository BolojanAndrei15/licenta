"use client";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { FileText } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSetAtom } from 'jotai';
import { pageTitleAtom } from '@/lib/pageTitleAtom';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AddRegistruModal from '@/components/AddRegistruModal';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Pencil, Trash2 } from 'lucide-react';

export default function ERegistraturaDepartmentPage() {
  const { departmentID } = useParams();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [editModal, setEditModal] = useState({ open: false, registru: null });
  const [deleteModal, setDeleteModal] = useState({ open: false, registru: null });
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editError, setEditError] = useState("");

  const setPageTitle = useSetAtom(pageTitleAtom);

  // Setează numele departamentului în atom pentru breadcrumb
  useEffect(() => {
    async function fetchDepartmentName() {
      try {
        const res = await axios.get('/api/department');
        const departments = res.data?.departments || [];
        const department = departments.find(dep => String(dep.id) === String(departmentID));
        setPageTitle(department ? department.nume : '');
      } catch {
        setPageTitle('');
      }
    }
    fetchDepartmentName();
    return () => setPageTitle('');
  }, [departmentID, setPageTitle]);

  // Fetch registre pentru departament
  const { data: registre, isLoading, error, refetch } = useQuery({
    queryKey: ['registre', departmentID],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?departament_id=${departmentID}`);
      return res.data;
    },
  });
  const registreList = Array.isArray(registre) ? registre : [];

  const filteredRegistre = registreList.filter(reg =>
    reg.nume.toLowerCase().includes(search.toLowerCase()) ||
    reg.descriere.toLowerCase().includes(search.toLowerCase())
  );

  // Edit handler
  const handleEdit = async (e) => {
    e.preventDefault();
    setEditError("");
    setEditLoading(true);
    const { id, nume, descriere, an, min_val, max_val, departament_id } = editModal.registru;
    try {
      await axios.put('/api/registre', {
        id,
        nume,
        descriere,
        an: Number(an),
        min_val: Number(min_val),
        max_val: Number(max_val),
        departament_id
      });
      setEditModal({ open: false, registru: null });
      toast.success('Registrul a fost actualizat cu succes.');
      refetch();
    } catch (err) {
      setEditError(err.response?.data?.error || err.message || 'Eroare necunoscută');
      toast.error(err.response?.data?.error || err.message || 'Eroare la editare registru.');
    } finally {
      setEditLoading(false);
    }
  };

  // Delete handler
  const handleDelete = async () => {
    setDeleteLoading(true);
    try {
      await axios.delete('/api/registre', {
        data: { id: deleteModal.registru.id }
      });
      setDeleteModal({ open: false, registru: null });
      toast.success('Registrul a fost șters cu succes.');
      refetch();
    } catch (err) {
      toast.error(err.response?.data?.error || err.message || 'Eroare la ștergere registru.');
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <Input
          placeholder="Caută registru..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Button className="w-full sm:w-auto mt-2 sm:mt-0" onClick={() => setModalOpen(true)}>
          Adaugă registru nou
        </Button>
      </div>
      <AddRegistruModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        departmentId={departmentID}
        onRegistruAdded={() => refetch()}
      />
      <div className="mt-8">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead></TableHead>
              <TableHead>Nume registru</TableHead>
              <TableHead>Număr înregistrări</TableHead>
              <TableHead>Acțiuni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              [...Array(5)].map((_, idx) => (
                <TableRow key={idx}>
                  <TableCell><Skeleton className="h-6 w-6 rounded-full" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-32" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-16" /></TableCell>
                  <TableCell><Skeleton className="h-6 w-24" /></TableCell>
                </TableRow>
              ))
            ) : error ? (
              <TableRow><TableCell colSpan={4}>Eroare la încărcare registre.</TableCell></TableRow>
            ) : filteredRegistre.length > 0 ? (
              filteredRegistre.map(registru => (
                <TableRow key={registru.id}>
                  <TableCell><FileText className="text-blue-600" /></TableCell>
                  <TableCell>{registru.nume}</TableCell>
                  <TableCell>{registru.numar_inregistrari}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="icon" variant="outline" onClick={() => setEditModal({ open: true, registru })} title="Editează">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="destructive" onClick={() => setDeleteModal({ open: true, registru })} title="Șterge">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={4}>Nu există registre pentru acest departament.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Modal */}
      <Dialog open={editModal.open} onOpenChange={open => setEditModal({ open, registru: open ? editModal.registru : null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editează registrul</DialogTitle>
          </DialogHeader>
          {editModal.registru && (
            <form onSubmit={handleEdit} className="space-y-4">
              <div className="space-y-1">
                <Label htmlFor="edit-nume">Nume registru</Label>
                <Input
                  id="edit-nume"
                  value={editModal.registru.nume}
                  onChange={e => setEditModal(m => ({ ...m, registru: { ...m.registru, nume: e.target.value } }))}
                  required
                  disabled={editLoading}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="edit-descriere">Descriere</Label>
                <Input
                  id="edit-descriere"
                  value={editModal.registru.descriere}
                  onChange={e => setEditModal(m => ({ ...m, registru: { ...m.registru, descriere: e.target.value } }))}
                  required
                  disabled={editLoading}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="edit-an">An</Label>
                <Input
                  id="edit-an"
                  type="number"
                  value={editModal.registru.an}
                  onChange={e => setEditModal(m => ({ ...m, registru: { ...m.registru, an: e.target.value } }))}
                  required
                  min={1900}
                  max={2100}
                  disabled={editLoading}
                />
              </div>
              <div className="flex gap-4 justify-between">
                <div className="space-y-1 flex-1">
                  <Label htmlFor="edit-minVal">Valoare minimă</Label>
                  <Input
                    id="edit-minVal"
                    type="number"
                    value={editModal.registru.min_val}
                    onChange={e => setEditModal(m => ({ ...m, registru: { ...m.registru, min_val: e.target.value } }))}
                    required
                    min={0}
                    disabled={editLoading}
                  />
                </div>
                <div className="space-y-1 flex-1">
                  <Label htmlFor="edit-maxVal">Valoare maximă</Label>
                  <Input
                    id="edit-maxVal"
                    type="number"
                    value={editModal.registru.max_val}
                    onChange={e => setEditModal(m => ({ ...m, registru: { ...m.registru, max_val: e.target.value } }))}
                    required
                    min={editModal.registru.min_val}
                    disabled={editLoading}
                  />
                </div>
              </div>
              {editError && <div className="text-red-500 text-xs mt-1">{editError}</div>}
              <DialogFooter>
                <Button type="button" variant="outline" onClick={() => setEditModal({ open: false, registru: null })} disabled={editLoading}>
                  Anulează
                </Button>
                <Button type="submit" disabled={editLoading}>
                  {editLoading ? "Se salvează..." : "Salvează"}
                </Button>
              </DialogFooter>
            </form>
          )}
        </DialogContent>
      </Dialog>
      {/* Delete Confirm Modal */}
      <Dialog open={deleteModal.open} onOpenChange={open => setDeleteModal({ open, registru: open ? deleteModal.registru : null })}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Șterge registrul</DialogTitle>
          </DialogHeader>
          <div className="mb-4">Ești sigur că vrei să ștergi registrul <b>{deleteModal.registru?.nume}</b>? Această acțiune este ireversibilă.</div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setDeleteModal({ open: false, registru: null })} disabled={deleteLoading}>
              Anulează
            </Button>
            <Button type="button" variant="destructive" onClick={handleDelete} disabled={deleteLoading}>
              {deleteLoading ? "Se șterge..." : "Șterge"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}