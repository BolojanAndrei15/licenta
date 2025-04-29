import { AppSidebar, SidebarProvider } from "@/components/Sidebar";
import Header from "@/components/Header";

export default function DashboardLayout({ children }) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-[#fafbfc] w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 p-0 md:p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
