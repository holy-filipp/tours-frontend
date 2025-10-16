<template>
  <UDashboardPanel>
    <template #body>
      <ProseH1>Комплексное создание экскурсии</ProseH1>
      <UForm>
        <UFormField name="start_location" label="Место начала">
          <UInput v-model="state.start_location" />
        </UFormField>
        <UFormField name="capacity" label="Количество мест">
          <UInputNumber v-model="state.capacity" />
        </UFormField>
        <UFormField name="min_age" label="Минимальный возраст">
          <UInputNumber v-model="state.min_age" />
        </UFormField>
        <UFormField name="price" label="Цена">
          <UInputNumber v-model="state.price" />
        </UFormField>
        <UFormField name="duration" label="Длительность в днях">
          <UInputNumber v-model="state.duration" />
        </UFormField>
        <UFormField name="starts_at" label="Время начала">
          <UDatePicker v-model="state.starts_at" />
        </UFormField>
      </UForm>
    </template>
  </UDashboardPanel>
</template>

<script lang="ts" setup>
import UDatePicker from "~/components/ui/UDatePicker.vue";

const state = reactive({
  start_location: '',
  capacity: 0,
  min_age: 0,
  price: 0,
  starts_at: undefined,
  duration: 0,
})
</script>

<style lang="scss" scoped>

</style>