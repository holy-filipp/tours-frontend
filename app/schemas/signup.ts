import * as v from "valibot";

export const signupSchema = v.object({
  email: v.pipe(v.string('Пустой email'), v.email('Неправильный email')),
  first_name: v.pipe(v.string('Пустое имя'), v.minLength(2, 'Минимальная длина имени 2 символа')),
  last_name: v.pipe(v.string('Пустая фамилия'), v.minLength(2, 'Минимальная длина фамилии 2 символа')),
  patronymic: v.optional(v.string()),
  birthday: v.pipe(v.date('Пустая дата'), v.minValue(new Date(1901, 1, 1), 'Не ври, ты не старше 100 лет')),
  password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
  repeat_password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
})

export type ISignupSchema = v.InferInput<typeof signupSchema>