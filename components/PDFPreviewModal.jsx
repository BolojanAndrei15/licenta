import { format } from "date-fns";
import { DocumentViewer } from 'react-documents';

export default function PDFPreviewModal({ open, onClose, url, document, viewer }) {
  if (!open || !url || !document) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl max-w-5xl w-full p-0 relative animate-fade-in flex flex-col">
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200 rounded-t-xl">
          <h2 className="text-base font-semibold text-gray-900">Previzualizare Document</h2>
          <button className="text-gray-500 hover:text-red-500 text-2xl font-bold transition" onClick={onClose} aria-label="Închide modalul">&times;</button>
        </div>
        <div className="flex flex-row gap-6 p-6 bg-white min-h-[600px]">
          {/* Stânga: Document */}
          <div className="flex-1 flex items-center justify-center min-w-[350px] min-h-[500px] bg-gray-50 rounded-lg border shadow-inner">
            <DocumentViewer
              queryParams="hl=Nl"
              url={url}
              viewerUrl={viewer?.viewerUrl}
              viewer={viewer?.name}
              overrideLocalhost="https://react-doc-viewer.firebaseapp.com/"
            />
          </div>
          {/* Dreapta: Detalii */}
          <div className="w-[340px] flex flex-col gap-4 text-sm">
            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Registru:</span>
                <span className="text-blue-700 font-semibold">{document.registru_nume || '-'}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">Nr. {document.numar_inregistrare}</span>
                <span className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs font-semibold">{document.numar_inregistrare}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>
                Data înregistrării: {document.data_document ? format(new Date(document.data_document), "dd.MM.yyyy") : "-"}
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="flex justify-between mb-1"><span className="text-gray-500">Număr document</span><span className="font-semibold">{document.numar_document}</span></div>
              <div className="flex justify-between mb-1"><span className="text-gray-500">Data document</span><span>{document.data_document ? format(new Date(document.data_document), "dd.MM.yyyy") : "-"}</span></div>
              <div className="mb-1"><span className="text-gray-500">Sursă</span><div className="font-medium text-gray-800">{document.sursa || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Rezumat</span><div className="text-gray-700 text-xs whitespace-pre-line">{document.rezumat || '-'}</div></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="mb-1"><span className="text-gray-500">Departament adresat</span><div className="font-medium text-gray-800">{document.departament_adresat || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Destinatar</span><div className="flex items-center gap-2 font-medium text-gray-800">{document.destinatar_nume || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Tip document</span><div className="font-medium text-gray-800">{document.tip_document_nume || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Data expedierii</span><div className="font-medium text-gray-800">{document.data_expedierii ? format(new Date(document.data_expedierii), "dd.MM.yyyy") : '-'}</div></div>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 border">
              <div className="mb-1"><span className="text-gray-500">Înregistrat de</span><div className="flex items-center gap-2 font-medium text-gray-800">{document.inregistrat_de_nume || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Preluat de</span><div className="flex items-center gap-2 font-medium text-gray-800">{document.preluat_de_nume || '-'}</div></div>
              <div className="mb-1"><span className="text-gray-500">Creat la</span><div className="font-medium text-gray-800">{document.creat_la ? format(new Date(document.creat_la), "dd.MM.yyyy HH:mm") : '-'}</div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
