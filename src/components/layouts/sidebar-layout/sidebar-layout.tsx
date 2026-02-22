import { cn } from "@cloudflare/kumo/utils";
import {
  Glasses,
  LayoutDashboard,
  Menu,
  Package,
  Settings,
  Terminal,
  Users,
} from "lucide-react";
import { useState } from "react";

import { Sidebar, SidebarFooter, SidebarHeader, SidebarNav } from "./sidebar";

const CONFIG = {
  user: {
    name: "John Doe",
    email: "john@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navItems: [
    { title: "Dashboard", url: "#", icon: LayoutDashboard, isActive: false },
    { title: "Products", url: "#", icon: Glasses, isActive: true },
    { title: "Orders", url: "#", icon: Package, isActive: false },
    { title: "Customers", url: "#", icon: Users, isActive: false },
    { title: "Settings", url: "#", icon: Settings, isActive: false },
  ],
};

export function SidebarLayout({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div
      className={cn("flex h-screen bg-kumo-base overflow-hidden", className)}
      {...props}
    >
      {/* Mobile Sidebar Overlay */}
      {isMobileMenuOpen && (
        <button
          type="button"
          className="fixed inset-0 bg-kumo-overlay/80 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      {/* Sidebar Navigation — composable usage */}
      <Sidebar isMobileMenuOpen={isMobileMenuOpen}>
        <SidebarHeader onClose={() => setIsMobileMenuOpen(false)} />
        <SidebarNav items={CONFIG.navItems} />
        <SidebarFooter user={CONFIG.user} />
      </Sidebar>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col h-full overflow-hidden w-full">
        {/* Mobile Header */}
        <header className="h-16 flex items-center px-4 border-b border-kumo-fill bg-kumo-base md:hidden shrink-0">
          <button
            type="button"
            className="p-2 -ml-2 text-kumo-subtle hover:bg-kumo-fill rounded-md"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <Menu className="size-4" />
          </button>
          <div className="ml-4 font-bold text-lg flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-blue-500 rounded-bl-none flex items-center justify-center text-white">
              <Terminal className="size-4" />
            </div>
            Kumo UI
          </div>
        </header>

        {/* Main Content Scrollable Area */}
        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </main>
    </div>
  );
}
