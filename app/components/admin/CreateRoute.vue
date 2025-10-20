<template>
  <UPageHeader title="Создать маршрут" description="Создайте маршрут и всё" />
  <UForm :state="state" :schema="routeSchema" class="space-y-4">
    <UFormField name="start_location" label="Точка начала">
      <UInput v-model="state.start_location" class="w-full" />
    </UFormField>
    <UFormField name="duration" label="Длительность" help="В днях">
      <UInputNumber v-model="state.duration" class="w-full" />
    </UFormField>
    <UForm
      v-for="(item, count) in state.points"
      :key="count" :name="`points.${count}`"
      :schema="routePointSchema"
      class="flex gap-2"
      nested
    >
      <UFormField :label="!count ? 'Точка' : undefined" name="point_id">
        <USelect v-model="item.point_id" class="w-64" :items="items" placeholder="Выберите точку" />
      </UFormField>
      <UFormField :label="!count ? 'День посещения' : undefined" name="day_of_the_route">
        <UFieldGroup>
          <UInputNumber v-model="item.day_of_the_route" />
          <UButton color="error" variant="subtle" icon="i-lucide-x" @click="removePoint(count)" />
        </UFieldGroup>
      </UFormField>
    </UForm>
    <UButton color="neutral" variant="subtle" size="sm" @click="addPoint">Добавить точку</UButton>
    <UButton type="submit" icon="i-lucide-plus" block class="w-full">Создать</UButton>
  </UForm>
</template>

<script lang="ts" setup>
import {routePointSchema, routeSchema} from "~/schemas/routes";
import type {InferInput} from 'valibot'
import type {SelectItem} from "#ui/components/Select.vue";

type RouteInput = InferInput<typeof routeSchema>;
type RoutePointInput = InferInput<typeof routePointSchema>;

const state = reactive<Partial<RouteInput & {points: Partial<RoutePointInput>[]}>>({
  start_location: '',
  duration: 1,
  points: []
})

const items = ref<SelectItem[]>([
  {
    label: 'Тестовая точка 1',
    value: 1,
  },
  {
    label: 'Тестовая точка 2',
    value: 2
  }
])

function addPoint() {
  state.points.push({
    day_of_the_route: undefined,
    point_id: undefined,
  })
}

function removePoint(idx: number) {
  if (state.points[idx]) {
    state.points.splice(idx, 1)
  }
}
</script>

<style lang="scss" scoped>

</style>