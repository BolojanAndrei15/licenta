import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AddRegistruModal({ open, onOpenChange, departmentId, onRegistruAdded }) {
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [an, setAn] = useState(new Date().getFullYear());
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(999999);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (nume.length < 3) {
      setError("Numele trebuie să aibă minim 3 caractere.");
      return;
    }
    if (descriere.length < 3) {
      setError("Descrierea trebuie să aibă minim 3 caractere.");
      return;
    }
    if (!an || isNaN(an) || an < 1900 || an > 2100) {
      setError("Anul trebuie să fie valid.");
      return;
    }
    if (!minVal || !maxVal || minVal < 0 || maxVal < minVal) {
      setError("Valorile minime și maxime trebuie să fie valide.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/registre", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          nume,
          descriere,
          departament_id: departmentId,
          an: Number(an),
          min_val: Number(minVal),
          max_val: Number(maxVal),
        }),
      });
      if (!res.ok) throw new Error("Eroare la adăugare registru");
      setNume("");
      setDescriere("");
      setAn(new Date().getFullYear());
      setMinVal(1);
      setMaxVal(999999);
      onRegistruAdded && onRegistruAdded();
      onOpenChange(false);
      toast.success("Registrul a fost adăugat cu succes.");
    } catch (err) {
      setError(err.message || "Eroare necunoscută");
      toast.error(err.message || "Eroare la adăugare registru.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adaugă registru nou</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="nume">Nume registru</Label>
            <Input
              id="nume"
              value={nume}
              onChange={e => setNume(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="descriere">Descriere</Label>
            <Input
              id="descriere"
              value={descriere}
              onChange={e => setDescriere(e.target.value)}
              required
              disabled={loading}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="an">An</Label>
            <Input
              id="an"
              type="number"
              value={an}
              onChange={e => setAn(e.target.value)}
              required
              min={1900}
              max={2100}
              disabled={loading}
            />
          </div>
          <div className="flex gap-4 justify-between">
            <div className="space-y-1 flex-1">
              <Label htmlFor="minVal">Valoare minimă</Label>
              <Input
                id="minVal"
                type="number"
                value={minVal}
                onChange={e => setMinVal(e.target.value)}
                required
                min={0}
                disabled={loading}
              />
            </div>
            <div className="space-y-1 flex-1">
              <Label htmlFor="maxVal">Valoare maximă</Label>
              <Input
                id="maxVal"
                type="number"
                value={maxVal}
                onChange={e => setMaxVal(e.target.value)}
                required
                min={minVal}
                disabled={loading}
              />
            </div>
          </div>
          {error && <div className="text-red-500 text-xs mt-1">{error}</div>}
          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} disabled={loading}>
              Anulează
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Se adaugă..." : "Adaugă"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
