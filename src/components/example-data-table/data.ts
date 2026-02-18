export interface User {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "active" | "inactive";
  lastLogin: string;
}

export const data: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-03-10",
  },
  {
    id: "2",
    name: "Jane Smith",
    email: "jane@example.com",
    role: "Editor",
    status: "active",
    lastLogin: "2024-03-12",
  },
  {
    id: "3",
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "Viewer",
    status: "inactive",
    lastLogin: "2024-02-28",
  },
  {
    id: "4",
    name: "Alice Williams",
    email: "alice@example.com",
    role: "Admin",
    status: "active",
    lastLogin: "2024-03-15",
  },
  {
    id: "5",
    name: "Charlie Brown",
    email: "charlie@example.com",
    role: "Viewer",
    status: "inactive",
    lastLogin: "2024-01-20",
  },
];
