"use client";
import React from "react";
import { usePathname } from "next/navigation";
import { Bell } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "./ui/breadcrumb";
import { useAtomValue } from "jotai";
import { pageTitleAtom } from "@/lib/pageTitleAtom";
import { Skeleton } from "./ui/skeleton";

const Header = ({ pageTitle, breadcrumbs, departmentName }) => {
  const atomPageTitle = useAtomValue(pageTitleAtom);
  const pathname = usePathname();
  // Always generate breadcrumbs from the URL if breadcrumbs are not provided
  const segments = pathname.split("/").filter(Boolean);
  let href = "";
  const autoBreadcrumbs = segments.map((seg, idx) => {
    href += "/" + seg;
    let label = seg;
    // Folosește atomPageTitle pentru orice segment care este un id (numai cifre sau UUID)
    if (atomPageTitle && (/^\d+$/.test(seg) || /^[0-9a-fA-F-]{36}$/.test(seg))) {
      label = atomPageTitle;
    } else {
      label = seg.replace(/[-_]/g, " ").replace(/\b\w/g, l => l.toUpperCase());
    }
    return {
      label,
      href: idx < segments.length - 1 ? href : undefined
    };
  });
  // Always prepend Acasă as the first breadcrumb
  const homeCrumb = { label: "Acasă", href: "/" };
  const crumbs = [homeCrumb, ...(breadcrumbs || autoBreadcrumbs)];
  // Folosește atomPageTitle dacă există, altfel pageTitle sau titlul generat
  const title = atomPageTitle || pageTitle || (crumbs.length > 0 ? crumbs[crumbs.length - 1].label : "Acasă");
  const isLoading = !atomPageTitle && !pageTitle && (!breadcrumbs || breadcrumbs.length === 0);
  return (
    <header className="bg-white px-4 py-4 border-b w-full flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
      <div>
        {isLoading ? (
          <>
            <Skeleton className="h-7 w-48 mb-2" />
            <div className="flex gap-2">
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
              <Skeleton className="h-5 w-24" />
            </div>
          </>
        ) : (
          <>
            <h1 className="text-xl font-semibold mb-1">{title}</h1>
            <Breadcrumb>
              <BreadcrumbList>
                {crumbs.map((item, idx) => (
                  <React.Fragment key={item.href || item.label}>
                    <BreadcrumbItem>
                      {item.href && idx !== crumbs.length - 1 ? (
                        <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
                      ) : (
                        <BreadcrumbPage>{item.label}</BreadcrumbPage>
                      )}
                    </BreadcrumbItem>
                    {idx < crumbs.length - 1 && <BreadcrumbSeparator />}
                  </React.Fragment>
                ))}
              </BreadcrumbList>
            </Breadcrumb>
          </>
        )}
      </div>
      <div className="flex items-center gap-4 mt-2 md:mt-0">
        <button className="relative p-2 rounded-full hover:bg-gray-100 transition-colors" aria-label="Notificări">
          <Bell className="w-6 h-6 text-gray-700" />
          <span className="absolute top-1 right-1 bg-blue-600 text-white text-xs rounded-full px-1.5 py-0.5">5</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
