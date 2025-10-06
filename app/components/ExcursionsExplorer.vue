<template>
  <UContainer class="p-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageHeader
      title="Экскурсии"
      description="Просматривайте доступные экскурсии и записывайтесь на них."
    />
    <div class="flex flex-col justify-between gap-4 mt-4 sm:flex-row">
      <UInput icon="i-lucide-search" placeholder="Поиск..." class="grow" />
      <UFieldGroup>
        <UButton color="neutral" :variant="statusFilter == 'active' ? 'subtle' : 'outline'" @click="statusFilter = 'active'">Активные</UButton>
        <UButton color="neutral" :variant="statusFilter == 'active' ? 'outline' : 'subtle'" @click="statusFilter = 'archive'">Архив</UButton>
      </UFieldGroup>
    </div>
    <UPageList class="mt-4">
      <UPageCard to="/excursions/trus" spotlight>
        <template #body>
          <div class="flex flex-col gap-3 md:flex-row md:gap-4">
            <UIconData label="Точка старта" icon="i-lucide-flag-triangle-right">
              Ижевск
            </UIconData>
            <UIconData label="Длительность" icon="i-lucide-clock-9">
              10 дней
            </UIconData>
            <UIconData label="Цена" icon="i-lucide-wallet">
              9999 рублей
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

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Экскурсии',
    icon: 'i-lucide-route',
    to: '/excursions',
  }
]

const statusFilter = ref<'active' | 'archive'>('active')
</script>

<style lang="scss" scoped>

</style>