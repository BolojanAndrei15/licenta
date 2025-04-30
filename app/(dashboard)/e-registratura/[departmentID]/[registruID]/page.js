"use client";
import { useQuery } from '@tanstack/react-query';
import axios from "axios";
import { useParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import { useEffect, useState } from "react";
import AddDocumentModal from "@/components/AddDocumentModal";
import { useQueryClient } from "@tanstack/react-query";
import { useSession } from "next-auth/react";

export default function RegistruIdPage() {
  const { registruID } = useParams();
  const setPageTitle = useSetAtom(pageTitleAtom);
  const [modalOpen, setModalOpen] = useState(false);
  const queryClient = useQueryClient();
  const { data: session } = useSession();

  // Fetch detalii registru pentru titlu
  const { data: registruData, isLoading: loadingRegistru } = useQuery({
    queryKey: ["registru", registruID],
    queryFn: async () => {
      const res = await axios.get(`/api/registre?id=${registruID}`);
      return res.data.registru;
    },
    enabled: !!registruID,
  });

  useEffect(() => {
    if (registruData?.nume) setPageTitle(registruData.nume);
    return () => setPageTitle("");
  }, [registruData, setPageTitle]);

  // Documente din registru
  const { data, isLoading, error } = useQuery({
    queryKey: ['documente', registruID],
    queryFn: async () => {
      const res = await axios.get(`/api/document?registru_id=${registruID}`);
      return res.data.documente;
    },
    enabled: !!registruID,
  });

  return (
    <div className="bg-[#fafbfc] min-h-screen p-6">
      <AddDocumentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        registruID={registruID}
        onSuccess={() => queryClient.invalidateQueries(['documente', registruID])}
      />
      <div className="flex justify-between items-center mb-4">
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Caută înregistrări..."
            className="px-3 py-2 border border-gray-200 rounded-md bg-white text-sm min-w-[220px] focus:outline-none"
            disabled
          />
          <select className="px-3 py-2 border border-gray-200 rounded-md bg-white text-sm" disabled>
            <option>Toate tipurile</option>
          </select>
        </div>
        <button
          className="bg-blue-600 text-white rounded-md px-5 py-2 font-medium text-base flex items-center gap-2 hover:bg-blue-700 transition"
          onClick={() => setModalOpen(true)}
        >
          + Adaugă înregistrare
        </button>
      </div>
      <div className="overflow-x-auto bg-white rounded-xl shadow-sm border border-gray-200">
        <table className="w-full border-separate border-spacing-0">
          <thead>
            <tr className="bg-[#fafbfc] border-b border-gray-200">
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Nr.</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Data</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Tip Document</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Expeditor</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Destinatar</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Rezumat</th>
              <th className="uppercase font-semibold text-xs text-gray-500 px-2 py-3 text-left">Acțiuni</th>
            </tr>
          </thead>
          <tbody>
            {isLoading && (
              <tr><td colSpan={7} className="py-8 text-center">Se încarcă documentele...</td></tr>
            )}
            {error && (
              <tr><td colSpan={7} className="py-8 text-center text-red-500">Eroare la încărcare!</td></tr>
            )}
            {data && data.length === 0 && (
              <tr><td colSpan={7} className="py-8 text-center text-gray-400">Nu există documente.</td></tr>
            )}
            {data && data.map((doc, index) => (
              <tr key={doc.id} className="border-b border-gray-100 hover:bg-gray-50 transition">
                <td className="px-2 py-2 text-[15px]">{doc.numar_inregistrare ?? '-'}</td>
                <td className="px-2 py-2 text-[15px]">{doc.data_document ? new Date(doc.data_document).toLocaleDateString() : ''}</td>
                <td className="px-2 py-2 text-[15px]">{doc.tip_document_nume || '-'}</td>
                <td className="px-2 py-2 text-[15px]">{doc.sursa || '-'}</td>
                <td className="px-2 py-2 text-[15px] font-semibold">{doc.destinatar_nume || '-'}</td>
                <td className="px-2 py-2 text-[15px]">{doc.rezumat || '-'}</td>
                <td className="px-2 py-2 text-lg">
                  <div className="flex gap-2">
                    <button title="Vizualizează" className="text-blue-600 hover:bg-blue-50 rounded p-1">
                      <svg width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3.5"/><path d="M2 12S5.5 5 12 5s10 7 10 7-3.5 7-10 7S2 12 2 12z"/></svg>
                    </button>
                    <button title="Editează" className="text-gray-700 hover:bg-gray-100 rounded p-1">
                      <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19.5 3 21l1.5-4L16.5 3.5z"/></svg>
                    </button>
                    <button title="Șterge" className="text-red-500 hover:bg-red-50 rounded p-1">
                      <svg width="17" height="17" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/><line x1="10" y1="11" x2="10" y2="17"/><line x1="14" y1="11" x2="14" y2="17"/></svg>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}