const API_MESSAGES: Record<string, string> = {
  'Validation error': 'Ошибка валидации',
  'Wrong credentials': 'Неправильный email или пароль',
}

const API_ERRORS: Record<string, string> = {
  'The email has already been taken.': 'Пользователь с таким email уже существует',
}

export function getPrettyMessage(e: string) {
  return API_MESSAGES[e.trim()] ?? 'Непредвиденная ошибка'
}

export function getPrettyErrors(errors: Record<string, string[]>) {
  if (Object.keys(errors).length < 0) return false

  const pretty: string[] = []

  for (const e of Object.values(errors)) {
    for (const value of e) {
      pretty.push(`${API_ERRORS[value.trim()] ?? 'Непредвинная ошибка'}`)
    }
  }

  return pretty.join(', ')
}