import { Button } from "@cloudflare/kumo/components/button";
import { Checkbox } from "@cloudflare/kumo/components/checkbox";
import { Input } from "@cloudflare/kumo/components/input";
import { Surface } from "@cloudflare/kumo/components/surface";
import { cn } from "@cloudflare/kumo/utils";

export function Example({
  className,
  ...props
}: React.ComponentProps<typeof Surface>) {
  return (
    <Surface className={cn("p-6 rounded-lg", className)} {...props}>
      <h1 className="text-2xl font-bold mb-4">Welcome to Kumo</h1>

      <div className="space-y-4">
        <Input placeholder="Enter your name" />

        <Checkbox.Group
          legend="Email preferences"
          description="Choose how you'd like to receive updates"
          value={[]}
          onValueChange={() => {}}
        >
          <Checkbox.Item value="email" label="Email notifications" />
          <Checkbox.Item value="sms" label="SMS notifications" />
          <Checkbox.Item value="push" label="Push notifications" />
        </Checkbox.Group>
        <Button variant="primary">Click me</Button>
      </div>
    </Surface>
  );
}
