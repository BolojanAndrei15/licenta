"use client";
import { useState, useRef } from "react";
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
import { useEffect } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "./ui/command";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import ro from "date-fns/locale/ro";

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
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();
  const [dragActive, setDragActive] = useState(false);

  // Fetch destinatari (utilizatori) doar din departamentul registrului
  const { data: registruDetails } = useQuery({
    queryKey: ["registru", registruID],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?id=${registruID}`);
      return res.data.registru;
    },
    enabled: !!registruID,
  });

  const departamentId = registruDetails?.departamente?.id;

  const { data: destinatari } = useQuery({
    queryKey: ["utilizatori", departamentId],
    queryFn: async () => {
      if (!departamentId) return [];
      const res = await axios.get(`/api/utilizatori?departament_id=${departamentId}`);
      return res.data.utilizatori;
    },
    enabled: !!departamentId,
  });

  // Pentru autocomplete destinatar
  const [destinatarOpen, setDestinatarOpen] = useState(false);
  const destinatarNume = destinatari?.find(u => u.id === form.destinatar_id)?.nume || "";

  // Fetch next registration number
  const { data: nextNumberData, isLoading: loadingNextNumber } = useQuery({
    queryKey: ["nextNumber", registruID],
    queryFn: async () => (await axios.get(`/api/next-number?registru_id=${registruID}`)).data,
    enabled: !!registruID,
  });

  // Fetch tipuri documente pentru dropdown
  const { data: tipuri } = useQuery({
    queryKey: ["tipuri_documente"],
    queryFn: async () => (await axios.get("/api/tip_document")).data,
  });

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const f = e.target.files[0];
    if (f && ["application/pdf", "image/png", "image/jpeg", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "text/csv"].includes(f.type)) {
      setFile(f);
    } else {
      setFile(null);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange({ target: { files: e.dataTransfer.files } });
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      // Nu trimite numar_inregistrare la backend!
      const { numar_inregistrare, ...rest } = form;
      const payload = {
        ...rest,
        registru_id: registruID,
        inregistrat_de: session?.user?.id,
      };
      if (!payload.departament_adresat) payload.departament_adresat = null;
      if (!payload.destinatar_id) payload.destinatar_id = null;
      if (!payload.preluat_de) payload.preluat_de = null;
      // 1. Creează documentul în baza de date
      const docRes = await axios.post("/api/document", payload);
      const documentId = docRes.data?.document?.id;
      // 2. Trimite fișierul la upload-document dacă există și avem id-ul documentului
      if (file && registruDetails?.departamente?.nume && registruDetails?.nume && documentId) {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("department", registruDetails.departamente.nume);
        formData.append("register", registruDetails.nume);
        formData.append("documentName", `${form.numar_document}__@__${documentId}`);
        await axios.post("/api/upload-document", formData);
      }
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
      setFile(null);
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Eroare la adăugare");
    } finally {
      setLoading(false);
    }
  };

  // Reset form la valorile implicite
  const resetForm = () => {
    setForm({
      numar_inregistrare: "",
      numar_document: "",
      data_document: new Date().toISOString(),
      sursa: "",
      rezumat: "",
      departament_adresat: "",
      destinatar_id: "",
      tip_document_id: "",
      data_expedierii: new Date().toISOString(),
      stadiu: "În așteptare",
    });
  };

  // La închidere modal (x sau onClose), resetează formularul
  const handleClose = () => {
    resetForm();
    onClose();
  };

  // Pentru date, folosim shadcn Calendar + Popover
  const [calendarOpenDoc, setCalendarOpenDoc] = useState(false);
  const [calendarOpenExp, setCalendarOpenExp] = useState(false);

  // Setează data implicită la azi pentru data_document și data_expedierii
  useEffect(() => {
    if (open) {
      setForm(f => ({
        ...f,
        data_document: new Date().toISOString(),
        data_expedierii: new Date().toISOString(),
      }));
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl">
        <DialogTitle className="mb-2">Adaugă Înregistrare Nouă</DialogTitle>
        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numar_inregistrare">Număr Înregistrare</Label>
              <Input id="numar_inregistrare" name="numar_inregistrare" value={loadingNextNumber ? '' : nextNumberData?.nextNumber ?? ''} readOnly disabled className="bg-gray-100 cursor-not-allowed" />
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
              <Popover open={destinatarOpen} onOpenChange={setDestinatarOpen}>
                <PopoverTrigger asChild>
                  <Input
                    readOnly
                    value={destinatarNume}
                    placeholder="Selectează sau caută destinatar (opțional)"
                    onClick={() => setDestinatarOpen(true)}
                  />
                </PopoverTrigger>
                <PopoverContent className="p-0 w-[300px]">
                  <Command>
                    <CommandInput placeholder="Caută utilizator..." />
                    <CommandList>
                      <CommandEmpty>Nu există utilizatori</CommandEmpty>
                      {destinatari?.map((u) => (
                        <CommandItem
                          key={u.id}
                          value={u.nume}
                          onSelect={() => {
                            setForm(f => ({ ...f, destinatar_id: u.id }));
                            setDestinatarOpen(false);
                          }}
                        >
                          {u.nume}
                        </CommandItem>
                      ))}
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="data_document">Data Document</Label>
              <Popover open={calendarOpenDoc} onOpenChange={setCalendarOpenDoc}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={"w-full justify-start text-left font-normal " + (!form.data_document ? "text-muted-foreground" : "")}
                  >
                    {form.data_document
                      ? format(new Date(form.data_document), "dd.MM.yyyy", { locale: ro })
                      : "Alege data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={form.data_document ? new Date(form.data_document) : undefined}
                    onSelect={date => setForm(f => ({ ...f, data_document: date ? date.toISOString() : "" }))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="data_expedierii">Data Expedierii</Label>
              <Popover open={calendarOpenExp} onOpenChange={setCalendarOpenExp}>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className={"w-full justify-start text-left font-normal " + (!form.data_expedierii ? "text-muted-foreground" : "")}
                  >
                    {form.data_expedierii
                      ? format(new Date(form.data_expedierii), "dd.MM.yyyy", { locale: ro })
                      : "Alege data"}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={form.data_expedierii ? new Date(form.data_expedierii) : undefined}
                    onSelect={date => setForm(f => ({ ...f, data_expedierii: date ? date.toISOString() : "" }))}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sursa">Sursă</Label>
              <Input
                id="sursa"
                name="sursa"
                value={form.sursa}
                onChange={handleChange}
                placeholder="Expeditor / Sursă"
                required
              />
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
            <div className="space-y-2 col-span-1 md:col-span-2">
              <Label>Fișier atașat (opțional, PDF, PNG, JPEG, XLSX, CSV)</Label>
              <div
                className={`border-2 border-dashed rounded-md p-4 text-center cursor-pointer ${dragActive ? "border-blue-500 bg-blue-50" : "border-gray-300"}`}
                onClick={() => fileInputRef.current?.click()}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                {file ? (
                  <span className="text-green-700">{file.name}</span>
                ) : (
                  <span className="text-gray-500">Trage fișierul aici sau apasă pentru a selecta</span>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpeg,.jpg,.xlsx,.csv"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
            </div>
          </div>
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="flex justify-between items-center mt-6">
            <Button type="button" variant="secondary" onClick={handleClose} disabled={loading}>
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
