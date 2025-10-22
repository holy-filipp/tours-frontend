export const useCsrfStore = defineStore('csrf', () => {
  const csrf = ref<string>()

  function setCsrf(token: string) {
    csrf.value = token
  }

  function getCsrf(): string {
    return csrf.value
  }

  return { csrf, setCsrf, getCsrf }
})