import { useQuery } from '@tanstack/react-query';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { format } from "date-fns";
import { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { saveAs } from "file-saver";

const severitateColor = {
  INFO: "bg-green-100 text-green-700",
  ERROR: "bg-red-100 text-red-700",
  WARNING: "bg-yellow-100 text-yellow-700",
};

function StatCard({ label, value, icon, color }) {
  return (
    <div className={`flex-1 min-w-[160px] bg-white rounded-xl border border-gray-100 shadow-sm flex items-center gap-4 px-6 py-4 ${color || ''}`}>
      <div className="flex flex-col flex-1">
        <span className="text-xs text-gray-400 font-medium mb-1">{label}</span>
        <span className="text-2xl font-bold text-gray-800">{value}</span>
      </div>
      {icon && <span className="text-3xl">{icon}</span>}
    </div>
  );
}

export default function LoguriTable() {
  const [filters, setFilters] = useState({
    severitate: "",
    actiune: "",
    utilizator: "",
    data: "",
    page: 1,
    pageSize: 10,
  });

  const { data, isLoading } = useQuery({
    queryKey: ["loguri", filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      if (filters.severitate) params.append("severitate", filters.severitate);
      if (filters.actiune) params.append("actiune", filters.actiune);
      if (filters.utilizator) params.append("utilizator_id", filters.utilizator);
      if (filters.data) params.append("data", filters.data);
      params.append("page", filters.page);
      params.append("pageSize", filters.pageSize);
      const res = await axios.get(`/api/loguri?${params.toString()}`);
      return res.data;
    },
  });

  const loguri = data?.loguri || [];
  const total = data?.total || 0;
  const totalError = data?.totalError || 0;
  const totalWarning = data?.totalWarning || 0;
  const totalInfo = data?.totalInfo || 0;

  // Extrage distinct valori pentru filtre
  const severitati = ["Toate", "INFO", "WARNING", "ERROR"];
  const actiuni = ["Toate", "CREATE", "UPDATE", "DELETE", "LOGIN", "LOGOUT"];
  const utilizatori = Array.from(new Set((loguri || []).map(l => l.utilizatori?.nume).filter(Boolean)));

  // Paginare
  const totalPages = Math.ceil(total / filters.pageSize);
  const pageNumbers = Array.from({ length: Math.min(5, totalPages) }, (_, i) => i + 1 + Math.max(0, filters.page - 3));

  // Export helpers
  const handleExport = async (type) => {
    const params = new URLSearchParams();
    if (filters.severitate) params.append("severitate", filters.severitate);
    if (filters.actiune) params.append("actiune", filters.actiune);
    if (filters.utilizator) params.append("utilizator_id", filters.utilizator);
    if (filters.data) params.append("data", filters.data);
    params.append("all", "1"); // exportă toate, nu doar pagina curentă
    const res = await axios.get(`/api/loguri?${params.toString()}`);
    const logs = res.data.loguri || [];
    if (type === "json") {
      const blob = new Blob([JSON.stringify(logs, null, 2)], { type: "application/json" });
      saveAs(blob, `loguri_${Date.now()}.json`);
    } else if (type === "csv") {
      const header = Object.keys(logs[0] || {}).join(",");
      const rows = logs.map(l => Object.values(l).map(v => `"${String(v ?? "").replace(/"/g, '""')}"`).join(",")).join("\n");
      const csv = header + "\n" + rows;
      const blob = new Blob([csv], { type: "text/csv" });
      saveAs(blob, `loguri_${Date.now()}.csv`);
    } else if (type === "excel") {
      // Simplu: CSV cu extensie .xls pentru compatibilitate rapidă
      const header = Object.keys(logs[0] || {}).join("\t");
      const rows = logs.map(l => Object.values(l).map(v => String(v ?? "")).join("\t")).join("\n");
      const xls = header + "\n" + rows;
      const blob = new Blob([xls], { type: "application/vnd.ms-excel" });
      saveAs(blob, `loguri_${Date.now()}.xls`);
    }
  };

  return (
    <div className="w-full">
      {/* Statistici */}
      <div className="flex gap-4 mb-6">
        <StatCard label="Total Loguri" value={total.toLocaleString()} icon={<span className="text-blue-500"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></svg></span>} />
        <StatCard label="Erori" value={totalError} icon={<span className="text-red-500"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></span>} color="" />
        <StatCard label="Avertismente" value={totalWarning} icon={<span className="text-yellow-500"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></span>} color="" />
        <StatCard label="Info" value={totalInfo} icon={<span className="text-green-500"><svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg></span>} color="" />
      </div>
      {/* Filtre */}
      <div className="flex flex-wrap gap-4 mb-4 items-end">
        <div>
          <label className="block text-xs mb-1">Severitate</label>
          <select
            className="px-2 py-1 border rounded"
            value={filters.severitate}
            onChange={e => setFilters(f => ({ ...f, severitate: e.target.value, page: 1 }))}
          >
            {severitati.map(s => (
              <option key={s} value={s === "Toate" ? "" : s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Acțiune</label>
          <select
            className="px-2 py-1 border rounded"
            value={filters.actiune}
            onChange={e => setFilters(f => ({ ...f, actiune: e.target.value, page: 1 }))}
          >
            {actiuni.map(a => (
              <option key={a} value={a === "Toate" ? "" : a}>{a}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Utilizator</label>
          <select
            className="px-2 py-1 border rounded"
            value={filters.utilizator}
            onChange={e => setFilters(f => ({ ...f, utilizator: e.target.value, page: 1 }))}
          >
            <option value="">Toți utilizatorii</option>
            {utilizatori.map(u => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-xs mb-1">Data</label>
          <Input
            type="date"
            className="px-2 py-1 border rounded"
            value={filters.data}
            onChange={e => setFilters(f => ({ ...f, data: e.target.value, page: 1 }))}
            style={{ minWidth: 140 }}
          />
        </div>
        <Button className="ml-2 h-9 px-6" onClick={() => {}} type="button">
          Aplică Filtre
        </Button>
      </div>
      {/* Export buttons */}
      <div className="flex gap-2 mb-4 justify-end">
        <Button variant="outline" size="sm" onClick={() => handleExport("excel")}>Export Excel</Button>
        <Button variant="outline" size="sm" onClick={() => handleExport("csv")}>Export CSV</Button>
        <Button variant="outline" size="sm" onClick={() => handleExport("json")}>Export JSON</Button>
      </div>
      {/* Tabel loguri */}
      <div className="overflow-x-auto bg-white rounded-xl border border-gray-100 shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>TIMESTAMP</TableHead>
              <TableHead>SEVERITATE</TableHead>
              <TableHead>ACȚIUNE</TableHead>
              <TableHead>TABELĂ</TableHead>
              <TableHead>UTILIZATOR</TableHead>
              <TableHead>MESAJ</TableHead>
              <TableHead>DETALII</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && Array.from({ length: 5 }).map((_, i) => (
              <TableRow key={i}>
                {[...Array(7)].map((_, j) => (
                  <TableCell key={j}><Skeleton className="h-6 w-full" /></TableCell>
                ))}
              </TableRow>
            ))}
            {!isLoading && loguri && loguri.length === 0 && (
              <TableRow>
                <TableCell colSpan={7} className="text-center text-gray-400">Nu există loguri.</TableCell>
              </TableRow>
            )}
            {!isLoading && loguri && loguri.map((log) => (
              <TableRow key={log.id}>
                <TableCell>{log.timestamp ? format(new Date(log.timestamp), "yyyy-MM-dd HH:mm") : ""}</TableCell>
                <TableCell>
                  <Badge className={severitateColor[log.severitate] || "bg-gray-100 text-gray-700"}>
                    {log.severitate}
                  </Badge>
                </TableCell>
                <TableCell>{log.actiune}</TableCell>
                <TableCell>{log.tabela}</TableCell>
                <TableCell className="font-semibold">{log.utilizatori?.nume || '-'}</TableCell>
                <TableCell>{log.mesaj}</TableCell>
                <TableCell>
                  {log.detalii_modificari ? (
                    <Button variant="ghost" size="icon" className="text-blue-600"><svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M2 12S5.5 5 12 5s10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg></Button>
                  ) : "-"}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Paginare */}
      <div className="flex items-center gap-2 mt-4">
        <span className="text-sm">Afișare</span>
        <select
          className="px-2 py-1 border rounded"
          value={filters.pageSize}
          onChange={e => setFilters(f => ({ ...f, pageSize: Number(e.target.value), page: 1 }))}
        >
          {[10, 25, 50, 100].map(size => (
            <option key={size} value={size}>{size}</option>
          ))}
        </select>
        <span className="text-sm">din {total.toLocaleString()} înregistrări</span>
        <div className="flex-1" />
        <Button variant="ghost" size="sm" disabled={filters.page === 1} onClick={() => setFilters(f => ({ ...f, page: f.page - 1 }))}>Anterior</Button>
        {pageNumbers.map(page => (
          <Button
            key={page}
            variant={filters.page === page ? "default" : "ghost"}
            size="sm"
            onClick={() => setFilters(f => ({ ...f, page }))}
          >
            {page}
          </Button>
        ))}
        {totalPages > 5 && <span className="px-2">...</span>}
        <Button variant="ghost" size="sm" disabled={filters.page === totalPages} onClick={() => setFilters(f => ({ ...f, page: f.page + 1 }))}>Următor</Button>
      </div>
    </div>
  );
}
