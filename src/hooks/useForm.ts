import { createFormStore } from "../stores/formStore";
import type Joi from "joi";
import type { Writable } from "svelte/store";

type Options<T> = { schema: Joi.ObjectSchema<T> };
type Return<T> = {
  handleSubmit: (e: Event) => void;
  data: Writable<T>;
  errors: Writable<{ message: string; [key: string]: any }>;
};

export const useForm = <T>({ schema }: Options<T>): Return<T> => {
  const data = createFormStore<T>();
  const errors = createFormStore<T>();

  let subData;

  data.subscribe((val) => {
    subData = val;
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const validatedSchema = schema.validate(subData);

    if (validatedSchema.error) {
      const key = validatedSchema.error.details[0].context.key;
      errors.update((err) => {
        err[key] = validatedSchema.error;
        console.log(err);

        return err;
      });
    }
    if (validatedSchema.errors) errors.set(errors);
  };

  return {
    handleSubmit,
    data: data as Writable<T>,
    errors: errors as any,
  };
};
