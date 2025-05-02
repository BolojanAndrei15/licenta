import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import axios from "axios";

export default function EditRolModal({ rol, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [nume, setNume] = useState(rol.nume);
  const [descriere, setDescriere] = useState(rol.descriere || "");
  const [culoare, setCuloare] = useState(rol.culoare || "#6366f1");
  const [loading, setLoading] = useState(false);

  const handleSave = async () => {
    setLoading(true);
    try {
      await axios.put("/api/rol_utilizator", {
        id: rol.id,
        nume,
        descriere,
        culoare,
      });
      toast.success("Rol actualizat cu succes!");
      setOpen(false);
      onSuccess && onSuccess();
    } catch (err) {
      toast.error("Eroare la actualizare rol!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" title="Editează rolul">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editează Rol</DialogTitle>
        </DialogHeader>
        <div className="space-y-3">
          <div>
            <label className="block text-xs font-semibold mb-1">Nume rol</label>
            <Input value={nume} onChange={e => setNume(e.target.value)} required />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Descriere</label>
            <Input value={descriere} onChange={e => setDescriere(e.target.value)} />
          </div>
          <div>
            <label className="block text-xs font-semibold mb-1">Culoare</label>
            <Input type="color" value={culoare} onChange={e => setCuloare(e.target.value)} className="w-12 h-8 p-0 border-none" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)} disabled={loading}>Anulează</Button>
          <Button onClick={handleSave} disabled={loading}>{loading ? "Se salvează..." : "Salvează"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function DeleteRolModal({ rol, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios.delete("/api/rol_utilizator", { data: { id: rol.id } });
      toast.success("Rol șters cu succes!");
      setOpen(false);
      onSuccess && onSuccess();
    } catch (err) {
      toast.error("Eroare la ștergere rol!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" title="Șterge rolul">
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
  );
}
