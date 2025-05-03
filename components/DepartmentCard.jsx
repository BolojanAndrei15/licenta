import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2, User } from "lucide-react";
import PropTypes from "prop-types";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import axios from "axios";

const DepartmentCard = ({
  titluDepartament,
  descriere,
  nrRegistreActive,
  nrUtilizatori,
  departmentId,
  onEditare,
  onStergere,
  canEdit,
}) => {
  const router = useRouter();
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editNume, setEditNume] = useState(titluDepartament);
  const [editDescriere, setEditDescriere] = useState(descriere);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    setError("");
    const toastId = toast.loading("Se șterge departamentul...");
    try {
      const res = await axios.delete("/api/department", {
        data: { id: departmentId },
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Departamentul a fost șters cu succes.", { id: toastId, style: { background: '#22c55e', color: 'white' } });
      setDeleteOpen(false);
      onStergere();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Eroare necunoscută");
      toast.error(err.response?.data?.message || err.message || "Eroare la ștergere departament.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const toastId = toast.loading("Se salvează modificările...");
    try {
      const res = await axios.put("/api/department", {
        id: departmentId,
        nume: editNume,
        descriere: editDescriere
      }, {
        headers: { "Content-Type": "application/json" }
      });
      toast.success("Departamentul a fost actualizat cu succes.", { id: toastId, style: { background: '#22c55e', color: 'white' } });
      setEditOpen(false);
      onEditare();
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Eroare necunoscută");
      toast.error(err.response?.data?.message || err.message || "Eroare la editare departament.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col gap-5 border border-gray-200 transition-shadow hover:shadow-md">
      {/* Header Section */}
      <div className="flex justify-between items-start gap-2">
        <div className="flex-1 min-w-0">
          <h2 className="text-lg font-semibold text-gray-900 truncate">{titluDepartament}</h2>
          <div className="text-gray-500 text-sm mt-1 line-clamp-2">{descriere}</div>
        </div>
        {canEdit && (
          <div className="flex gap-1.5">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setEditOpen(true)}
              title="Editează"
              className="h-8 w-8 border-gray-200"
            >
              <Pencil className="h-4 w-4 text-gray-500" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setDeleteOpen(true)}
              title="Șterge"
              className="h-8 w-8 border-gray-200 hover:bg-red-50 hover:text-red-600"
            >
              <Trash2 className="h-4 w-4 text-gray-500" />
            </Button>
          </div>
        )}
      </div>
      {/* Metrics Section */}
      <div className="flex gap-6 mt-2">
        <div className="text-gray-700 text-sm font-medium">
          <span className="font-semibold text-blue-600">{nrRegistreActive}</span> registre active
        </div>
        <div className="flex items-center gap-1 text-gray-700 text-sm font-medium">
          <User className="h-4 w-4 text-blue-600" />
          <span className="font-semibold text-blue-600">{nrUtilizatori}</span> utilizatori
        </div>
      </div>
      {/* Button Section */}
      <div className="mt-auto">
        <Button
          onClick={() => router.push(`/e-registratura/${departmentId}`)}
          variant="outline"
          className="w-full bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:text-blue-800 font-medium transition-colors"
        >
          Vezi registre
        </Button>
      </div>

      {/* Edit Modal */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Editează departamentul</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEdit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="edit-nume">Nume departament</Label>
              <Input
                id="edit-nume"
                value={editNume}
                onChange={e => setEditNume(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-descriere">Descriere</Label>
              <Input
                id="edit-descriere"
                value={editDescriere}
                onChange={e => setEditDescriere(e.target.value)}
                required
                disabled={loading}
              />
            </div>
            {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setEditOpen(false)} disabled={loading}>
                Anulează
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Se salvează..." : "Salvează"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
      {/* Delete Confirm Modal */}
      <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Șterge departamentul</DialogTitle>
          </DialogHeader>
          <div className="mb-4">Ești sigur că vrei să ștergi departamentul <b>{titluDepartament}</b>? Această acțiune este ireversibilă.</div>
          {error && <div className="text-red-500 text-xs mb-2">{error}</div>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setDeleteOpen(false)} disabled={loading}>
              Anulează
            </Button>
            <Button type="button" variant="destructive" onClick={handleDelete} disabled={loading}>
              {loading ? "Se șterge..." : "Șterge"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

DepartmentCard.propTypes = {
  titluDepartament: PropTypes.string.isRequired,
  descriere: PropTypes.string.isRequired,
  nrRegistreActive: PropTypes.number.isRequired,
  nrUtilizatori: PropTypes.number.isRequired,
  departmentId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onVeziRegistre: PropTypes.func.isRequired,
  onEditare: PropTypes.func.isRequired,
  onStergere: PropTypes.func.isRequired,
};

export default DepartmentCard;