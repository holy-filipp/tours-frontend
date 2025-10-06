<template>
  <UContainer class="flex flex-col items-center p-4">
    <UPageCard class="w-full max-w-md space-y-6">
      <div class="flex flex-col text-center">
        <div class="mb-2">
          <UserPlus class="size-8 shrink-0 inline-block" />
        </div>
        <div class="text-xl text-pretty font-semibold text-highlighted">Регистрация</div>
        <div class="mt-1 text-base text-pretty text-muted">Создать новый аккаунт</div>
      </div>
      <UForm :schema="schema" :state="state" class="space-y-5" @submit="onSubmit">
        <UFormField label="Email" name="email" required>
          <UInput v-model="state.email" class="w-full" />
        </UFormField>
        <UFormField label="Имя" name="first_name" required>
          <UInput v-model="state.first_name" class="w-full" />
        </UFormField>
        <UFormField label="Фамилия" name="last_name" required>
          <UInput v-model="state.last_name" class="w-full" />
        </UFormField>
        <UFormField label="Отчество" name="patronymic">
          <UInput v-model="state.patronymic" class="w-full" />
        </UFormField>
        <UFormField label="Дата рождения" name="birthday" required>
          <UDatePicker v-model="state.birthday" class="w-full" />
        </UFormField>
        <UFormField label="Пароль" name="password" required>
          <UInput v-model="state.password" :type="passwordVisibility ? 'text' : 'password'" class="w-full">
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="passwordVisibility ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                @click="passwordVisibility = !passwordVisibility"
              />
            </template>
          </UInput>
        </UFormField>
        <UFormField label="Повторите пароль" name="repeat_password" required>
          <UInput v-model="state.repeat_password" :type="repeatPasswordVisibility ? 'text' : 'password'" class="w-full">
            <template #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="sm"
                :icon="repeatPasswordVisibility ? 'i-lucide-eye-off' : 'i-lucide-eye'"
                @click="repeatPasswordVisibility = !repeatPasswordVisibility"
              />
            </template>
          </UInput>
        </UFormField>
        <UButton
          type="submit"
          label="Продолжить"
          block
        />
      </UForm>
      {{state.birthday}}
    </UPageCard>
  </UContainer>
</template>

<script lang="ts" setup>
import type { FormSubmitEvent } from '@nuxt/ui'
import * as v from 'valibot'
import UDatePicker from "~/components/ui/UDatePicker.vue";
import { UserPlus } from 'lucide-vue-next'

const schema = v.object({
  email: v.pipe(v.string('Пустой email'), v.email('Неправильный email')),
  first_name: v.pipe(v.string('Пустое имя'), v.minLength(2, 'Минимальная длина имени 2 символа')),
  last_name: v.pipe(v.string('Пустая фамилия'), v.minLength(2, 'Минимальная длина фамилии 2 символа')),
  patronymic: v.optional(v.string()),
  birthday: v.pipe(v.date('Пустая дата'), v.minValue(new Date(1901, 1, 1), 'Не ври, ты не старше 100 лет')),
  password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
  repeat_password: v.pipe(v.string('Пустой пароль'), v.minLength(3, 'Минимальная длина пароля 3 символа')),
})

type Schema = v.InferInput<typeof schema>

const state = reactive({
  'first_name': '',
  'last_name': '',
  'patronymic': '',
  'email': '',
  'password': '',
  'repeat_password': '',
  'birthday': undefined,
})

const passwordVisibility = ref<boolean>(false)
const repeatPasswordVisibility = ref<boolean>(false)

const onSubmit = (payload: FormSubmitEvent<Schema>) => {
  console.log(payload)
}
</script>

<style lang="scss" scoped>

</style>