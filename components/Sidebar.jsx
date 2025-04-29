"use client";
import { useRouter, usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarProvider,
  SidebarContent,
  SidebarHeader,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator
  } from "./ui/sidebar";
import { useSession, signOut } from "next-auth/react";
  
  // Example sidebar content, you can customize this
  const AppSidebar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session } = useSession();
  const user = session?.user || {
    nume: "Utilizator",
    rol: "-",
    avatar: "/window.svg"
  };
  // Exemplu static pentru notificări și user (poți integra date reale din context/session)
  const notificariCount = 3;
  return (
    <Sidebar className="flex flex-col h-full w-[250px] border-r bg-white justify-between p-0">
      {/* Logo și titlu */}
      <div className="flex items-center gap-2 px-4 pt-4 pb-2">
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="7" y="10" width="10" height="7" rx="2" stroke="#2563eb" strokeWidth="2"/><path d="M12 10v7" stroke="#2563eb" strokeWidth="2"/></svg>
        <span className="font-bold text-lg text-[#2563eb]">eRegistratură</span>
      </div>
      {/* Meniu */}
      <SidebarContent className="flex-1 px-2">
        <SidebarMenu className="flex flex-col gap-1 mt-2">
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.replace("/e-registratura")}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${pathname.startsWith("/e-registratura") ? "font-medium text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <svg width="18" height="18" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 7V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v1"/><path d="M21 10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8"/><path d="M10 12h4"/></svg>
              <span>e-Registratură</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.replace("/setari")}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition ${pathname.startsWith("/setari") ? "font-medium text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <svg width="18" height="18" fill="none" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09A1.65 1.65 0 0 0 8 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 8 4.6a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09A1.65 1.65 0 0 0 16 4.6a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c.2.29.3.63.33 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-.33 1z"/></svg>
              <span>Setări</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={() => router.replace("/notificari")}
              className={`flex items-center gap-2 px-3 py-2 rounded-md transition relative ${pathname.startsWith("/notificari") ? "font-medium text-blue-700 bg-blue-50" : "text-gray-700 hover:bg-gray-100"}`}
            >
              <svg width="18" height="18" fill="none" stroke="#374151" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
              <span>Notificări</span>
              {notificariCount > 0 && (
                <span className="ml-2 bg-red-500 text-white text-xs rounded-full px-2 py-0.5 font-semibold absolute right-2 top-1">{notificariCount}</span>
              )}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarSeparator className="my-2" />
      {/* Footer user info */}
      <SidebarFooter className="px-4 pb-4 pt-2 border-t bg-white">
        <div className="flex items-center gap-3">
          <img src={user.avatar || "/window.svg"} alt="avatar" className="w-9 h-9 rounded-full border object-cover" />
          <div className="flex flex-col">
            <span className="font-medium text-sm text-gray-900 leading-tight">{user.nume}</span>
            <span className="text-xs text-gray-500">{user.rol}</span>
          </div>
        </div>
        <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 mt-2" onClick={() => signOut({ callbackUrl: "/login" })}>
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M17 16l4-4m0 0l-4-4m4 4H7"/><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/></svg>
          Deconectare
        </button>
      </SidebarFooter>
    </Sidebar>
  );
  };
  
  export { SidebarProvider, AppSidebar };