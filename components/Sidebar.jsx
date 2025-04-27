"use client";
import { useRouter } from "next/navigation";
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
  
  // Example sidebar content, you can customize this
  const AppSidebar = () => {
  const router = useRouter();
  return (
  <Sidebar>
  <SidebarHeader>Header</SidebarHeader>
  <SidebarContent>
  <SidebarMenu>
  <SidebarMenuItem>
    <SidebarMenuButton onClick={() => router.replace("/dashboard")}>Dashboard</SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton onClick={() => router.replace("/e-registratura")}>E-Registratura</SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton onClick={() => router.replace("/notificari")}>Notificări</SidebarMenuButton>
  </SidebarMenuItem>
  <SidebarMenuItem>
    <SidebarMenuButton onClick={() => router.replace("/setari")}>Setări</SidebarMenuButton>
  </SidebarMenuItem>
  </SidebarMenu>
  </SidebarContent>
  <SidebarSeparator />
  <SidebarFooter>Footer</SidebarFooter>
  </Sidebar>
  );
  };
  
  export { SidebarProvider, AppSidebar };