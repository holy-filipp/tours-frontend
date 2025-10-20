<template>
  <UPageHeader title="Редактировать маршрут" description="Тоже копипаст" />
  <UForm :state="state" :schema="routeSchema" class="space-y-4">
    <UFormField name="start_location" label="Точка начала">
      <UInput v-model="state.start_location" class="w-full" />
    </UFormField>
    <UFormField name="duration" label="Длительность" help="В днях">
      <UInputNumber v-model="state.duration" class="w-full" />
    </UFormField>
    <UButton type="submit" icon="i-lucide-pencil" block class="w-full">Изменить</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import {routeSchema} from "~/schemas/routes";

const state = reactive({
  start_location: '',
  duration: 1,
})
</script>

<style lang="scss" scoped>

</style>