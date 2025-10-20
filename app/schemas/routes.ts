import * as v from 'valibot'

export const routeSchema = v.object({
  start_location: v.pipe(v.string('Пустое поле'), v.minLength(3, 'Минимальная длина 3')),
  duration: v.pipe(v.number('Пустое поле'), v.minValue(1, 'Минимальное число 1'))
})

export type IRouteSchema = v.InferOutput<typeof routeSchema>