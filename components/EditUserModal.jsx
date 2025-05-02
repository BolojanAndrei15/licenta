import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Select } from "./ui/select";
import { Label } from "./ui/label";
import axios from "axios";
import { toast } from "sonner";

export default function EditUserModal({ user, roles, departments, onSuccess }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    nume: user.nume || "",
    email: user.email || "",
    departament_id: user.departament_id || user.departamente?.id || "",
    rol_id: user.rol_id || user.roluri?.id || "",
    password_hash: ""
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const payload = { ...form, id: user.id };
      if (!payload.password_hash) delete payload.password_hash;
      await axios.put("/api/utilizatori", payload);
      toast.success("Utilizator actualizat cu succes!");
      setOpen(false);
      onSuccess && onSuccess();
    } catch (err) {
      toast.error("Eroare la actualizare utilizator!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="icon" variant="ghost" title="Editează">
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editează utilizator</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Nume</Label>
            <Input name="nume" value={form.nume} onChange={handleChange} required />
          </div>
          <div>
            <Label>Email</Label>
            <Input name="email" value={form.email} onChange={handleChange} required type="email" />
          </div>
          <div>
            <Label>Rol</Label>
            <select name="rol_id" value={form.rol_id} onChange={handleChange} required className="w-full border rounded px-2 py-1">
              <option value="">Selectează rol</option>
              {roles?.map((r) => (
                <option key={r.id} value={r.id}>{r.nume}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Departament</Label>
            <select name="departament_id" value={form.departament_id} onChange={handleChange} required className="w-full border rounded px-2 py-1">
              <option value="">Selectează departament</option>
              {departments?.map((d) => (
                <option key={d.id} value={d.id}>{d.nume}</option>
              ))}
            </select>
          </div>
          <div>
            <Label>Parolă nouă (opțional)</Label>
            <Input name="password_hash" value={form.password_hash} onChange={handleChange} type="password" placeholder="Lasă gol pentru a păstra parola" />
          </div>
          <DialogFooter>
            <Button variant="outline" type="button" onClick={() => setOpen(false)} disabled={loading}>Anulează</Button>
            <Button type="submit" disabled={loading}>{loading ? "Se salvează..." : "Salvează"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
