"use client";
import { useParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import axios from "axios";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import { useQuery } from '@tanstack/react-query';

export default function RegistruIdPage() {
  const { registruID } = useParams();

  const { data, isLoading, error } = useQuery({
    queryKey: ['documente', registruID],
    queryFn: async () => {
      const res = await axios.get(`/api/document?registru_id=${registruID}`);
      return res.data.documente;
    },
    enabled: !!registruID,
  });

  return (
    <div>
      <h1>Registru in sine</h1>
      {isLoading && <p>Se încarcă documentele...</p>}
      {error && <p>Eroare la încărcare!</p>}
      {data && (
        <ul>
          {data.map((doc) => (
            <li key={doc.id}>{doc.numar_document} - {doc.rezumat}</li>
          ))}
        </ul>
      )}
    </div>
  );
}