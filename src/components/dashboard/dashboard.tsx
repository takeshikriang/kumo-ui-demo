import { Text } from "@cloudflare/kumo/components/text";
import { cn } from "@cloudflare/kumo/utils";

export function Dashboard({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div {...props} className={cn("space-y-6", className)}>
      <div className="space-y-2">
        <Text variant="heading1">Dashboard</Text>
        <Text variant="secondary">
          Welcome back, here's what's happening today.
        </Text>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid esse
        repudiandae non, molestias illum nisi quis expedita qui beatae?
        Molestiae repudiandae natus, repellat vel non vero recusandae libero
        quasi enim?
      </p>
    </div>
  );
}
