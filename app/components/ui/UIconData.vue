<template>
  <div class="flex flex-row gap-2">
    <div class="flex flex-row gap-1">
      <UIcon :name="icon" size="24" />
      <span>{{label}}:</span>
    </div>
    <span class="text-highlighted"><slot /></span>
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  label: string,
  icon: string,
}>()
</script>

<style lang="scss" scoped>

</style>