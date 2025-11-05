<template>
  <div>
    <ClientOnly fallback-tag="span" fallback="Загрузка шапки...">
      <AppHeader />
    </ClientOnly>
    <UMain>
      <slot />
    </UMain>
  </div>
</template>
<script setup lang="ts">
</script>