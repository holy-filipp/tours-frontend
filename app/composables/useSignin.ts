import {signinMutation, signupMutation} from "~/client/@pinia/colada.gen";
import type {FormSubmitEvent} from "@nuxt/ui";
import type {ISigninSchema} from "~/schemas/signin";

export function useSignin() {
  const signin = useMutation({
    ...signinMutation(),
  })
  const toast = useToast()
  const router = useRouter()
  const user = useUserStore()

  const onSubmit = async (payload: FormSubmitEvent<ISigninSchema>) => {
    try {
      await signin.mutateAsync({
        body: {
          email: payload.data.email,
          password: payload.data.password,
        }
      })

      await user.fetchUser()

      toast.add({
        title: 'Успешный вход',
        icon: 'i-lucide-log-in',
        color: 'success',
      })
      await router.push('/')
    } catch(e) {
      console.log(e)
    }
  }

  return { onSubmit, ...signin }
}