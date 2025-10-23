<template>
  <UContainer class="flex flex-col items-center p-4">
    <UPageCard class="w-full max-w-md">
      <UAuthForm
        title="Вход"
        icon="i-lucide-user"
        :schema="signinSchema"
        description="Войти в аккаунт за пару кликов"
        :fields="FIELDS"
        :loading="isLoading"
        @submit="onSubmit"
      >
        <template #validation>
          <UAlert v-if="error" color="error" icon="i-lucide-info" :title="getPrettyMessage(error.message)" :description="getPrettyErrors(error.errors)" />
        </template>
      </UAuthForm>
    </UPageCard>
  </UContainer>
</template>

<script lang="ts" setup>
import type {AuthFormField} from '@nuxt/ui'
import {signinSchema} from "~/schemas/signin";
import {useSignin} from "~/composables/useSignin";
import {getPrettyErrors, getPrettyMessage} from "~/utils/errors";

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
const { onSubmit, isLoading, error } = useSignin()
</script>

<style lang="scss" scoped>

</style>