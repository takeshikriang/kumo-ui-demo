import { Button } from "@cloudflare/kumo/components/button";
import { Input } from "@cloudflare/kumo/components/input";
import { Surface } from "@cloudflare/kumo/components/surface";
import { Form } from "@cloudflare/kumo/primitives/form";
import { cn } from "@cloudflare/kumo/utils";
import { Controller } from "react-hook-form";

import { useExampleForm, type ExampleFormValue } from "./use-example-form";

const DEFAULT_VALUES = {
  name: "John Doe",
  unknown: "Hello",
};

export function ExampleForm({
  className,
  ...props
}: React.ComponentProps<typeof Surface>) {
  const {
    watch,
    control,
    formState: { errors, isValid },
    handleSubmit,
  } = useExampleForm(DEFAULT_VALUES);

  const onSubmit = (values: ExampleFormValue) => {
    console.log("Form submitted:", values);
  };

  return (
    <Form
      onSubmit={handleSubmit(onSubmit)}
      className={cn("space-y-4", className)}
      {...props}
    >
      <h1 className="text-2xl font-bold mb-4">Example Form</h1>

      <pre className="text-sm">{JSON.stringify(watch(), null, 2)}</pre>

      <div className="space-y-4">
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              label="Name"
              placeholder="Your name"
              error={errors.name?.message}
            />
          )}
        />

        <Button type="submit" variant="primary" disabled={!isValid}>
          Submit
        </Button>
      </div>
    </Form>
  );
}
