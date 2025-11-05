<template>
  <UContainer class="p-4">
    <div v-if="isLoading">Загрузка...</div>
    <div v-else-if="page?.data?.content">{{ page.data.content }}</div>
  </UContainer>
</template>

<script lang="ts" setup>
import {getUdmurtiaPageQuery} from "~/client/@pinia/colada.gen";

const { data: page, isLoading } = useQuery(getUdmurtiaPageQuery)
</script>

<style lang="scss" scoped>

</style>