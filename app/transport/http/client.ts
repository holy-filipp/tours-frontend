export class ApiError extends Error {
  code: number

  constructor(message: string, code: number) {
    super(message)
    this.code = code

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

type IInitData = RequestInit & {
  json?: string
}

export const client = {
  request: async <T>(path: string, initData: IInitData = {}) => {
    const headers = new Headers(initData?.headers)
    headers.set('Accept', 'application/json')

    initData.headers = headers

    if (initData?.json) {
      initData.body = JSON.stringify(initData?.json)
    }

    const response = await fetch(path, initData)

    try {
      const data = await response.json()

      if (response.status > 299) {

      }

      return data as Promise<T>
    } catch {
      throw Error('Error parsing JSON')
    }
  }
}