<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <UNavigationMenu orientation="vertical" :items="ITEMS" />
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup>
</template>

<script lang="ts" setup>
import type {NavigationMenuItem} from "@nuxt/ui";

const ITEMS: NavigationMenuItem[] = [
  {
    label: 'Вернуться назад',
    icon: 'i-lucide-arrow-left',
    to: '/'
  },
  {
    label: 'Главная',
    icon: 'i-lucide-layout-dashboard',
    to: '/admin'
  }
]
</script>