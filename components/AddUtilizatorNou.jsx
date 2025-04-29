"use client";
import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useQueryClient } from '@tanstack/react-query';
import axios from "axios";
import { toast } from "sonner";

function AddUtilizatorNou({ children }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nume: "", email: "", password: "", rol_id: "", departament_id: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [roles, setRoles] = useState([]);
  const [departments, setDepartments] = useState([]);
  const queryClient = useQueryClient();

  React.useEffect(() => {
    if (open) {
      axios.get("/api/rol_utilizator").then(res => setRoles(res.data)).catch(() => setRoles([]));
      axios.get("/api/department").then(res => setDepartments(Array.isArray(res.data) ? res.data : res.data.departments || [])).catch(() => setDepartments([]));
    }
  }, [open]);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.nume || !form.email || !form.password || !form.rol_id || !form.departament_id) {
      setError("Completează toate câmpurile!");
      toast.error("Completează toate câmpurile!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/utilizatori", {
        nume: form.nume,
        email: form.email,
        password_hash: form.password,
        rol_id: form.rol_id,
        departament_id: form.departament_id,
      });
      setOpen(false);
      setForm({ nume: "", email: "", password: "", rol_id: "", departament_id: "" });
      queryClient.invalidateQueries(['utilizatori']);
      toast.success("Utilizator adăugat cu succes!");
    } catch (err) {
      setError("Eroare la creare utilizator!");
      toast.error(err?.response?.data?.error || "Eroare la creare utilizator!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children ? children : <Button>+ Adaugă Utilizator</Button>}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adaugă Utilizator Nou</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nume">Nume</Label>
            <Input id="nume" name="nume" value={form.nume} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={form.email} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="password">Parolă</Label>
            <Input id="password" name="password" type="password" value={form.password} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="rol_id">Rol</Label>
            <select id="rol_id" name="rol_id" className="w-full border rounded px-2 py-1" value={form.rol_id} onChange={handleChange} required>
              <option value="">Selectează rol</option>
              {roles.map(r => <option key={r.id} value={r.id}>{r.nume}</option>)}
            </select>
          </div>
          <div>
            <Label htmlFor="departament_id">Departament</Label>
            <select id="departament_id" name="departament_id" className="w-full border rounded px-2 py-1" value={form.departament_id} onChange={handleChange} required>
              <option value="">Selectează departament</option>
              {departments.map(d => <option key={d.id} value={d.id}>{d.nume}</option>)}
            </select>
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <DialogFooter>
            <Button type="submit" disabled={loading}>{loading ? "Se salvează..." : "Salvează"}</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddUtilizatorNou;
