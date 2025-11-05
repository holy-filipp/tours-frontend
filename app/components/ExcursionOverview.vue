<template>
  <div v-if="trip.status === 'pending'">Загрузка...</div>
  <div v-else-if="trip.status === 'error'">{{ trip.error }}</div>
  <UContainer v-else class="p-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageHeader title="Подробности экскурсии" description="Если вам понравилась экскурсия, записывайтесь скорее, места ограничены!" />
    <div class="space-y-2 mt-4">
      <UIconData label="Место старта" icon="i-lucide-map-pin">
        {{ trip.data.data.route.start_location }}
      </UIconData>
      <UIconData label="Длительность" icon="i-lucide-clock-9">
        {{ getDayWithDeclination(trip.data.data.route.duration) }}
      </UIconData>
      <UIconData label="Дата начала" icon="i-lucide-calendar">
        {{ trip.data.data.trip.starts_at }}
      </UIconData>
      <UIconData label="Возрастное ограничение" icon="i-lucide-octagon-minus">
        С {{ getYearWithDeclination(trip.data.data.trip.min_age) }}
      </UIconData>
    </div>
    <UPricingPlan
      title="Купить билет"
      description="Цена билета рассчитывается в зависимости от количества свободных мест."
      :price="`${trip.data.data.trip.price} рублей`"
      :button="{
         label: 'Купить',
      }"
      orientation="horizontal"
      class="mt-4"
    />
    <ProseH2>Точки маршрута</ProseH2>
    <ProseP>Просматривайте точки маршрута с фотографиями. Каждая точка имеет фиксированный день посещения, вы можете увидеть дату.</ProseP>
    <UTimeline
      :items="points"
      :ui="{
        description: 'flex flex-col gap-2'
      }"
    >
      <template #description="{ item }">
        {{ item.description }}
        <img :src="item.image" alt="Item image">
      </template>
    </UTimeline>
  </UContainer>
</template>

<script lang="ts" setup>
import UIconData from "~/components/ui/UIconData.vue";
import type {BreadcrumbItem, TimelineItem} from "@nuxt/ui";
import {getTripByIdQuery} from "~/client/@pinia/colada.gen";
import {getDayWithDeclination, getYearWithDeclination} from "~/utils/time";
import {addDays} from "date-fns";

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Экскурсии',
    icon: 'i-lucide-route',
    to: '/excursions',
  },
  {
    label: 'Подробности экскурсии',
    icon: 'i-lucide-list',
    to: '/excursions/[id]',
  }
]
const ITEMS: TimelineItem[] = [
  {
    title: 'Мордор',
    description: 'Вы посетите ахереную точку под названием Мордор, вас там испепелят',
    icon: 'i-lucide-map-pin',
    date: '1 октября 2025 года',
    image: 'https://cs15.pikabu.ru/post_img/big/2024/11/07/8/1730986892213223094.jpg'
  },
  {
    title: 'Мордор',
    description: 'Вы посетите ахереную точку под названием Мордор, вас там испепелят',
    icon: 'i-lucide-map-pin',
    date: '1 октября 2025 года',
    image: 'https://cs15.pikabu.ru/post_img/big/2024/11/07/8/1730986892213223094.jpg'
  },
  {
    title: 'Мордор',
    description: 'Вы посетите ахереную точку под названием Мордор, вас там испепелят',
    icon: 'i-lucide-map-pin',
    date: '1 октября 2025 года',
    image: 'https://cs15.pikabu.ru/post_img/big/2024/11/07/8/1730986892213223094.jpg'
  },
  {
    title: 'Мордор',
    description: 'Вы посетите ахереную точку под названием Мордор, вас там испепелят',
    icon: 'i-lucide-map-pin',
    date: '1 октября 2025 года',
    image: 'https://cs15.pikabu.ru/post_img/big/2024/11/07/8/1730986892213223094.jpg'
  }
]

const { id } = defineProps<{
  id: string
}>()

const { state: trip } = useQuery(getTripByIdQuery, () => ({
  path: {
    id: parseInt(id)
  }
}))

const points = computed(() => {
  if (!trip.value.data.data) return []

  const o: TimelineItem[] = []

  for (const point of trip.value.data.data.points) {
    const d = addDays(new Date(trip.value.data.data.trip.starts_at), point.pivot.day_of_the_route - 1)

    o.push({
      title: point.name,
      description: point.description,
      icon: 'i-lucide-map-pin',
      date: d.toLocaleDateString('ru-RU', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }),
      image: `/backend/storage/${point.file_name}`
    })
  }

  return o
})
</script>

<style lang="scss" scoped>

</style>