import { Button } from "@cloudflare/kumo/components/button";
import { Input } from "@cloudflare/kumo/components/input";
import { Surface } from "@cloudflare/kumo/components/surface";
import { Form } from "@cloudflare/kumo/primitives/form";
import { cn } from "@cloudflare/kumo/utils";

import { useExampleForm } from "./use-example-form";

export function ExampleForm({
  className,
  ...props
}: React.ComponentProps<typeof Surface>) {
  const { errors, handleSubmit, handleBlur } = useExampleForm();

  return (
    <Surface className={cn("p-6 rounded-lg", className)} {...props}>
      <Form onBlur={handleBlur} onFormSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">Welcome to Kumo</h1>

        {/* <pre>{JSON.stringify(errors, null, 2)}</pre> */}

        <div className="space-y-4">
          <Input
            name="name"
            label="Name"
            placeholder="Your name"
            error={errors.fieldErrors.name?.[0]}
          />

          <Button type="submit" variant="primary">
            Click me
          </Button>
        </div>
      </Form>
    </Surface>
  );
}
