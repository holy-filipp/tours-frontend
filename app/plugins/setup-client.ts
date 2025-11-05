import {client} from "~/client/client.gen";

export default defineNuxtPlugin({
  name: 'setup-client',
  async setup() {
    async function csrfInterceptor(request: Request) {
      request.headers.set('Accept', 'application/json')
      return request
    }
    client.interceptors.request.use(csrfInterceptor)

    client.setConfig({
      baseUrl: 'http://localhost/backend',
      credentials: 'include',
    })
  }
})