import * as v from "valibot";

export const signinSchema = v.object({
  email: v.pipe(v.string('Пустой email'), v.email('Неправильный email')),
  password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
  remember: v.optional(v.boolean(), false)
})

export type ISigninSchema = v.InferInput<typeof signinSchema>