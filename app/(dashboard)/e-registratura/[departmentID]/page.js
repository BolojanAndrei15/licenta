"use client";
import { useSetAtom } from "jotai";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { pageTitleAtom } from "@/lib/pageTitleAtom";

export default function ERegistraturaDepartmentPage() {
  const { departmentID } = useParams();
  const setPageTitle = useSetAtom(pageTitleAtom);
  const { data: departments } = useQuery({
    queryKey: ["departments"],
    queryFn: async () => {
      const res = await fetch("/api/department");
      if (!res.ok) throw new Error("Network response was not ok");
      return res.json();
    },
  });

  let departmentName = '';
  if (departments) {
    const department = departments.find(dep => String(dep.id) === String(departmentID));
    departmentName = department ? department.nume : '';
  }

  useEffect(() => {
    setPageTitle(departmentName);
    // cleanup: reset title when unmount
    return () => setPageTitle("");
  }, [departmentName, setPageTitle]);

  return <div>E-Registratura Department: {departmentID}</div>;
}