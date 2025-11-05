<template>
  <UContainer class="p-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageHeader title="Загрузить достопримечательность" description="Загрузите свою достопримечательность, опишите подробно." />
    <UForm :state="state" :schema="schema" class="space-y-5 mt-4" @submit="onSubmit">
      <UFormField label="Описание достопримечательности" name="description">
        <UTextarea v-model="state.description" class="block" autoresize />
      </UFormField>
      <UFormField label="Фотография" name="file">
        <UFileUpload
          v-model="state.file"
          label="Перетащите фотографию сюда"
          description="PNG, JPG, JPEG, одна штука"
          accept=".png,.jpg,.jpeg"
        />
      </UFormField>
      <UButton :loading="asyncStatus === 'loading'" type="submit" icon="i-lucide-upload" label="Загрузить" />
      <UAlert v-if="createPoi.status === 'error'">{{ createPoi.error }}</UAlert>
    </UForm>
  </UContainer>
</template>

<script lang="ts" setup>
import type {BreadcrumbItem, FormSubmitEvent} from "@nuxt/ui";
import * as v from 'valibot'
import {createPoiMutation} from "~/client/@pinia/colada.gen";

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Достопримечательности',
    icon: 'i-lucide-map-pin',
    to: '/pois',
  },
  {
    label: 'Загрузить',
    icon: 'i-lucide-upload',
    to: '/pois/create',
  }
]

const schema = v.object({
  description: v.pipe(v.string('Пустое описание'), v.minLength(20, 'Минимальная длина описания 20 символов')),
  file: v.pipe(v.file('Отсутствует фотография'), v.mimeType(['image/jpeg', 'image/jpg', 'image/png'], 'Неверный формат файла')),
})
type Schema = v.InferInput<typeof schema>

const state = reactive({
  description: '',
  file: undefined
})

const { state: createPoi, mutateAsync, asyncStatus } = useMutation(createPoiMutation())

const toast = useToast()

const onSubmit = async (event: FormSubmitEvent<Schema>) => {
  await mutateAsync({
    body: {
      file: event.data.file,
      description: event.data.description
    }
  })

  toast.add({
    title: 'Успех',
    description: 'Точка добавлена'
  })
}
</script>

<style lang="scss" scoped>

</style>