import {client} from "~/client/client.gen";
import type {ResolvedRequestOptions} from "~/client/client";

interface FetchResponse<T> extends Response {
  _data?: T
}

export default defineNuxtPlugin({
  name: 'setup-client',
  async setup() {
    // const cookie = useCookie('XSRF-TOKEN')
    // let csrfPromise: Promise<FetchResponse<never>> | null = null

    async function csrfInterceptor(request: Request) {
      // if (csrfPromise) {
      //   await csrfPromise
      // }

      // request.headers.set('X-XSRF-TOKEN', cookie.value)
      request.headers.set('Accept', 'application/json')

      return request
    }

    client.interceptors.request.use(csrfInterceptor)

    // async function postCsrfInterceptor(response: Response, request: Request, opts: ResolvedRequestOptions) {
    //   if (response.status != 419) {
    //     return response
    //   }
    //
    //   if (csrfPromise) {
    //     await csrfPromise
    //   } else {
    //     csrfPromise = $fetch.raw('/api/sanctum/csrf-cookie')
    //     await csrfPromise
    //     csrfPromise = null
    //   }
    //
    //   console.log(response)
    //   console.log(request)
    //   console.log(opts)
    // }
    //
    // client.interceptors.response.use(postCsrfInterceptor)

    const apiBaseUrl = useRuntimeConfig().BACKEND_BASE_URL as string

    client.setConfig({
      baseUrl: import.meta.server ? apiBaseUrl : '/',
      credentials: 'include'
    })
  }
})