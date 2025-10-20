import * as v from 'valibot'

export const excursionSchema = v.object({
  starts_at: v.pipe(v.date('Пустая дата')),
  starts_at_time: v.pipe(v.date('Пустое время')),
  capacity: v.pipe(v.number('Пустое число'), v.minValue(1, 'Число должно быть больше 0')),
  min_age: v.pipe(v.number('Пустое число'), v.minValue(1, 'Число должно быть больше 0')),
  price: v.pipe(v.number('Пустое число'), v.minValue(1, 'Число должно быть больше 0')),
  route_id: v.pipe(v.number('Маршрут не выбран'))
})

export type IExcursionSchema = v.InferOutput<typeof excursionSchema>