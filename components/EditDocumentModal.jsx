import { useState, useEffect, useRef } from "react";
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
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Command, CommandInput, CommandList, CommandItem, CommandEmpty } from "./ui/command";
import { Calendar } from "./ui/calendar";
import { format } from "date-fns";
import ro from "date-fns/locale/ro";
import { Document, Page, pdfjs } from 'react-pdf';
import { Progress } from "./ui/progress";

// Pentru compatibilitate cu pdfjs-dist v4+ (unde nu mai există build/pdf.worker.entry)
// Folosește worker-ul direct din node_modules
pdfjs.GlobalWorkerOptions.workerSrc = `/node_modules/pdfjs-dist/build/pdf.worker.js`;

export default function EditDocumentModal({ open, onClose, document, onSuccess }) {
  const { data: session } = useSession();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ ...document });
  const [error, setError] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileUrl, setFileUrl] = useState("");
  const [uploadProgress, setUploadProgress] = useState(null);
  const [uploadingFileName, setUploadingFileName] = useState("");
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [uploadedPreviewUrl, setUploadedPreviewUrl] = useState("");
  const fileInputRef = useRef();

  useEffect(() => {
    setForm({ ...document });
  }, [document, open]);

  // Fetch destinatari (utilizatori) doar din departamentul registrului
  const { data: registruDetails } = useQuery({
    queryKey: ["registru", document?.registru_id],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?id=${document?.registru_id}`);
      return res.data.registru;
    },
    enabled: !!document?.registru_id,
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
  const [destinatarOpen, setDestinatarOpen] = useState(false);
  const destinatarNume = destinatari?.find(u => u.id === form.destinatar_id)?.nume || "";

  // Fetch tipuri documente pentru dropdown
  const { data: tipuri } = useQuery({
    queryKey: ["tipuri_documente"],
    queryFn: async () => (await axios.get("/api/tip_document")).data,
  });

  // Mutăm fetchFileUrl la nivel de componentă pentru a putea fi apelată oriunde
  async function fetchFileUrl() {
    if (registruDetails?.departamente?.nume && registruDetails?.nume && document?.id) {
      try {
        const params = new URLSearchParams({
          retrieve: "1",
          department: registruDetails.departamente.nume,
          register: registruDetails.nume,
          iddocument: document.id,
        });
        const res = await axios.get(`/api/upload-document?${params.toString()}`);
        if (res.data && res.data.files && res.data.files.length > 0) {
          setFileUrl(`/api/upload-document/download?department=${encodeURIComponent(registruDetails.departamente.nume)}&register=${encodeURIComponent(registruDetails.nume)}&filename=${encodeURIComponent(res.data.files[0])}`);
        } else {
          setFileUrl("");
        }
      } catch {
        setFileUrl("");
      }
    } else {
      setFileUrl("");
    }
  }

  useEffect(() => {
    setFileUrl(""); // Resetăm fileUrl imediat la schimbare document/registru
    fetchFileUrl();
  }, [registruDetails, document]);

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setUploadingFileName(file?.name || "");
    setUploadProgress(null);
    setUploadSuccess(false);
    if (file) {
      const url = URL.createObjectURL(file);
      setUploadedPreviewUrl(url);
    } else {
      setUploadedPreviewUrl("");
    }
  };

  const handleRemoveUpload = () => {
    setSelectedFile(null);
    setUploadingFileName("");
    setUploadedPreviewUrl("");
  };

  const uploadFile = async (formData) => {
    setUploadProgress(0);
    setUploadSuccess(false);
    // Simulează progresul cu animatie 3 secunde
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setUploadProgress(null);
    // Verifică extensia
    const ext = uploadingFileName.split('.').pop().toLowerCase();
    if (["pdf", "png", "jpeg", "jpg", "xlsx", "csv"].includes(ext)) {
      setUploadSuccess(true);
      // Ascunde mesajul de succes după 2 secunde
      setTimeout(() => setUploadSuccess(false), 2000);
    }
    setUploadingFileName("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const { numar_inregistrare, departament_adresat, ...rest } = form;
      const payload = {
        ...rest,
        id: document.id,
      };
      if (!payload.destinatar_id) payload.destinatar_id = null;
      if (!payload.preluat_de) payload.preluat_de = null;
      // 1. Update document în baza de date
      await axios.put("/api/document", payload);

      // 2. Dacă s-a schimbat numărul documentului și există fișier atașat, redenumește fișierul în Nextcloud
      if (
        registruDetails?.departamente?.nume &&
        registruDetails?.nume &&
        document?.id &&
        form.numar_document !== document.numar_document &&
        fileUrl // există fișier asociat
      ) {
        // Extrage numele vechi al fișierului (din fileUrl)
        const oldName = decodeURIComponent(fileUrl.split("filename=")[1] || "");
        // Înlocuiește doar numărul documentului din numele vechi
        // Caută patternul __@__id
        const idx = oldName.lastIndexOf(`__@__${document.id}`);
        let newName = oldName;
        if (idx !== -1) {
          // Prefixul până la numărul vechi
          const prefix = oldName.substring(0, idx);
          // Sufixul cu __@__id și extensia
          const suffix = oldName.substring(idx);
          // În prefix, înlocuiește ultimul număr cu noul număr document
          // Caută ultimul _ sau alt separator înainte de idx
          const lastUnderscore = prefix.lastIndexOf('_');
          if (lastUnderscore !== -1) {
            newName = prefix.substring(0, lastUnderscore + 1) + form.numar_document + suffix;
          } else {
            // fallback: tot prefixul devine noul număr
            newName = form.numar_document + suffix;
          }
        }
        const formData = new FormData();
        formData.append("department", registruDetails.departamente.nume);
        formData.append("register", registruDetails.nume);
        formData.append("oldName", oldName);
        formData.append("newName", newName);
        await axios.put("/api/upload-document", formData);
      }

      // 3. Dacă s-a selectat un fișier nou, îl uploadăm și ștergem vechiul fișier
      if (selectedFile && registruDetails?.departamente?.nume && registruDetails?.nume) {
        // 1. Caută fișierul vechi
        const params = new URLSearchParams({
          retrieve: "1",
          department: registruDetails.departamente.nume,
          register: registruDetails.nume,
          iddocument: document.id,
        });
        const retrieveRes = await axios.get(`/api/upload-document?${params.toString()}`);
        if (retrieveRes.data && retrieveRes.data.files && retrieveRes.data.files.length > 0) {
          // Șterge fișierul vechi
          await axios.delete("/api/upload-document", {
            data: {
              department: registruDetails.departamente.nume,
              register: registruDetails.nume,
              documentName: retrieveRes.data.files[0],
            }
          });
        }
        // 2. Încarcă fișierul nou
        const formData = new FormData();
        formData.append("file", selectedFile);
        formData.append("department", registruDetails.departamente.nume);
        formData.append("register", registruDetails.nume);
        formData.append("documentName", `${form.numar_document}__@__${document.id}`);
        await uploadFile(formData);
      }
      await fetchFileUrl();
      onSuccess?.();
      onClose();
    } catch (err) {
      setError(err.response?.data?.error || "Eroare la editare");
    } finally {
      setLoading(false);
    }
  };

  // Pentru date, folosim shadcn Calendar + Popover
  const [calendarOpenDoc, setCalendarOpenDoc] = useState(false);
  const [calendarOpenExp, setCalendarOpenExp] = useState(false);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogTitle className="mb-2">Editează Înregistrare</DialogTitle>
         {/* Card document curent */}
         <div className="flex items-center gap-3 bg-gray-50 rounded-lg w-full mt-0 mb-4 p-2 border border-gray-100" style={{ marginLeft: 0, marginRight: 0 }}>
            <svg width="28" height="28" fill="none" stroke="#b91c1c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
            <div>
              <div className="font-medium text-gray-800 text-sm">Document curent: {fileUrl ? decodeURIComponent(fileUrl.split("filename=")[1] || "document.pdf").split("__@__")[0] : "-"}</div>
              <div className="text-xs text-gray-500">Încărcat la: {document?.creat_la ? format(new Date(document.creat_la), "dd MMM yyyy, HH:mm") : '-'}</div>
            </div>
          </div>
        <form onSubmit={handleSubmit} className="space-y-0">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="numar_inregistrare">Număr Înregistrare</Label>
              <Input id="numar_inregistrare" name="numar_inregistrare" value={form.numar_inregistrare ?? ''} readOnly disabled className="bg-gray-100 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="departament_adresat">Departament Adresat</Label>
              <Input id="departament_adresat" name="departament_adresat" value={registruDetails?.departamente?.nume || ""} readOnly disabled className="bg-gray-100 cursor-not-allowed" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="numar_document">Număr Document</Label>
              <Input id="numar_document" name="numar_document" value={form.numar_document} onChange={handleChange} required />
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
              <Textarea id="rezumat" name="rezumat" value={form.rezumat} onChange={handleChange} required rows={3} />
            </div>
            <div className="space-y-2 col-span-1 md:col-span-2">
              <Label>Fișier atașat (opțional, PDF, PNG, JPEG, XLSX, CSV)</Label>
              <div
                className="border-2 border-dashed border-gray-300 rounded-md p-4 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50 transition flex flex-col items-center justify-center gap-2"
                onClick={() => fileInputRef.current?.click()}
                onDrop={e => {
                  e.preventDefault();
                  if (e.dataTransfer.files && e.dataTransfer.files[0]) {
                    handleFileChange({ target: { files: e.dataTransfer.files } });
                  }
                }}
                onDragOver={e => e.preventDefault()}
                style={{ minHeight: 48 }}
              >
                {uploadedPreviewUrl ? (
                  <div className="relative w-full flex flex-col items-center">
                    <button type="button" onClick={handleRemoveUpload} className="absolute top-0 right-0 text-gray-400 hover:text-red-500 text-lg font-bold z-10 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-sm" title="Șterge fișierul selectat">&times;</button>
                    {(() => {
                      const ext = uploadingFileName.split('.').pop()?.toLowerCase();
                      if (["png", "jpg", "jpeg", "gif", "bmp", "webp"].includes(ext)) {
                        return <img src={uploadedPreviewUrl} alt="Preview" className="max-h-32 mx-auto rounded shadow" />;
                      }
                      if (["pdf"].includes(ext)) {
                        return <iframe src={uploadedPreviewUrl} title="Preview PDF" className="w-full h-32 rounded shadow bg-white" />;
                      }
                      return <span className="text-gray-700 font-medium">{uploadingFileName}</span>;
                    })()}
                  </div>
                ) : (
                  <span className="text-gray-500 select-none">Trage fișierul aici sau apasă pentru a selecta</span>
                )}
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.png,.jpeg,.jpg,.xlsx,.csv"
                  className="hidden"
                  onChange={handleFileChange}
                />
              </div>
              {fileUrl === "" && loading ? (
                <span className="text-gray-400">Se încarcă documentul...</span>
              ) : fileUrl ? null : (
                <span className="text-gray-400">Niciun document atașat</span>
              )}
            </div>
          </div>
         
          {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
          <div className="flex justify-between items-center mt-6">
            <Button type="button" variant="secondary" onClick={onClose} disabled={loading}>
              Anulează
            </Button>
            <Button type="submit" variant="default" disabled={loading}>
              {loading && <Loader2 className="animate-spin mr-2" />}
              Salvează modificările
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
