import {signupMutation} from "~/client/@pinia/colada.gen";
import type {FormSubmitEvent} from "@nuxt/ui";
import type {ISignupSchema} from "~/schemas/signup";

export function useSignup() {
  const signup = useMutation({
    ...signupMutation()
  })
  const toast = useToast()
  const router = useRouter()

  const onSubmit = async (payload: FormSubmitEvent<ISignupSchema>) => {
    try {
      await signup.mutateAsync({
        body: {
          first_name: payload.data.first_name,
          last_name: payload.data.last_name,
          patronymic: payload.data?.patronymic,
          birthday: createDateStringFromDate(payload.data.birthday),
          email: payload.data.email,
          password: payload.data.password
        }
      })

      toast.add({
        title: 'Успешная регистрация',
        icon: 'i-lucide-user-plus',
        color: 'success'
      })
      await router.push('/signin')
    } catch(e) {
      console.log(e)
    }
  }

  return { onSubmit, ...signup }
}