import {client} from "~/client/client.gen";

export default defineNuxtPlugin(async () => {
  await $fetch.raw('/api/sanctum/csrf-cookie')

  const cookie = useCookie<string>('XSRF-TOKEN')

  client.setConfig({
    onRequest: ({ options }) => {
      console.log(cookie.value)
      options.headers.set('X-XSRF-TOKEN', cookie.value)
    }
  })
})