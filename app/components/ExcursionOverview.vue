<template>
  <UContainer class="p-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageHeader title="Подробности экскурсии" description="Если вам понравилась экскурсия, записывайтесь скорее, места ограничены!" />
    <div class="space-y-2 mt-4">
      <UIconData label="Место старта" icon="i-lucide-map-pin">
        Ижевск
      </UIconData>
      <UIconData label="Длительность" icon="i-lucide-clock-9">
        10 дней
      </UIconData>
      <UIconData label="Дата начала" icon="i-lucide-calendar">
        1 октября 2025 года в 10:00
      </UIconData>
      <UIconData label="Возрастное ограничение" icon="i-lucide-octagon-minus">
        С 16 лет
      </UIconData>
    </div>
    <UPricingPlan
      title="Купить билет"
      description="Цена билета рассчитывается в зависимости от количества свободных мест."
      price="9999 рублей"
      :button="{
         label: 'Купить',
      }"
      orientation="horizontal"
      class="mt-4"
    />
    <ProseH2>Точки маршрута</ProseH2>
    <ProseP>Просматривайте точки маршрута с фотографиями. Каждая точка имеет фиксированный день посещения, вы можете увидеть дату.</ProseP>
    <UTimeline
      :items="ITEMS"
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

defineProps<{
  id: string
}>()
</script>

<style lang="scss" scoped>

</style>