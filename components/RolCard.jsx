import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import axios from "axios";

export default function RolCard({ rol, onDelete }) {
  const [open, setOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [editLoading, setEditLoading] = useState(false);
  const [editForm, setEditForm] = useState({ nume: rol.nume, descriere: rol.descriere || "" });
  const [editError, setEditError] = useState("");

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/rol_utilizator", { data: { id: rol.id } });
      toast.success("Rol șters cu succes!");
      setOpen(false);
      if (onDelete) onDelete();
    } catch (err) {
      toast.error("Eroare la ștergere rol!");
    } finally {
      setLoading(false);
    }
  };

  const handleEditChange = e => setEditForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    setEditError("");
    if (!editForm.nume) {
      setEditError("Completează numele rolului!");
      toast.error("Completează numele rolului!");
      return;
    }
    setEditLoading(true);
    try {
      await axios.put("/api/rol_utilizator", {
        id: rol.id,
        nume: editForm.nume,
        descriere: editForm.descriere,
      });
      setEditOpen(false);
      toast.success("Rol actualizat cu succes!");
      if (onDelete) onDelete(); // Folosim onDelete pentru a reactualiza lista
    } catch (err) {
      setEditError("Eroare la editare rol!");
      toast.error(err?.response?.data?.error || "Eroare la editare rol!");
    } finally {
      setEditLoading(false);
    }
  };

  return (
    <div className="bg-white border rounded-lg shadow-sm p-4 min-w-[220px] max-w-xs flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-semibold text-base text-blue-700">{rol.nume}</span>
          <div className="flex gap-1">
            <Dialog open={editOpen} onOpenChange={setEditOpen}>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" title="Editează rol">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Editează Rol</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleEditSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="edit-nume">Nume rol</Label>
                    <Input id="edit-nume" name="nume" value={editForm.nume} onChange={handleEditChange} required />
                  </div>
                  <div>
                    <Label htmlFor="edit-descriere">Descriere</Label>
                    <Input id="edit-descriere" name="descriere" value={editForm.descriere} onChange={handleEditChange} />
                  </div>
                  {editError && <div className="text-red-500 text-sm">{editError}</div>}
                  <DialogFooter>
                    <Button type="submit" disabled={editLoading}>{editLoading ? "Se salvează..." : "Salvează"}</Button>
                  </DialogFooter>
                </form>
              </DialogContent>
            </Dialog>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size="icon" variant="ghost" title="Șterge rol">
                  <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirmă ștergerea</DialogTitle>
                </DialogHeader>
                <div className="mb-4">Ești sigur că vrei să ștergi rolul <b>{rol.nume}</b>?</div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setOpen(false)} disabled={loading}>Anulează</Button>
                  <Button variant="destructive" onClick={handleDelete} disabled={loading}>{loading ? "Se șterge..." : "Șterge"}</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </div>
        <div className="text-sm text-gray-600 mb-2 min-h-[32px]">{rol.descriere || <span className="italic text-gray-400">Fără descriere</span>}</div>
        {/* Permisiuni - exemplu static, poți extinde după nevoie */}
        <div className="flex flex-wrap gap-1 mt-2">
          {/* Exemplu: <span className="bg-blue-100 text-blue-700 px-2 py-0.5 rounded text-xs">Vizualizare</span> */}
        </div>
      </div>
    </div>
  );
}
