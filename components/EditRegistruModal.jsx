import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

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
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Editează registrul</DialogTitle>
        </DialogHeader>
        {registru && (
          <form onSubmit={onSubmit} className="space-y-4">
            <div className="space-y-1">
              <Label htmlFor="edit-nume">Nume registru</Label>
              <Input
                id="edit-nume"
                value={registru.nume}
                onChange={e => setRegistru(m => ({ ...m, nume: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-descriere">Descriere</Label>
              <Input
                id="edit-descriere"
                value={registru.descriere}
                onChange={e => setRegistru(m => ({ ...m, descriere: e.target.value }))}
                required
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-an">An</Label>
              <Input
                id="edit-an"
                type="number"
                value={registru.an}
                onChange={e => setRegistru(m => ({ ...m, an: Number(e.target.value) }))}
                required
                min={1992}
                max={currentYear}
                disabled={loading}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="edit-tip-registru">Tip registru</Label>
              <select
                id="edit-tip-registru"
                value={registru.tip_registru_id || ''}
                onChange={e => setRegistru(m => ({ ...m, tip_registru_id: e.target.value }))}
                required
                disabled={loading || tipuriRegistru.length === 0}
                className="w-full border rounded px-2 py-2"
              >
                <option value="" disabled hidden>Selectează tipul</option>
                {tipuriRegistru.map(tip => (
                  <option key={tip.id} value={tip.id}>{tip.nume}</option>
                ))}
              </select>
              {error && !registru.tip_registru_id && (
                <div className="text-red-500 text-xs mt-1">Selectează tipul registrului.</div>
              )}
            </div>
            <div className="flex gap-4 justify-between">
              <div className="space-y-1 flex-1">
                <Label htmlFor="edit-minVal">Valoare minimă</Label>
                <Input
                  id="edit-minVal"
                  type="number"
                  value={registru.min_val}
                  onChange={e => setRegistru(m => ({ ...m, min_val: e.target.value }))}
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
                  value={registru.max_val}
                  onChange={e => setRegistru(m => ({ ...m, max_val: e.target.value }))}
                  required
                  min={registru.min_val}
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
                {loading ? "Se salvează..." : "Salvează"}
              </Button>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}
