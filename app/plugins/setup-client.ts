import {client} from "~/client/client.gen";

export default defineNuxtPlugin(async () => {
  await $fetch.raw('/api/sanctum/csrf-cookie')

  const cookie = useCookie('XSRF-TOKEN')

  async function csrfInterceptor(request: Request) {
    request.headers.set('X-XSRF-TOKEN', cookie.value)
    request.headers.set('Accept', 'application/json')
    return request
  }

  client.interceptors.request.use(csrfInterceptor)

  async function postCsrfInterceptor(response: Response) {
    if (response.status == 419) {
      console.log('pook')
    }

    return response
  }

  client.interceptors.response.use(postCsrfInterceptor)

  client.setConfig({
    baseUrl: '/'
  })
})