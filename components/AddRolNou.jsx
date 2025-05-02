import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { toast } from "sonner";

export default function AddRolNou({ onSuccess }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ nume: "", descriere: "", culoare: "#6366f1" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.nume) {
      setError("Completează numele rolului!");
      toast.error("Completează numele rolului!");
      return;
    }
    setLoading(true);
    try {
      await axios.post("/api/rol_utilizator", {
        nume: form.nume,
        descriere: form.descriere,
        culoare: form.culoare,
      });
      setOpen(false);
      setForm({ nume: "", descriere: "", culoare: "#6366f1" });
      toast.success("Rol adăugat cu succes!");
      if (onSuccess) onSuccess();
    } catch (err) {
      setError("Eroare la creare rol!");
      toast.error(err?.response?.data?.error || "Eroare la creare rol!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>+ Adaugă Rol Nou</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adaugă Rol Nou</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="nume">Nume rol</Label>
            <Input id="nume" name="nume" value={form.nume} onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="descriere">Descriere</Label>
            <Input id="descriere" name="descriere" value={form.descriere} onChange={handleChange} />
          </div>
          <div>
            <Label htmlFor="culoare">Culoare</Label>
            <Input id="culoare" name="culoare" type="color" value={form.culoare} onChange={handleChange} className="w-12 h-8 p-0 border-none" />
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
