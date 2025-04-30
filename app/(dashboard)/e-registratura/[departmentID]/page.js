"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import AddRegistruModal from "@/components/AddRegistruModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { Skeleton } from "@/components/ui/skeleton";

export default function Registre() {
  const { departmentID } = useParams();
  const { data: session } = useSession();
  const userRole = session?.user?.rol;
  const canEdit = ["Administrator", "Primar", "Secretar General"].includes(userRole);

  const [search, setSearch] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [selectedRegistru, setSelectedRegistru] = useState(null);
  const [editData, setEditData] = useState({ nume: "", descriere: "", an: "", tip_registru_id: "" });

  const setPageTitle = useSetAtom(pageTitleAtom);

  useEffect(() => {
    if (!departmentID) return;
    async function fetchDepartmentName() {
      try {
        const res = await axios.get("/api/department");
        const departments = res.data?.departments || [];
        const department = departments.find(dep => String(dep.id) === String(departmentID));
        setPageTitle(department ? department.nume : "Registre departament");
      } catch {
        setPageTitle("Registre departament");
      }
    }
    fetchDepartmentName();
    return () => setPageTitle("");
  }, [departmentID, setPageTitle]);

  // Fetch registre, ani, tipuri_registru
  const { data, isLoading, error } = useQuery({
    queryKey: ["registre", departmentID],
    queryFn: async () => {
      const { data } = await axios.get(`/api/registre?department_id=${departmentID}`);
      return data;
    },
    enabled: !!departmentID,
  });

  const registre = data?.registre || [];
  const tipuriRegistre = data?.tipuri_registru || [];
  const ani = data?.ani || [];

  

  const queryClient = useQueryClient();

  // Add Registru Mutation
  const addRegistruMutation = useMutation({
    mutationFn: (payload) => axios.post("/api/registre", payload),
    onSuccess: () => {
      queryClient.invalidateQueries(["registre", departmentID]);
      setAddModalOpen(false);
      toast.success("Registru adăugat cu succes");
    },
  });

  // Edit Registru Mutation
  const editRegistruMutation = useMutation({
    mutationFn: (data) => axios.put("/api/registre", data),
    onSuccess: () => {
      queryClient.invalidateQueries(["registre", departmentID]);
      setEditModalOpen(false);
      toast.success("Registru actualizat cu succes", {
        style: { background: "#22c55e", color: "white" },
      });
    },
  });

  // Delete Registru Mutation
  const deleteRegistruMutation = useMutation({
    mutationFn: (id) => axios.delete("/api/registre", { data: { id } }),
    onSuccess: () => {
      queryClient.invalidateQueries(["registre", departmentID]);
      setDeleteModalOpen(false);
      toast.success("Registru șters", {
        style: { background: "#22c55e", color: "white" },
      });
    },
  });

  // Handlers
  const handleEditClick = (registru) => {
    setSelectedRegistru(registru);
    setEditData({
      nume: registru.nume,
      descriere: registru.descriere,
      an: registru.an.toString(),
      tip_registru_id: registru.tip_registru_id?.toString() || "",
    });
    setEditModalOpen(true);
  };

  const handleSubmitEdit = (e) => {
    e.preventDefault();
    const numericAn = parseInt(editData.an, 10);

    if (!editData.nume || !editData.tip_registru_id || isNaN(numericAn)) {
      toast.error("Completează toate câmpurile obligatorii");
      return;
    }

    editRegistruMutation.mutate({
      id: selectedRegistru.id,
      ...editData,
      an: numericAn,
    });
  };

  const filteredRegistre = registre.filter((reg) =>
    reg.nume.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return (
    <div className="space-y-2">
      <Skeleton className="h-10 w-1/3" />
      <div className="border rounded-lg overflow-hidden bg-white">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3">&nbsp;</th>
              <th className="px-6 py-3">&nbsp;</th>
              <th className="px-6 py-3">&nbsp;</th>
              <th className="px-6 py-3">&nbsp;</th>
              <th className="px-6 py-3">&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(5)].map((_, i) => (
              <tr key={i}>
                {[...Array(5)].map((_, j) => (
                  <td key={j} className="px-6 py-3">
                    <Skeleton className="h-6 w-full" />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
  if (error) return <div className="text-red-500">Eroare la încărcare: {error.message}</div>;


  return (
    <div className="p-6">
      {/* Header și Search */}
      <div className="flex w-full justify-between md:w-auto mb-6">
        <Input
          placeholder="Caută registre..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-xs"
        />
        {canEdit && (
          <Button onClick={() => setAddModalOpen(true)}>Adaugă registru</Button>
        )}
      </div>


      {/* Add Registru Modal */}
      <AddRegistruModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        departmentId={departmentID}
        tipuriRegistre={tipuriRegistre}
        ani={ani}
        onSuccess={(data) => addRegistruMutation.mutate(data)}
      />

      {/* Tabel Registre */}
      {filteredRegistre.length === 0 ? (
        <div className="text-gray-500">
          Nu există registre în acest departament
        </div>
      ) : (
        <div className="border rounded-lg overflow-hidden bg-white">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  <span className="pl-2">Nume Registru</span>
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  Tip Registru
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  Data Creării
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  Înregistrări
                </th>
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-400 tracking-wider uppercase">
                  Acțiuni
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRegistre.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-50">
                  <td className="px-6 py-3 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z" /></svg>
                    <span className="font-medium text-gray-700">{reg.nume}</span>
                  </td>
                  <td className="px-6 py-3 text-gray-600">{reg.tip_registru?.nume || "-"}</td>
                  <td className="px-6 py-3 text-gray-600">{new Date(reg.data_creare).toLocaleDateString("ro-RO", { day: '2-digit', month: '2-digit', year: 'numeric' })}</td>
                  <td className="px-6 py-3">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded text-xs font-semibold">
                      {reg.numar_inregistrari} înregistrări
                    </span>
                  </td>
                  <td className="px-6 py-3 flex gap-2">
                    <Link href={`/e-registratura/${departmentID}/${reg.id}`}> 
                      <Button variant="ghost" size="icon">
                        <Eye className="w-4 h-4" />
                      </Button>
                    </Link>
                    {canEdit && (
                      <>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => handleEditClick(reg)}
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => {
                            setSelectedRegistru(reg);
                            setDeleteModalOpen(true);
                          }}
                        >
                          <Trash2 className="w-4 h-4 text-red-500" />
                        </Button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Edit Modal */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Editează Registru</DialogTitle>
    </DialogHeader>
    <form onSubmit={handleSubmitEdit}>
      <div className="space-y-4">
        <div className="space-y-1">
          <Label>Nume Registru</Label>
          <Input
            value={editData.nume}
            onChange={(e) => setEditData({ ...editData, nume: e.target.value })}
            required
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label>Descriere</Label>
          <Input
            value={editData.descriere}
            onChange={(e) =>
              setEditData({ ...editData, descriere: e.target.value })
            }
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label>An</Label>
          <Input
            type="number"
            value={editData.an}
            onChange={(e) =>
              setEditData({ ...editData, an: e.target.value })
            }
            required
            className="w-full"
          />
        </div>

        <div className="space-y-1">
          <Label>Tip Registru</Label>
          <Select
            value={editData.tip_registru_id}
            onValueChange={(value) =>
              setEditData({ ...editData, tip_registru_id: value })
            }
            required
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selectează tipul" />
            </SelectTrigger>
            <SelectContent>
              {tipuriRegistre.map((tip) => (
                <SelectItem key={tip.id} value={tip.id.toString()}>
                  {tip.nume}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <DialogFooter className="mt-4">
        <Button
          type="button"
          variant="outline"
          onClick={() => setEditModalOpen(false)}
        >
          Anulează
        </Button>
        <Button type="submit" disabled={editRegistruMutation.isLoading}>
          {editRegistruMutation.isLoading ? "Salvează..." : "Salvează"}
        </Button>
      </DialogFooter>
    </form>
  </DialogContent>
</Dialog>

      {/* Delete Modal */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ștergi registrul?</DialogTitle>
          </DialogHeader>
          <p className="text-gray-600">
            Ești sigur că vrei să ștergi registrul "{selectedRegistru?.nume}"? Această acțiune este permanentă.
          </p>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDeleteModalOpen(false)}>
              Anulează
            </Button>
            <Button
              variant="destructive"
              onClick={() => deleteRegistruMutation.mutate(selectedRegistru?.id)}
              disabled={deleteRegistruMutation.isLoading}
            >
              {deleteRegistruMutation.isLoading ? "Ștergere..." : "Șterge"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
