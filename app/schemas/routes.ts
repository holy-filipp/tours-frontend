import * as v from 'valibot'

export const routeSchema = v.object({
  start_location: v.pipe(v.string('Пустое поле'), v.minLength(3, 'Минимальная длина 3')),
  duration: v.pipe(v.number('Пустое поле'), v.minValue(1, 'Минимальное число 1'))
})

export type IRouteSchema = v.InferOutput<typeof routeSchema>

export const routePointSchema = v.object({
  point_id: v.pipe(v.number('Точка не выбрана')),
  day_of_the_route: v.pipe(v.number('День маршрута не выбран'))
})

export type IRoutePointSchema = v.InferOutput<typeof routePointSchema>