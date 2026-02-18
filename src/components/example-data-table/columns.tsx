import { Badge } from "@cloudflare/kumo/components/badge";
import { Text } from "@cloudflare/kumo/components/text";
import type { ColumnDef } from "@tanstack/react-table";

import type { User } from "./data";

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: (info) => (
      <div className="flex flex-col">
        <Text bold>{info.getValue<string>()}</Text>
        <Text variant="secondary" size="sm">
          {info.row.original.email}
        </Text>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: (info) => <Text size="sm">{info.getValue<string>()}</Text>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (info) => {
      const status = info.getValue<string>();
      return (
        <Badge variant={status === "active" ? "primary" : "secondary"}>
          {status}
        </Badge>
      );
    },
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: (info) => (
      <Text variant="secondary" size="sm">
        {info.getValue<string>()}
      </Text>
    ),
  },
];
