import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from "@/components/ui/select";

export default function EditRegistruModal({
  open,
  onOpenChange,
  registru,
  setRegistru,
  onSubmit,
  loading,
  error,
  tipuriRegistru = []
}) {
  const currentYear = new Date().getFullYear();

  // Acest efect se asigură că avem un tip_registru_id valid când se deschide modalul
  // Adăugăm verificarea pentru registru?.tip_registru_id pentru a evita o buclă infinită
  useEffect(() => {
    if (open && registru && !registru.tip_registru_id && tipuriRegistru.length > 0) {
      // Verificăm dacă registrul are un tip_registru, și folosim id-ul acestuia dacă există
      if (registru.tip_registru && registru.tip_registru.id) {
        setRegistru((prev) => ({
          ...prev,
          tip_registru_id: registru.tip_registru.id
        }));
      } else {
        // Altfel folosim primul tip de registru din lista disponibilă
        setRegistru((prev) => ({
          ...prev,
          tip_registru_id: tipuriRegistru[0].id
        }));
      }
    }
  }, [open, registru, tipuriRegistru.length]); // Eliminăm dependența setRegistru care poate crea bucle

  // Această funcție gestionează schimbarea valorii pentru tip_registru_id
  const handleTipRegistruChange = (value) => {
    setRegistru((prev) => ({
      ...prev,
      tip_registru_id: value
    }));
  };

  if (!registru) {
    return null;
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editează registrul</DialogTitle>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-4">
          <div className="space-y-1">
            <Label htmlFor="edit-nume">Nume registru</Label>
            <Input
              id="edit-nume"
              value={registru.nume || ""}
              onChange={(e) =>
                setRegistru((prev) => ({ ...prev, nume: e.target.value }))
              }
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="edit-descriere">Descriere</Label>
            <Input
              id="edit-descriere"
              value={registru.descriere || ""}
              onChange={(e) =>
                setRegistru((prev) => ({ ...prev, descriere: e.target.value }))
              }
              required
              disabled={loading}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="edit-an">An</Label>
            <Input
              id="edit-an"
              type="number"
              value={registru.an || ""}
              onChange={(e) =>
                setRegistru((prev) => ({ ...prev, an: Number(e.target.value) }))
              }
              required
              min={1992}
              max={currentYear}
              disabled={loading}
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="edit-tip-registru">Tip registru</Label>
            <Select
              value={registru.tip_registru_id || ""}
              onValueChange={handleTipRegistruChange}
              disabled={loading || tipuriRegistru.length === 0}
            >
              <SelectTrigger id="edit-tip-registru" className="w-full">
                <SelectValue placeholder="Selectează tipul" />
              </SelectTrigger>
              <SelectContent>
                {tipuriRegistru.map((tip) => (
                  <SelectItem key={tip.id} value={tip.id}>
                    {tip.nume}
                  </SelectItem>
                ))}
                {tipuriRegistru.length === 0 && (
                  <SelectItem value="" disabled>
                    Nu există tipuri de registru disponibile
                  </SelectItem>
                )}
              </SelectContent>
            </Select>
            {tipuriRegistru.length === 0 && (
              <div className="text-amber-500 text-xs mt-1">
                Nu s-au putut încărca tipurile de registru.
              </div>
            )}
            {error && !registru.tip_registru_id && (
              <div className="text-red-500 text-xs mt-1">
                Selectează tipul registrului.
              </div>
            )}
          </div>

          <div className="flex gap-4 justify-between">
            <div className="space-y-1 flex-1">
              <Label htmlFor="edit-minVal">Valoare minimă</Label>
              <Input
                id="edit-minVal"
                type="number"
                value={registru.min_val || 0}
                onChange={(e) =>
                  setRegistru((prev) => ({ ...prev, min_val: Number(e.target.value) }))
                }
                required
                min={0}
                disabled={loading}
              />
            </div>

            <div className="space-y-1 flex-1">
              <Label htmlFor="edit-maxVal">Valoare maximă</Label>
              <Input
                id="edit-maxVal"
                type="number"
                value={registru.max_val || 0}
                onChange={(e) =>
                  setRegistru((prev) => ({ ...prev, max_val: Number(e.target.value) }))
                }
                required
                min={registru.min_val || 0}
                disabled={loading}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-xs mt-1">{error}</div>}

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Anulează
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Se salvează..." : "Salvează"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}