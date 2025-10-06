<template>
  <UContainer class="flex flex-col items-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Вход"
        icon="i-lucide-user"
        :schema="schema"
        description="Войти в аккаунт за пару кликов"
        :fields="FIELDS"
        @submit="onSubmit"
      />
    </UPageCard>
  </UContainer>
</template>

<script lang="ts" setup>
import type {AuthFormField, FormSubmitEvent} from '@nuxt/ui'
import * as v from 'valibot'

const FIELDS: AuthFormField[] = [
  {
    type: 'email',
    name: 'email',
    label: 'Email',
    placeholder: 'Введите ваш email',
    required: true,
  },
  {
    type: 'password',
    name: 'password',
    label: 'Пароль',
    placeholder: 'Введите ваш пароль',
    required: true
  },
  {
    type: 'checkbox',
    name: 'remember',
    label: 'Запомнить меня'
  }
]

const schema = v.object({
  email: v.pipe(v.string('Пустой email'), v.email('Неправильный email')),
  password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
  remember: v.optional(v.boolean(), false)
})
type Schema = v.InferInput<typeof schema>

const onSubmit = (payload: FormSubmitEvent<Schema>) => {
  console.log(payload)
}
</script>

<style lang="scss" scoped>

</style>