import Joi from "joi";

type Type = { searchContent: string; issou: string };

export const schema = Joi.object<Type>({
  issou: Joi.string().required(),
  searchContent: Joi.string().required().min(10),
});
