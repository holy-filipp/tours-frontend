import * as v from 'valibot'

export const pointSchema = v.object({
  name: v.pipe(v.string('Пустое поле'), v.minLength(1, 'Минимальная длина 1')),
  description: v.pipe(v.string('Пустое поле'), v.minLength(1, 'Минимальная длина 1')),
  file: v.pipe(v.file('Отсутствует фотография'), v.mimeType(['image/jpeg', 'image/jpg', 'image/png'], 'Неверный формат файла')),
})

export type IPointSchema = v.InferOutput<typeof pointSchema>