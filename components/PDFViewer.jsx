import { Document, Page, pdfjs } from 'react-pdf';
import { useState } from 'react';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs';

export default function PDFViewer({ url }) {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  return (
    <div className="flex flex-col items-center">
      <Document
        file={url}
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<div className="text-gray-500">Se încarcă PDF-ul...</div>}
        error={<div className="text-red-500">Eroare la încărcarea PDF-ului</div>}
      >
        <Page pageNumber={pageNumber} width={700} />
      </Document>
      {numPages && numPages > 1 && (
        <div className="flex gap-2 mt-2 items-center">
          <button onClick={() => setPageNumber(p => Math.max(1, p - 1))} disabled={pageNumber === 1} className="px-2 py-1 border rounded disabled:opacity-50">Prev</button>
          <span>Pagina {pageNumber} / {numPages}</span>
          <button onClick={() => setPageNumber(p => Math.min(numPages, p + 1))} disabled={pageNumber === numPages} className="px-2 py-1 border rounded disabled:opacity-50">Next</button>
        </div>
      )}
    </div>
  );
}
