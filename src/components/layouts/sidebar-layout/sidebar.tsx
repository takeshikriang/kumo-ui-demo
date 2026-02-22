import { DropdownMenu } from "@cloudflare/kumo/components/dropdown";
import {
  ChevronUp,
  CreditCard,
  LogOut,
  Menu,
  Terminal,
  User,
} from "lucide-react";

import { cn } from "@cloudflare/kumo/utils";

interface SidebarProps {
  isMobileMenuOpen: boolean;
}

export function Sidebar({
  isMobileMenuOpen,
  ...props
}: React.ComponentProps<"aside"> & SidebarProps) {
  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-50 w-64 border-r border-kumo-fill bg-kumo-base flex-col transform transition-transform duration-200 ease-in-out md:relative md:flex md:translate-x-0",
        isMobileMenuOpen ? "translate-x-0 flex" : "-translate-x-full hidden",
      )}
      {...props}
    />
  );
}

interface SidebarHeaderProps {
  onClose: () => void;
}

export function SidebarHeader({ onClose }: SidebarHeaderProps) {
  return (
    <div className="h-16 flex items-center justify-between px-6 border-b border-kumo-fill">
      <div className="flex items-center gap-2 text-kumo-default font-bold text-lg">
        <div className="w-8 h-8 rounded-lg bg-kumo-brand flex items-center justify-center text-white">
          <Terminal className="size-4" />
        </div>
        Kumo UI
      </div>
      <button
        type="button"
        className="md:hidden p-2 -mr-2 text-kumo-subtle hover:bg-kumo-fill rounded-md"
        onClick={onClose}
      >
        <Menu className="size-5" />
      </button>
    </div>
  );
}

export interface NavItem {
  title: string;
  url: string;
  icon: React.ElementType;
  isActive?: boolean;
}

interface SidebarNavProps {
  items: NavItem[];
}

export function SidebarNav({ items }: SidebarNavProps) {
  return (
    <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
      {items.map((item) => {
        return (
          <a
            key={item.title}
            href={item.url}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-md font-medium transition-colors text-sm",
              item.isActive
                ? "bg-kumo-fill text-kumo-default"
                : "text-kumo-subtle hover:bg-kumo-fill/50",
            )}
          >
            <item.icon className="size-4" />
            {item.title}
          </a>
        );
      })}
    </nav>
  );
}

interface SidebarFooterProps {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
}

export function SidebarFooter({ user }: SidebarFooterProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="p-4 border-t border-kumo-fill mt-auto">
      <DropdownMenu>
        <DropdownMenu.Trigger className="flex items-center gap-3 w-full hover:bg-kumo-fill/50 p-2 rounded-md transition-colors text-left focus:outline-none">
          <div className="w-9 h-9 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-kumo-default font-bold shadow-sm">
            {initials}
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-kumo-default truncate">
              {user.name}
            </p>
            <p className="text-xs text-kumo-subtle truncate">{user.email}</p>
          </div>
          <ChevronUp className="size-4 text-kumo-subtle shrink-0" />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content sideOffset={8} className="w-56">
          <DropdownMenu.Item>
            <User className="size-4 mr-2" />
            Edit profile
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <CreditCard className="size-4 mr-2" />
            See plans
          </DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item variant="danger">
            <LogOut className="size-4 mr-2" />
            Sign out
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu>
    </div>
  );
}
