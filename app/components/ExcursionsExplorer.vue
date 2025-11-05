<template>
  <UContainer class="p-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageHeader
      title="Экскурсии"
      description="Просматривайте доступные экскурсии и записывайтесь на них."
    />
    <div class="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
      <UInput v-model="search" icon="i-lucide-search" placeholder="Поиск..." class="grow" />
      <UFieldGroup>
        <UButton color="neutral" :variant="statusFilter == 'active' ? 'subtle' : 'outline'" @click="statusFilter = 'active'">Активные</UButton>
        <UButton color="neutral" :variant="statusFilter == 'active' ? 'outline' : 'subtle'" @click="statusFilter = 'archive'">Архив</UButton>
      </UFieldGroup>
    </div>
    <div v-if="trips.status === 'pending'">Загрузка...</div>
    <div v-else-if="trips.status === 'error'">{{ trips.error }}</div>
    <UPageList v-else class="mt-4 space-y-2">
      <UPageCard v-for="trip in sortedTrips" :key="trip.id" :to="`/excursions/${trip.id}`" spotlight>
        <template #body>
          <div class="flex flex-col gap-3 md:flex-row md:gap-4">
            <UIconData label="Точка старта" icon="i-lucide-flag-triangle-right">
              {{ trip.start_location }}
            </UIconData>
            <UIconData label="Длительность" icon="i-lucide-clock-9">
              {{ getDayWithDeclination(trip.duration) }}
            </UIconData>
            <UIconData label="Цена" icon="i-lucide-wallet">
              {{ trip.price }} рублей
            </UIconData>
          </div>
        </template>
      </UPageCard>
    </UPageList>
  </UContainer>
</template>

<script lang="ts" setup>
import type {BreadcrumbItem} from "@nuxt/ui";
import UIconData from "~/components/ui/UIconData.vue";
import {getTripsQuery, searchTripsQuery} from "~/client/@pinia/colada.gen";
import {getDayWithDeclination} from "~/utils/time";

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Экскурсии',
    icon: 'i-lucide-route',
    to: '/excursions',
  }
]

const statusFilter = ref<'active' | 'archive'>('active')
const search = ref<string>('')

const { state: trips } = useQuery(searchTripsQuery, () => ({
  query: {
    search: search.value
  }
}))

const sortedTrips = computed(() => {
  const t = trips.value.data.data

  if (!t) return []

  return t.filter(tr => tr.archived === (statusFilter.value === 'archive'))
})
</script>

<style lang="scss" scoped>

</style>