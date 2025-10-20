<template>
  <UPageHeader title="Редактировать экскурсию" description="Да, это просто скопированная форма создания .-." />
  <UForm :state="state" :schema="excursionSchema" class="space-y-4">
    <div class="flex flex-row gap-2">
      <UFormField name="starts_at" label="Дата начала">
        <UDatePicker v-model="state.starts_at" class="w-full" />
      </UFormField>
      <UFormField name="starts_at_time" label="Время начала">
        <UInput v-model="time" type="time" class="w-full" />
      </UFormField>
    </div>
    <UFormField name="capacity" label="Количество мест">
      <UInputNumber v-model="state.capacity" class="w-full" />
    </UFormField>
    <UFormField name="min_age" label="Минимальный возраст">
      <UInputNumber v-model="state.min_age" class="w-full" />
    </UFormField>
    <UFormField name="price" label="Цена">
      <UInputNumber
        v-model="state.price"
        class="w-full"
        :format-options="{
          style: 'currency',
          currency: 'RUB',
          currencyDisplay: 'symbol'
        }"
      />
    </UFormField>
    <UFormField name="route_id" label="Маршрут">
      <USelect v-model="state.route_id" placeholder="Выберите маршрут" :items="items" class="w-full" />
    </UFormField>
    <UButton type="submit" icon="i-lucide-pencil" block class="w-full">Изменить</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import UDatePicker from "~/components/ui/UDatePicker.vue";
import {excursionSchema} from "~/schemas/excursions";
import {createDateFromTimeString} from "~/utils/time";
import type {SelectItem} from "#ui/components/Select.vue";

const state = reactive({
  starts_at: undefined,
  starts_at_time: undefined,
  capacity: 0,
  min_age: 0,
  price: 0,
  route_id: undefined,
})
const time = ref<string>('')

const items = ref<SelectItem[]>([
  {
    label: 'Маршрут 1',
    value: 1,
  },
  {
    label: 'Маршрут 2',
    value: 2
  }
])

watch(time, (v: string) => {
  return state.starts_at_time = createDateFromTimeString(v)
})
</script>

<style lang="scss" scoped>

</style>