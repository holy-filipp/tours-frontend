<template>
  <ExcursionOverview :id="id" />
</template>

<script lang="ts" setup>
import ExcursionOverview from "~/components/ExcursionOverview.vue";

const route = useRoute()
const id = ref<string>('')

if (route.params.id) {
  id.value = route.params.id
}
</script>

<style lang="scss" scoped>

</style>