import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export default function AddRegistruModal({ open, onOpenChange, departmentId, onRegistruAdded, ani = [] }) {
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [an, setAn] = useState(new Date().getFullYear());
  const [minVal, setMinVal] = useState(1);
  const [maxVal, setMaxVal] = useState(999999);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aniDisponibili, setAniDisponibili] = useState([]);
  const [tipuriRegistru, setTipuriRegistru] = useState([]);
  const [tipRegistruId, setTipRegistruId] = useState("");

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let aniUnici = ani && Array.isArray(ani) ? ani.filter(a => a !== currentYear) : [];
    const newAniDisponibili = [currentYear, ...aniUnici];
    // Setează doar dacă s-a schimbat efectiv
    if (JSON.stringify(newAniDisponibili) !== JSON.stringify(aniDisponibili)) {
      setAniDisponibili(newAniDisponibili);
    }

    // Fetch tipuri registru
    fetch("/api/tipuri_registru")
      .then(res => res.json())
      .then(data => {
        setTipuriRegistru(data);
        if (data.length > 0 && !tipRegistruId) setTipRegistruId(data[0].id);
      });
  }, [ani]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (nume.length < 10) {
      setError("Numele trebuie să aibă minim 10 caractere.");
      return;
    }
    if (descriere.length < 10) {
      setError("Descrierea trebuie să aibă minim 10 caractere.");
      return;
    }
    if (!an || isNaN(an) || an < 1992 || an > currentYear) {
      setError(`Anul trebuie să fie între 1992 și ${currentYear}.`);
      return;
    }
    if (!minVal || !maxVal || minVal < 0 || maxVal < minVal) {
      setError("Valorile minime și maxime trebuie să fie valide.");
      return;
    }
    if (!tipRegistruId) {
      setError("Selectează tipul registrului.");
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
          tip_registru_id: tipRegistruId,
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
      toast.success("Registrul a fost adăugat cu succes.", {
        style: { background: '#22c55e', color: 'white' }
      });
    } catch (err) {
      setError(err.message || "Eroare necunoscută");
      toast.error(err.message || "Eroare la adăugare registru.");
    } finally {
      setLoading(false);
    }
  };

  // Limitează anii doar până la anul curent
  const currentYear = new Date().getFullYear();
  const minYear = 2000;
  const aniDisponibiliFiltered = ani.filter(a => a <= currentYear && a >= minYear);

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
              className={error && nume.length < 10 ? "border-red-500" : ""}
            />
            {error && nume.length < 10 && (
              <div className="text-red-500 text-xs mt-1">Numele trebuie să aibă minim 10 caractere.</div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="descriere">Descriere</Label>
            <Input
              id="descriere"
              value={descriere}
              onChange={e => setDescriere(e.target.value)}
              required
              disabled={loading}
              className={error && descriere.length < 10 ? "border-red-500" : ""}
            />
            {error && descriere.length < 10 && (
              <div className="text-red-500 text-xs mt-1">Descrierea trebuie să aibă minim 10 caractere.</div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="an">An</Label>
            <Input
              id="an"
              type="number"
              value={an}
              onChange={e => setAn(Number(e.target.value))}
              required
              min={1992}
              max={currentYear}
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
                onChange={e => setMinVal(Number(e.target.value))}
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
                onChange={e => setMaxVal(Number(e.target.value))}
                required
                min={minVal}
                disabled={loading}
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="tip-registru">Tip registru</Label>
            <select
              id="tip-registru"
              value={tipRegistruId}
              onChange={e => setTipRegistruId(e.target.value)}
              required
              disabled={loading || tipuriRegistru.length === 0}
              className="w-full border rounded px-2 py-2"
            >
              {tipuriRegistru.map(tip => (
                <option key={tip.id} value={tip.id}>{tip.nume}</option>
              ))}
            </select>
            {error && !tipRegistruId && (
              <div className="text-red-500 text-xs mt-1">Selectează tipul registrului.</div>
            )}
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
