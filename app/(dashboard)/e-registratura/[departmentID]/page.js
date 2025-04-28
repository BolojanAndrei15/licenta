"use client";
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Eye, FileText } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useSetAtom } from 'jotai';
import { pageTitleAtom } from '@/lib/pageTitleAtom';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AddRegistruModal from '@/components/AddRegistruModal';
import EditRegistruModal from '@/components/EditRegistruModal';
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
  const [tipuriRegistru, setTipuriRegistru] = useState([]);

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
  const { data: registreData, isLoading, error, refetch } = useQuery({
    queryKey: ['registre', departmentID],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?departament_id=${departmentID}`);
      return res.data;
    },
  });
  const registreList = Array.isArray(registreData?.registre) ? registreData.registre : [];

  // Dropdown pentru ani: doar anii existenți în baza de date
  const aniDisponibili = Array.isArray(registreData?.ani) ? registreData.ani : [];
  const currentYear = new Date().getFullYear();
  const [selectedAn, setSelectedAn] = useState(currentYear);

  // Actualizează selectedAn dacă lista de ani se schimbă și anul selectat nu mai există
  useEffect(() => {
    if (aniDisponibili.length > 0 && !aniDisponibili.includes(selectedAn)) {
      setSelectedAn(aniDisponibili[0]);
    }
  }, [aniDisponibili, selectedAn]);

  // Filtrare după an
  const filteredRegistre = registreList.filter(reg =>
    (reg.an === selectedAn) &&
    (reg.nume.toLowerCase().includes(search.toLowerCase()) ||
     reg.descriere.toLowerCase().includes(search.toLowerCase()))
  );

  // Edit handler
  const handleEdit = async (e) => {
    e.preventDefault();
    setEditError("");
    setEditLoading(true);
    const { id, nume, descriere, an, min_val, max_val, departament_id, tip_registru_id } = editModal.registru;
    try {
      if (!an || isNaN(an) || an < 1992 || an > currentYear) {
        setEditError(`Anul trebuie să fie între 1992 și ${currentYear}.`);
        return;
      }
      if (!tip_registru_id) {
        setEditError('Selectează tipul registrului.');
        return;
      }
      await axios.put('/api/registre', {
        id,
        nume,
        descriere,
        an: Number(an),
        min_val: Number(min_val),
        max_val: Number(max_val),
        departament_id,
        tip_registru_id
      });
      setEditModal({ open: false, registru: null });
      toast.success('Registrul a fost actualizat cu succes.', {
        style: { background: '#22c55e', color: 'white' }
      });
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
      toast.success('Registrul a fost șters cu succes.', {
        style: { background: '#22c55e', color: 'white' }
      });
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
        <div className="flex gap-2 w-full sm:w-auto">
          <Input
            placeholder="Caută registru..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <select
            className="border rounded px-2 py-1"
            value={selectedAn}
            onChange={e => setSelectedAn(Number(e.target.value))}
          >
            {aniDisponibili.map(anOpt => (
              <option key={anOpt} value={anOpt}>{anOpt}</option>
            ))}
          </select>
        </div>
        <Button className="w-full sm:w-auto mt-2 sm:mt-0" onClick={() => setModalOpen(true)}>
          Adaugă registru nou
        </Button>
      </div>
      <AddRegistruModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        departmentId={departmentID}
        onRegistruAdded={() => refetch()}
        ani={aniDisponibili}
      />
     <div className="mt-8 space-y-2">
  {/* Header „tabel” */}
  <div className="flex items-center px-4 py-2 bg-gray-100 text-gray-600 text-xs font-semibold rounded-md">
    {/* Icon gol + titlu */}
    <div className="flex items-center gap-2 flex-1">
      <div className="w-4" />
      <span>Nume registru</span>
    </div>
    <div className="flex-1 text-center">Tip registru</div>
    <div className="flex-1 text-center">Număr înregistrări</div>
    <div className="flex-1 text-center">Valoare minimă</div>
    <div className="flex-1 text-center">Valoare maximă</div>
    <div className="w-28 text-right">Acțiuni</div>
  </div>
  {/* Conținut */}
  {isLoading ? (
    [...Array(5)].map((_, idx) => (
      <div
        key={idx}
        className="flex items-center bg-white p-3 rounded-md shadow-sm border"
      >
        <div className="flex items-center gap-2 flex-1">
          <Skeleton className="h-4 w-4 rounded-full" />
          <Skeleton className="h-3 w-24" />
        </div>
        <Skeleton className="h-3 w-16 flex-1 mx-auto" />
        <Skeleton className="h-3 w-16 flex-1 mx-auto" />
        <Skeleton className="h-3 w-16 flex-1 mx-auto" />
        <div className="flex gap-2 w-28 justify-end">
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-6 w-6 rounded-md" />
        </div>
      </div>
    ))
  ) : error ? (
    <div className="text-center text-gray-500 py-8 text-xs">
      Eroare la încărcare registre.
    </div>
  ) : filteredRegistre.length > 0 ? (
    filteredRegistre.map((registru) => (
      <div
        key={registru.id}
        className="flex items-center bg-white p-3 rounded-md shadow-sm border hover:bg-gray-50 transition"
      >
        {/* Icon + nume */}
        <div className="flex items-center gap-2 flex-1">
          <FileText className="text-blue-600 w-4 h-4" />
          <span className="font-medium text-gray-800 text-xs">
            {registru.nume}
          </span>
        </div>
        {/* Tip registru */}
        <div className="flex-1 text-center text-xs">
          {registru.tip_registru?.nume || '-'}
        </div>
        {/* Număr înregistrări */}
        <div className="flex-1 text-center">
          <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">
            {registru.numar_inregistrari} înregistrări
          </span>
        </div>
        {/* Valoare minimă */}
        <div className="flex-1 text-center text-xs">
          {registru.min_val}
        </div>

        {/* Valoare maximă */}
        <div className="flex-1 text-center text-xs">
          {registru.max_val}
        </div>

        {/* Butoane acțiuni */}
        <div className="flex gap-2 w-28 justify-end">
          <Button
            size="icon"
            variant="outline"
            onClick={() => setEditModal({ open: true, registru: { ...registru, tip_registru_id: registru.tip_registru_id || (registru.tip_registru && registru.tip_registru.id) || '' } })}
            title="Editează"
          >
            <Pencil className="w-4 h-4" />
          </Button>
          <Button
            size="icon"
            variant="destructive"
            onClick={() => setDeleteModal({ open: true, registru })}
            title="Șterge"
          >
            <Trash2 className="w-4 h-4" />
          </Button>
        </div>
      </div>
    ))
  ) : (
    <div className="text-center text-gray-500 py-8 text-xs">
      Nu există registre pentru acest departament.
    </div>
  )}
</div>






      {/* Edit Modal */}
      <EditRegistruModal
        open={editModal.open}
        onOpenChange={open => setEditModal({ open, registru: open ? editModal.registru : null })}
        registru={editModal.registru}
        setRegistru={r => setEditModal(m => ({ ...m, registru: r }))}
        onSubmit={handleEdit}
        loading={editLoading}
        error={editError}
        tipuriRegistru={tipuriRegistru}
      />
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