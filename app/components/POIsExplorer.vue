<template>
  <UContainer class="p-4 space-y-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <UPageCTA
      title="Интересная Удмуртия"
      description="Здесь отображены достопримечательности Удмуртии загруженные нашими пользователями. Присоединяйтесь к ним и поделитесь своими интересными местами!"
      :links="LINKS"
    />
    <UPageGrid>
      <UPageCard
        title="Филипп"
        description="Мордор — мрачная земля вулканов и пепла, окружённая горами, где возвышается Ородруин и темная башня Саурона, символ зла."
        icon="i-lucide-map-pin"
      >
        <img src="https://cs15.pikabu.ru/post_img/big/2024/11/07/8/1730986892213223094.jpg" alt="Point of interest">
      </UPageCard>
    </UPageGrid>
  </UContainer>
</template>

<script lang="ts" setup>
import type {ButtonProps} from "#ui/components/Button.vue";
import type {BreadcrumbItem} from "@nuxt/ui";

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Достопримечательности',
    icon: 'i-lucide-map-pin',
    to: '/pois',
  },
]
const LINKS: ButtonProps[] = [
  {
    label: 'Загрузить',
    icon: 'i-lucide-upload',
    to: '/pois/create'
  }
]
</script>

<style lang="scss" scoped>

</style>