import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const valueSchema = z.object({
  name: z.string().min(1, "Name is required"),
});

export type ExampleFormValue = z.infer<typeof valueSchema>;

export function useExampleForm(defaultValues: ExampleFormValue) {
  return useForm<ExampleFormValue>({
    resolver: zodResolver(valueSchema),
    mode: "onBlur",
    defaultValues,
  });
}
