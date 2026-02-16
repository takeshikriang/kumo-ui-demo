import { Form } from "@cloudflare/kumo/primitives/form";
import { useState } from "react";
import { z } from "zod";

const emptyErrors = {
  formErrors: [],
  fieldErrors: {},
};

export function useFormValidation<T extends z.ZodTypeAny>(schema: T) {
  const [errors, setErrors] =
    useState<z.ZodFlattenedError<z.output<T>>>(emptyErrors);

  const validate = async (values: Form.Values) => {
    const result = await schema.safeParseAsync(values);

    return result.success
      ? { errors: emptyErrors }
      : { errors: z.flattenError(result.error) };
  };

  const handleSubmit = async (values: Form.Values) => {
    const result = await validate(values);
    setErrors(result.errors);
  };

  const handleBlur = async (evt: React.FocusEvent<HTMLFormElement>) => {
    const formData = new FormData(evt.currentTarget);
    const values = Object.fromEntries(formData.entries());
    const result = await validate(values);
    setErrors(result.errors);
  };

  return {
    errors,
    handleSubmit,
    handleBlur,
  };
}
