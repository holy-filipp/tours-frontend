<template>
  <UContainer class="p-4">
    <MDC :value="value" />
  </UContainer>
</template>

<script lang="ts" setup>
const value = `# Hello World

Learn more about the **MDC** component in the [documentation](https://github.com/nuxt-modules/mdc).

::card
Контент карты
::
`
</script>

<style lang="scss" scoped>

</style>