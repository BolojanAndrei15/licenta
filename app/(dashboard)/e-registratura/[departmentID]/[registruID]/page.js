"use client";
import { useParams } from "next/navigation";
import { useSetAtom } from "jotai";
import { useEffect } from "react";
import axios from "axios";
import { pageTitleAtom } from "@/lib/pageTitleAtom";

export default function RegistruIdPage() {
  const { departmentID } = useParams();
  const setPageTitle = useSetAtom(pageTitleAtom);

  useEffect(() => {
    async function fetchDepartmentName() {
      try {
        const res = await axios.get(`/api/department?departament_id=${departmentID}`);
        console.log("[DEBUG] API response:", res.data);
        setPageTitle(res.data?.departament?.nume || "");
      } catch (err) {
        console.log("[DEBUG] API error:", err);
        setPageTitle("");
      }
    }
    console.log("[DEBUG] useEffect triggered, departmentID:", departmentID);
    fetchDepartmentName();
    return () => setPageTitle("");
  }, [departmentID, setPageTitle]);

  return (
    <div>
      <h1>Registru in sine</h1>
      <p>sadasdsadasdsadsadsa.</p>
    </div>
  );
}