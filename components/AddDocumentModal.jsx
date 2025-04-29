"use client";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "./ui/dialog";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
  
} from "./ui/select";
import { Label } from "./ui/label";

export default function AddDocumentModal({ open, onClose, registruID, onSuccess }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    numar_inregistrare: "",
    numar_document: "",
    data_document: "",
    sursa: "",
    rezumat: "",
    departament_adresat: "",
    destinatar_id: "",
    tip_document_id: "",
    data_expedierii: "",
    stadiu: "În așteptare",
  });
  const [error, setError] = useState("");

  // Fetch destinatari (utilizatori) și tipuri document
  const { data: destinatari } = useQuery({
    queryKey: ["utilizatori"],
    queryFn: async () => (await axios.get("/api/utilizatori")).data.utilizatori,
  });
  const { data: tipuri } = useQuery({
    queryKey: ["tipuri_documente"],
    queryFn: async () => (await axios.get("/api/tip_document")).data,
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Normalize UUID fields: if empty string, send null
      const payload = {
        ...form,
        numar_inregistrare: Number(form.numar_inregistrare),
        registru_id: registruID,
        inregistrat_de: session?.user?.id,
      };
      if (!payload.departament_adresat) payload.departament_adresat = null;
      if (!payload.destinatar_id) payload.destinatar_id = null;
      if (!payload.preluat_de) payload.preluat_de = null;
      await axios.post("/api/document", payload);
      setForm({
        numar_inregistrare: "",
        numar_document: "",
        data_document: "",
        sursa: "",
        rezumat: "",
        departament_adresat: "",
        destinatar_id: "",
        tip_document_id: "",
        data_expedierii: "",
        stadiu: "În așteptare",
      });
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Eroare la adăugare");
    } finally {
      setLoading(false);
    }
  };

  // departament adresat: autocomplete cu departamentul registrului (read-only)
  const { data: registruDetails } = useQuery({
    queryKey: ["registru", registruID],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?id=${registruID}`);
      return res.data.registru;
    },
    enabled: !!registruID,
  });

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogTitle className="mb-2">Adaugă Înregistrare Nouă</DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numar_inregistrare">Număr Înregistrare</Label>
              <Input id="numar_inregistrare" name="numar_inregistrare" value={form.numar_inregistrare} onChange={handleChange} placeholder="123" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departament_adresat">Departament Adresat</Label>
              <Input id="departament_adresat" name="departament_adresat" value={registruDetails?.departamente?.nume || ""} readOnly disabled className="bg-gray-100 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numar_document">Număr Document</Label>
              <Input id="numar_document" name="numar_document" value={form.numar_document} onChange={handleChange} placeholder="DOC-001" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="destinatar_id">Destinatar</Label>
              <Select
                value={form.destinatar_id}
                onValueChange={val => setForm(f => ({ ...f, destinatar_id: val }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectează destinatar" />
                </SelectTrigger>
                <SelectContent>
                  {destinatari?.map((u) => (
                    <SelectItem key={u.id} value={u.id}>{u.nume}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="data_document">Data Document</Label>
              <Input id="data_document" name="data_document" value={form.data_document} onChange={handleChange} type="date" placeholder="mm/dd/yyyy" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="data_expedierii">Data Expedierii</Label>
              <Input id="data_expedierii" name="data_expedierii" value={form.data_expedierii} onChange={handleChange} type="date" placeholder="mm/dd/yyyy" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="sursa">Sursă</Label>
              <Select
                value={form.sursa}
                onValueChange={val => setForm(f => ({ ...f, sursa: val }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Extern" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Extern">Extern</SelectItem>
                  <SelectItem value="Intern">Intern</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="stadiu">Stadiu</Label>
              <Select
                value={form.stadiu}
                onValueChange={val => setForm(f => ({ ...f, stadiu: val }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="În lucru" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="În lucru">În lucru</SelectItem>
                  <SelectItem value="Finalizat">Finalizat</SelectItem>
                  <SelectItem value="În așteptare">În așteptare</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-1 md:col-span-2">
              <Label htmlFor="tip_document_id">Tip Document</Label>
              <Select
                value={form.tip_document_id}
                onValueChange={val => setForm(f => ({ ...f, tip_document_id: val }))}
                required
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Selectează tip document" />
                </SelectTrigger>
                <SelectContent>
                  {tipuri?.map((t) => (
                    <SelectItem key={t.id} value={t.id}>{t.nume}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2 col-span-1 md:col-span-2">
              <Label htmlFor="rezumat">Rezumat</Label>
              <Textarea id="rezumat" name="rezumat" value={form.rezumat} onChange={handleChange} placeholder="Descriere pe scurt a documentului..." required rows={3} />
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="flex justify-between items-center mt-6">
            <Button type="button" variant="secondary" onClick={onClose} disabled={loading}>
              Anulează
            </Button>
            <Button type="submit" variant="default" disabled={loading}>
              {loading && <Loader2 className="animate-spin mr-2" />}
              Salvează Înregistrarea
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
