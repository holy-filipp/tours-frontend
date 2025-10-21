import { joinURL } from 'ufo'

export default defineEventHandler(async (event) => {
  const apiBaseUrl = useRuntimeConfig().API_BASE_URL

  const path = event.path.replace(/^\/api\//, '')
  const target = joinURL(apiBaseUrl, path)

  console.log(`proxying request ${path} to ${target}`)

  return proxyRequest(event, target)
})