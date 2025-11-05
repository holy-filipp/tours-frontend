<template>
  <UContainer class="p-4 space-y-4">
    <UBreadcrumb :items="BREADCRUMBS" />
    <ClientOnly>
      <UPageCTA
        title="Интересная Удмуртия"
        description="Здесь отображены достопримечательности Удмуртии загруженные нашими пользователями. Присоединяйтесь к ним и поделитесь своими интересными местами!"
        :links="links"
      />
    </ClientOnly>
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

const user = useUserStore()
const links = ref<ButtonProps[]>([])

user.$subscribe(() => {
  if (user.isAuthed) {
    links.value = []

    links.value.push({
      label: 'Загрузить',
      icon: 'i-lucide-upload',
      to: '/pois/create'
    })
  } else {
    links.value = []

    links.value.push({
      label: 'Чтобы загрузить, нужно войти',
      icon: 'i-lucide-log-in',
      to: '/signin'
    })
  }
}, {
  immediate: true
})

const BREADCRUMBS: BreadcrumbItem[] = [
  {
    label: 'Достопримечательности',
    icon: 'i-lucide-map-pin',
    to: '/pois',
  },
]
</script>

<style lang="scss" scoped>

</style>