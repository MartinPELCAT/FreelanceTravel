import Joi from "joi";

type Type = { searchContent: string };

export const schema = Joi.object<Type>({
  searchContent: Joi.string().required().min(10),
});
