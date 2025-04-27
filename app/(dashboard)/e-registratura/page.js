"use client";

import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import DepartmentCard from '@/components/DepartmentCard';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import AddDepartmentModal from '@/components/AddDepartmentModal';

export default function ERegistraturaPage() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['departments'],
    queryFn: async () => {
      const res = await axios.get('/api/department');
      return res.data;
    },
  });
  const [search, setSearch] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const filteredData = data?.filter(dep =>
    dep.nume.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {[...Array(6)].map((_, idx) => (
        <div key={idx} className="col-span-1">
          {/* Poți folosi un skeleton component dacă ai */}
          <div className="animate-pulse bg-gray-200 rounded-lg h-40 w-full mb-2" />
          <div className="animate-pulse bg-gray-200 rounded h-6 w-2/3 mb-1" />
          <div className="animate-pulse bg-gray-100 rounded h-4 w-1/2" />
        </div>
      ))}
    </div>
  );
  if (error) return <div>Eroare la încărcare departamente.</div>;

  return (
    <>
      <AddDepartmentModal
        open={modalOpen}
        onOpenChange={setModalOpen}
        onDepartmentAdded={() => refetch()}
      />
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
        <Input
          placeholder="Caută departament..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="max-w-xs"
        />
        <Button className="w-full sm:w-auto mt-2 sm:mt-0" onClick={() => setModalOpen(true)}>
          Adaugă departament nou
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData && filteredData.length > 0 ? (
          filteredData.map(dep => (
            <DepartmentCard
              key={dep.id}
              titluDepartament={dep.nume}
              descriere={dep.descriere}
              nrRegistreActive={dep.registre}
              nrUtilizatori={dep.utilizatori}
              departmentId={dep.id}
              onVeziRegistre={() => {}}
              onEditare={refetch}
              onStergere={refetch}
            />
          ))
        ) : (
          <div className="col-span-4 text-center">Nu există departamente.</div>
        )}
      </div>
    </>
  );
}