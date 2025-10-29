import type {IUser} from "~/types/user";
import { getUser as gU } from '~/client/sdk.gen'

export const useUserStore = defineStore('user', () => {
  const user = ref<IUser>({})
  const isLoading = ref<boolean>(false)
  const isAuthed = ref<boolean>(false)

  function setUser(u: IUser) {
    user.value = u
  }

  function getUser() {
    return user.value
  }

  function logout() {
    isAuthed.value = false
    user.value = {}
  }

  async function fetchUser() {
    isLoading.value = true

    const { data, response } = await gU()

    if (response.status === 200 && data?.data) {
      setUser(data.data)
      isAuthed.value = true
    }

    isLoading.value = false
  }

  return { user, setUser, getUser, fetchUser, logout, isAuthed, isLoading }
})