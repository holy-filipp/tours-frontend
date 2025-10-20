export class ApiError extends Error {
  code: number

  constructor(message: string, code: number) {
    super(message)
    this.code = code

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

export const client = {

}