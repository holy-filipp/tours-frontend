<template>
  <UApp :locale="ru">
    <NuxtLayout :name="layout">
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script lang="ts" setup>
import { ru } from '@nuxt/ui/locale'

const route = useRoute()
const layout = ref<string>('default')

watch(route, () => {
  const s = route.fullPath.split('/')

  if (s[1] === 'admin') {
    layout.value = 'admin'
  } else {
    layout.value = 'default'
  }
}, {
  immediate: true,
})
</script>