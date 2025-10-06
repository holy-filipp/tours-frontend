<template>
  <UApp :locale="ru">
    <AppHeader />
    <UMain>
      <NuxtPage />
    </UMain>
  </UApp>
</template>

<script lang="ts" setup>
import { ru } from '@nuxt/ui/locale'
</script>