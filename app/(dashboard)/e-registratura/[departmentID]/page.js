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

export default function ERegistraturaDepartmentPage() {
  const { departmentID } = useParams();
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

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
        <h2 className="text-lg font-semibold mb-4">Registrele departamentului</h2>
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
                  <TableCell>{/* Butoane acțiuni aici */}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow><TableCell colSpan={4}>Nu există registre pentru acest departament.</TableCell></TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </>
  );
}