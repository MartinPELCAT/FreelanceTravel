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

  let subData: {} | T;

  data.subscribe((val) => {
    subData = val;
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const validatedSchema = schema
      .options({ abortEarly: false })
      .validate(subData);

    validatedSchema.error.details.forEach((err) => {
      errors.update((up) => {
        up[err.context.key] = err.message.replaceAll('"', "");
        return up;
      });
    });
  };

  return {
    handleSubmit,
    data: data as Writable<T>,
    errors: errors as any,
  };
};
