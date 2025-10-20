<template>
  <UPageHeader title="Создать точку" description="Создайте точку и всё" />
  <UForm :state="state" :schema="pointSchema" class="space-y-4">
    <UFormField name="name" label="Название">
      <UInput v-model="state.name" class="w-full" />
    </UFormField>
    <UFormField name="description" label="Описание">
      <UInput v-model="state.description" class="w-full" />
    </UFormField>
    <UFormField name="file" label="Фотография">
      <UFileUpload
        v-model="state.file"
        label="Перетащите фотографию сюда"
        description="PNG, JPG, JPEG, одна штука"
        accept=".png,.jpg,.jpeg"
      />
    </UFormField>
    <UButton type="submit" icon="i-lucide-plus" block class="w-full">Создать</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import {pointSchema} from "~/schemas/points";

const state = reactive({
  name: '',
  description: '',
  file: undefined
})
</script>

<style lang="scss" scoped>

</style>