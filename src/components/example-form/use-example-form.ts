import { z } from "zod";

import { useFormValidation } from "#hooks/use-form-validation";

const schema = z.object({
  name: z.string().min(1, "Name is required"),
});

export function useExampleForm() {
  return useFormValidation(schema);
}
