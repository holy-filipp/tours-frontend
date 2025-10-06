<template>
  <UHeader>
    <template #title>
      <Logo class="w-48" />
    </template>
    <UNavigationMenu :items="items" />
    <template #right>
      Right
    </template>
    <template #body>HASDH</template>
  </UHeader>
</template>

<script lang="ts" setup>
import type { NavigationMenuItem } from '@nuxt/ui'
import Logo from "~/assets/images/logo.svg?component"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Тестик'
  }
])
</script>