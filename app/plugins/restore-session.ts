import { useUserStore } from "~/stores/user"

export default defineNuxtPlugin({
  name: 'restore-session',
  dependsOn: ['setup-client'],
  async setup() {
    const user = useUserStore()
    await user.fetchUser()
  }
})