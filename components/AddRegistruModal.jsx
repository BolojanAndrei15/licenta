import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useQueryClient } from "@tanstack/react-query";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";

export default function AddRegistruModal({
  open,
  onOpenChange,
  departmentId,
  onRegistruAdded,
  ani = [],
}) {
  const [nume, setNume] = useState("");
  const [descriere, setDescriere] = useState("");
  const [an, setAn] = useState(new Date().getFullYear());
  const [minVal, setMinVal] = useState("");
  const [maxVal, setMaxVal] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [aniDisponibili, setAniDisponibili] = useState([]);
  const [tipuriRegistru, setTipuriRegistru] = useState([]);
  const [tipRegistruId, setTipRegistruId] = useState("");
  const queryClient = useQueryClient();
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    let aniUnici = ani && Array.isArray(ani) ? ani.filter((a) => a !== currentYear) : [];
    const newAniDisponibili = [currentYear, ...aniUnici];
    if (JSON.stringify(newAniDisponibili) !== JSON.stringify(aniDisponibili)) {
      setAniDisponibili(newAniDisponibili);
    }
  }, [ani]);

  useEffect(() => {
    fetch("/api/tipuri_registru")
      .then((res) => res.json())
      .then((data) => {
        setTipuriRegistru(data);
        if (data.length > 0 && !tipRegistruId) setTipRegistruId(data[0].id);
      });
  }, []);

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
    if (minVal !== "" && (isNaN(minVal) || minVal < 0)) {
      setError("Valoarea minimă trebuie să fie un număr pozitiv sau lăsați gol.");
      return;
    }
    if (maxVal !== "" && (isNaN(maxVal) || (minVal !== "" && Number(maxVal) < Number(minVal)))) {
      setError("Valoarea maximă trebuie să fie mai mare decât minimul sau lăsați gol.");
      return;
    }
    if (!tipRegistruId) {
      setError("Selectează tipul registrului.");
      return;
    }

    setLoading(true);
    try {
      const body = {
        nume,
        descriere,
        departament_id: departmentId,
        an: Number(an),
        tip_registru_id: tipRegistruId,
      };
      if (minVal !== "") body.min_val = Number(minVal);
      if (maxVal !== "") body.max_val = Number(maxVal);
      await axios.post("/api/registre", body);
      // Reset form
      setNume("");
      setDescriere("");
      setAn(new Date().getFullYear());
      setMinVal("");
      setMaxVal("");

      onRegistruAdded &&
        onRegistruAdded({
          nume,
          descriere,
          departament_id: departmentId,
          an: Number(an),
          min_val: Number(minVal),
          max_val: Number(maxVal),
          tip_registru_id: tipRegistruId,
        });

      queryClient.invalidateQueries(["registre", departmentId]);
      onOpenChange(false);

      toast.success("Registrul a fost adăugat cu succes.", {
        style: { background: "#22c55e", color: "white" },
      });
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
              onChange={(e) => setNume(e.target.value)}
              required
              disabled={loading}
              className={error && nume.length < 10 ? "border-red-500" : ""}
            />
            {error && nume.length < 10 && (
              <div className="text-red-500 text-xs mt-1">
                Numele trebuie să aibă minim 10 caractere.
              </div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="descriere">Descriere</Label>
            <Input
              id="descriere"
              value={descriere}
              onChange={(e) => setDescriere(e.target.value)}
              required
              disabled={loading}
              className={error && descriere.length < 10 ? "border-red-500" : ""}
            />
            {error && descriere.length < 10 && (
              <div className="text-red-500 text-xs mt-1">
                Descrierea trebuie să aibă minim 10 caractere.
              </div>
            )}
          </div>
          <div className="space-y-1">
            <Label htmlFor="an">An</Label>
            <Input
              id="an"
              type="number"
              value={an}
              onChange={(e) => setAn(Number(e.target.value))}
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
                onChange={(e) => setMinVal(e.target.value)}
                min={0}
                disabled={loading}
                placeholder="(opțional)"
              />
            </div>
            <div className="space-y-1 flex-1">
              <Label htmlFor="maxVal">Valoare maximă</Label>
              <Input
                id="maxVal"
                type="number"
                value={maxVal}
                onChange={(e) => setMaxVal(e.target.value)}
                min={minVal !== "" ? minVal : 0}
                disabled={loading}
                placeholder="(opțional)"
              />
            </div>
          </div>
          <div className="space-y-1">
            <Label htmlFor="tip-registru">Tip registru</Label>
            <Select
              value={tipRegistruId}
              onValueChange={setTipRegistruId}
              disabled={loading || tipuriRegistru.length === 0}
            >
              <SelectTrigger className="w-full" id="tip-registru">
                <SelectValue placeholder="Selectează tipul registrului" />
              </SelectTrigger>
              <SelectContent>
                {tipuriRegistru.map((tip) => (
                  <SelectItem key={tip.id} value={tip.id}>
                    {tip.nume}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {error && !tipRegistruId && (
              <div className="text-red-500 text-xs mt-1">
                Selectează tipul registrului.
              </div>
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
