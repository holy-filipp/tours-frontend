import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const apiBaseUrl = useRuntimeConfig().API_BASE_URL

  const path = event.path.replace(/^\/api\//, '')
  const target = joinURL(apiBaseUrl, path)

  console.info(`[API][${event.method}] Request to ${target}`)

  return proxyRequest(event, target)
})