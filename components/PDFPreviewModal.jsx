"use client"

import { format } from "date-fns"
import { DocumentViewer } from "react-documents"
import { Button } from "@/components/ui/button"
import { X, Download } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

function isPdf(url) {
  return url && url.toLowerCase().endsWith(".pdf")
}

export default function PDFPreviewModal({ open, onClose, url, document, viewer }) {
  if (!url || !document) return null

  return (
    <Dialog
      open={open}
      onOpenChange={(o) => {
        if (!o) onClose?.()
      }}
    >
      <DialogContent className="sm:max-w-[80%] md:max-w-[80%] lg:max-w-[80%] w-full p-0 max-h-[90vh] overflow-hidden">
        <DialogHeader className="px-4 py-3 border-b border-gray-200">
          <DialogTitle className="text-base font-semibold text-gray-900">Previzualizare Document</DialogTitle>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute right-2 top-2"
            aria-label="Închide modalul"
          >
            <X className="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
          </Button>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-4 p-4 bg-white overflow-y-auto">
          {/* Stânga: Document */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex items-center justify-center min-h-[350px] md:min-h-[500px] bg-gray-50 rounded-lg border shadow-inner">
            {isPdf(url) ? (
              <DocumentViewer
                queryParams="hl=Nl"
                url={url}
                viewerUrl={viewer?.viewerUrl}
                viewer={viewer?.name}
                overrideLocalhost="https://react-doc-viewer.firebaseapp.com/"
              />
            ) : (
              <div className="flex flex-col items-center justify-center text-gray-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="none" viewBox="0 0 24 24">
                  <rect width="48" height="56" x="8" y="4" fill="#e5e7eb" rx="4" />
                  <path fill="#9ca3af" d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                <span className="mt-4 text-center font-medium">
                  Documentul nu este în format PDF și nu poate fi previzualizat
                </span>
              </div>
            )}
          </div>

          {/* Dreapta: Detalii */}
          <div className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-3 text-sm">
            <div className="bg-gray-50 rounded-lg p-3 border">
              <div className="flex justify-between items-center mb-2">
                <span className="font-semibold text-gray-700">Registru:</span>
                <span className="text-blue-700 font-semibold">{document.registru_nume || "-"}</span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs text-gray-500">Nr. {document.numar_inregistrare}</span>
                <span className="bg-blue-100 text-blue-700 rounded px-2 py-0.5 text-xs font-semibold">
                  {document.numar_inregistrare}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <svg
                  width="14"
                  height="14"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" />
                  <path d="M16 2v4M8 2v4M3 10h18" />
                </svg>
                Data înregistrării:{" "}
                {document.data_document ? format(new Date(document.data_document), "dd.MM.yyyy") : "-"}
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border">
              <div className="flex justify-between mb-1">
                <span className="text-gray-500">Număr document</span>
                <span className="font-semibold">{document.numar_document}</span>
              </div>
              <div className="flex justify-between mb-1">
                <span className="text-gray-500">Data document</span>
                <span>{document.data_document ? format(new Date(document.data_document), "dd.MM.yyyy") : "-"}</span>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Sursă</span>
                <div className="font-medium text-gray-800">{document.sursa || "-"}</div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Rezumat</span>
                <div className="text-gray-700 text-xs whitespace-pre-line">{document.rezumat || "-"}</div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border">
              <div className="mb-1">
                <span className="text-gray-500">Departament adresat</span>
                <div className="font-medium text-gray-800">{document.departament_adresat_nume || "-"}</div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Destinatar</span>
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {document.destinatar_nume || "-"}
                </div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Tip document</span>
                <div className="font-medium text-gray-800">{document.tip_document_nume || "-"}</div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Data expedierii</span>
                <div className="font-medium text-gray-800">
                  {document.data_expedierii ? format(new Date(document.data_expedierii), "dd.MM.yyyy") : "-"}
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3 border">
              <div className="mb-1">
                <span className="text-gray-500">Înregistrat de</span>
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {document.inregistrat_de_nume || "-"}
                </div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Preluat de</span>
                <div className="flex items-center gap-2 font-medium text-gray-800">
                  {document.preluat_de_nume || "-"}
                </div>
              </div>
              <div className="mb-1">
                <span className="text-gray-500">Creat la</span>
                <div className="font-medium text-gray-800">
                  {document.creat_la ? format(new Date(document.creat_la), "dd.MM.yyyy HH:mm") : "-"}
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between mt-2 gap-2">
              <Button asChild variant="default" className="bg-black text-white hover:bg-gray-800 w-full sm:w-auto">
                <a href={url} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" />
                  Descarcă document
                </a>
              </Button>
              <Button variant="secondary" onClick={onClose} className="w-full sm:w-auto">
                <X className="mr-2 w-4 h-4" />
                Inchide
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
