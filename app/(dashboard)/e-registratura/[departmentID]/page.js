"use client";
import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import { useParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import AddRegistruModal from "@/components/AddRegistruModal";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Pencil, Trash2 } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "@/components/ui/select";

export default function Registre() {
  const { departmentID } = useParams();
  const [registre, setRegistre] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedRegistru, setSelectedRegistru] = useState(null);
  const [editData, setEditData] = useState({ nume: "", descriere: "", an: "", tip_registru_id: "" });
  const [editLoading, setEditLoading] = useState(false);
  const [deleteLoading, setDeleteLoading] = useState(false);
  const [editError, setEditError] = useState("");
  const [tipuriRegistre, setTipuriRegistre] = useState([]);
  const setPageTitle = useSetAtom(pageTitleAtom);

  // Funcție pentru încărcarea registrelor
  const fetchRegistre = useCallback(async () => {
    setLoading(true);
    try {
      const res = await axios.get(`/api/registre?departament_id=${departmentID}`);
      setRegistre(res.data.registre || []);
      setError("");
      if (res.data.registre && res.data.registre.length > 0 && res.data.registre[0].departamente?.nume) {
        setPageTitle(res.data.registre[0].departamente.nume);
      } else {
        setPageTitle("Registre departament");
      }
    } catch (err) {
      setError("Eroare la încărcarea registrelor");
      setPageTitle("Registre departament");
      toast.error("Eroare la încărcarea registrelor");
    } finally {
      setLoading(false);
    }
  }, [departmentID, setPageTitle]);

  // Încărcare inițială a registrelor
  useEffect(() => {
    if (!departmentID) return;
    fetchRegistre();
  }, [departmentID, fetchRegistre]);

  // Încărcare tipuri de registre o singură dată
  useEffect(() => {
    axios
      .get("/api/tipuri_registru")
      .then((res) => setTipuriRegistre(res.data || []))
      .catch(() => {
        setTipuriRegistre([]);
        toast.error("Eroare la încărcarea tipurilor de registre");
      });
  }, []);

  // Filtrare registre bazată pe căutare
  const filteredRegistre = registre.filter((reg) =>
    reg.nume.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <div>Se încarcă registrele...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  const handleEditClick = (registru) => {
    let tipId = registru.tip_registru_id || registru.tip_registru?.id || "";
    if (!tipId && tipuriRegistre.length > 0) {
      tipId = tipuriRegistre[0].id;
    }
    setSelectedRegistru(registru);
    setEditData({
      nume: registru.nume,
      descriere: registru.descriere,
      an: registru.an,
      tip_registru_id: tipId,
    });
    setEditError("");
    setEditModalOpen(true);
  };

  const handleEditSave = async (e) => {
    e.preventDefault();
    setEditLoading(true);
    setEditError("");
    try {
      const an = Number(editData.an);
      if (isNaN(an) || an <= 0) {
        throw new Error("Anul trebuie să fie un număr pozitiv.");
      }
      const tip_registru_id = editData.tip_registru_id;
      if (!tip_registru_id) {
        throw new Error("Tipul de registru este obligatoriu.");
      }
      const res = await axios.put("/api/registre", {
        id: selectedRegistru.id,
        nume: editData.nume,
        descriere: editData.descriere,
        an: an,
        tip_registru_id: tip_registru_id,
      });
      if (res.status !== 200) throw new Error("Eroare la editare registru");
      toast.success("Registrul a fost actualizat.");
      setEditModalOpen(false);
      // Actualizare locală a registrului
      setRegistre((prev) =>
        prev.map((r) =>
          r.id === selectedRegistru.id
            ? { ...r, ...editData, an: an, tip_registru_id: tip_registru_id }
            : r
        )
      );
    } catch (err) {
      const errorMessage = err.message || "Eroare necunoscută";
      setEditError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setEditLoading(false);
    }
  };

  const handleDeleteClick = (registru) => {
    setSelectedRegistru(registru);
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = async () => {
    setDeleteLoading(true);
    try {
      const res = await axios.delete("/api/registre", { data: { id: selectedRegistru.id } });
      if (res.status !== 200) throw new Error("Eroare la ștergere registru");
      toast.success("Registrul a fost șters.");
      setDeleteModalOpen(false);
      // Eliminare locală a registrului
      setRegistre((prev) => prev.filter((r) => r.id !== selectedRegistru.id));
    } catch (err) {
      toast.error(err.message || "Eroare necunoscută");
    } finally {
      setDeleteLoading(false);
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
        <h1 className="text-2xl font-bold">Registre departament</h1>
        <div className="flex gap-2 items-center w-full md:w-auto">
          <Input
            placeholder="Caută registre..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="max-w-xs"
          />
          <Button onClick={() => setAddModalOpen(true)} variant="default">
            Adaugă registru
          </Button>
        </div>
      </div>
      <AddRegistruModal
        open={addModalOpen}
        onOpenChange={setAddModalOpen}
        departmentId={departmentID}
        onRegistruAdded={() => {
          fetchRegistre();
          toast.success("Registrul a fost adăugat.");
        }}
        ani={[]}
      />
      {filteredRegistre.length === 0 ? (
        <div>Nu există registre pentru acest departament.</div>
      ) : (
        <div className="overflow-x-auto rounded-lg border bg-white">
          <table className="min-w-full text-sm align-middle">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left font-semibold text-xs text-gray-500">NUME REGISTRU</th>
                <th className="px-4 py-3 text-left font-semibold text-xs text-gray-500">TIP REGISTRU</th>
                <th className="px-4 py-3 text-left font-semibold text-xs text-gray-500">DATA CREĂRII</th>
                <th className="px-4 py-3 text-left font-semibold text-xs text-gray-500">ÎNREGISTRĂRI</th>
                <th className="px-4 py-3 text-left font-semibold text-xs text-gray-500">ACȚIUNI</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredRegistre.map((reg) => (
                <tr key={reg.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 whitespace-nowrap flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-blue-500"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h7l5 5v11a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span className="font-medium text-sm text-blue-900">{reg.nume}</span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-700">{reg.tip_registru?.nume || "-"}</td>
                  <td className="px-4 py-3 whitespace-nowrap text-gray-700">
                    {reg.data_creare ? new Date(reg.data_creare).toLocaleDateString("ro-RO") : "-"}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                      {reg.numar_inregistrari} înregistrări
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap flex gap-2 items-center">
                    <Link href={`/e-registratura/${departmentID}/${reg.id}`}>
                      <Button size="icon" variant="ghost" title="Vezi detalii">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4 text-blue-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </Button>
                    </Link>
                    <Button size="icon" variant="ghost" onClick={() => handleEditClick(reg)} title="Editează">
                      <Pencil className="w-4 h-4 text-gray-700" />
                    </Button>
                    <Button size="icon" variant="ghost" onClick={() => handleDeleteClick(reg)} title="Șterge">
                      <Trash2 className="w-4 h-4 text-red-500" />
                    </Button>
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
            <DialogTitle>Editează registrul</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSave} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="edit-nume">Nume registru</Label>
              <Input
                id="edit-nume"
                value={editData.nume}
                onChange={(e) => setEditData({ ...editData, nume: e.target.value })}
                required
                disabled={editLoading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-descriere">Descriere</Label>
              <Input
                id="edit-descriere"
                value={editData.descriere}
                onChange={(e) => setEditData({ ...editData, descriere: e.target.value })}
                required
                disabled={editLoading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-an">An</Label>
              <Input
                id="edit-an"
                type="number"
                value={editData.an}
                onChange={(e) => setEditData({ ...editData, an: e.target.value })}
                required
                disabled={editLoading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-tip">Tip registru</Label>
              <Select
                value={editData.tip_registru_id?.toString()}
                onValueChange={(value) => setEditData({ ...editData, tip_registru_id: value })}
                disabled={editLoading}
                required
              >
                <SelectTrigger className="w-full" id="edit-tip">
                  <SelectValue placeholder="Alege tipul de registru" />
                </SelectTrigger>
                <SelectContent>
                  {tipuriRegistre.map((tip) => (
                    <SelectItem key={tip.id} value={tip.id.toString()}>{tip.nume}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            {editError && <div className="text-red-500 text-xs mt-1">{editError}</div>}
            <DialogFooter>
              <Button
                type="button"
                variant="outline"
                onClick={() => setEditModalOpen(false)}
                disabled={editLoading}
              >
                Anulează
              </Button>
              <Button type="submit" disabled={editLoading}>
                {editLoading ? "Se salvează..." : "Salvează"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {/* Delete Confirm Modal */}
      <Dialog open={deleteModalOpen} onOpenChange={setDeleteModalOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Șterge registrul</DialogTitle>
          </DialogHeader>
          <div className="mb-4">
            Ești sigur că vrei să ștergi registrul <b>{selectedRegistru?.nume}</b>? Această acțiune este
            ireversibilă.
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setDeleteModalOpen(false)}
              disabled={deleteLoading}
            >
              Anulează
            </Button>
            <Button
              type="button"
              variant="destructive"
              onClick={handleDeleteConfirm}
              disabled={deleteLoading}
            >
              {deleteLoading ? "Se șterge..." : "Șterge"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}