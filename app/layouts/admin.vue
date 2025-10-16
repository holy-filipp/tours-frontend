<template>
  <UDashboardGroup>
    <UDashboardSidebar>
      <template #header>
        <Logo class="w-1/2" />
      </template>

      <div class="flex flex-col gap-4">
        <UButton to="/" variant="subtle" color="error" icon="i-lucide-arrow-left">Вернуться на сайт</UButton>
        <UNavigationMenu orientation="vertical" :items="ITEMS" />
      </div>
    </UDashboardSidebar>
    <slot />
  </UDashboardGroup>
</template>

<script lang="ts" setup>
import type {NavigationMenuItem} from "@nuxt/ui";
import Logo from "~/assets/images/logo.svg?component"

const ITEMS: NavigationMenuItem[] = [
  {
    label: 'Главная',
    icon: 'i-lucide-layout-dashboard',
    to: '/admin'
  },
  {
    label: 'Экскурсии',
    icon: 'i-lucide-route',
    to: '/admin/excursions'
  }
]
</script>