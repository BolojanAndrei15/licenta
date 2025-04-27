import { useState } from "react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

export default function AddDepartmentModal({ open, onOpenChange, onDepartmentAdded }) {
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const validate = () => {
    // Minim 5 caractere, nu doar cifre sau spații
    const isValid = (val) => val && val.length >= 5 && /[a-zA-ZăâîșțĂÂÎȘȚ]/.test(val) && /[^\d\s]/.test(val);
    let numeError = null;
    let descriereError = null;
    if (!isValid(nume)) numeError = "Numele trebuie să aibă minim 5 caractere, să conțină litere și să nu fie doar cifre sau spații.";
    if (!isValid(descriere)) descriereError = "Descrierea trebuie să aibă minim 5 caractere, să conțină litere și să nu fie doar cifre sau spații.";
    return { numeError, descriereError };
  };

  const [numeError, setNumeError] = useState(null);
  const [descriereError, setDescriereError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const { numeError, descriereError } = validate();
    setNumeError(numeError);
    setDescriereError(descriereError);
    if (numeError || descriereError) return;
    setLoading(true);
    const toastId = toast.loading("Se creează departamentul...");
    try {
      const res = await fetch("/api/department", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nume, descriere })
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.message || "Eroare la adăugare departament");
      }
      setNume("");
      setDescriere("");
      onDepartmentAdded && onDepartmentAdded();
      onOpenChange(false);
      toast.success("Departamentul a fost adăugat cu succes.", { id: toastId, style: { background: '#22c55e', color: 'white' } });
    } catch (err) {
      setError(err.message || "Eroare necunoscută");
      toast.error(err.message || "Eroare la adăugare departament.", { id: toastId });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adaugă departament nou</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="text-sm text-muted-foreground mb-2">
            Completează numele și descrierea pentru noul departament.
          </div>
          <div className="space-y-1">
            <Label htmlFor="nume">Nume departament</Label>
            <Input
              id="nume"
              placeholder="Nume departament"
              value={nume}
              onChange={e => { setNume(e.target.value); setNumeError(null); }}
              required
              disabled={loading}
              className={numeError ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {numeError && <div className="text-red-500 text-xs mt-1">{numeError}</div>}
          </div>
          <div className="space-y-1">
            <Label htmlFor="descriere">Descriere</Label>
            <Input
              id="descriere"
              placeholder="Descriere departament"
              value={descriere}
              onChange={e => { setDescriere(e.target.value); setDescriereError(null); }}
              required
              disabled={loading}
              className={descriereError ? 'border-red-500 focus-visible:ring-red-500' : ''}
            />
            {descriereError && <div className="text-red-500 text-xs mt-1">{descriereError}</div>}
          </div>
          {error && <div className="text-red-500 text-sm">{error}</div>}
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
