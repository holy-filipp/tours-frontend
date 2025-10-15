<template>
  <UHeader>
    <template #title>
      <Logo class="w-48" />
    </template>
    <UNavigationMenu :items="items" />
    <template v-if="!isAuthed" #right>
      <UFieldGroup>
        <UButton variant="subtle" icon="i-lucide-log-in" to="/signin">Вход</UButton>
        <UButton icon="i-lucide-user-plus" to="/signup">Регистрация</UButton>
      </UFieldGroup>
    </template>
    <template v-else #right>
      <UDropdownMenu :items="DROPDOWN">
        <UUser
          :avatar="{
            src: 'https://i.pravatar.cc/300'
          }"
          name="Филипп Подрядов"
          description="Администратор"
        />
      </UDropdownMenu>
    </template>
    <template #body>HASDH</template>
  </UHeader>
</template>

<script lang="ts" setup>
import type {DropdownMenuItem, NavigationMenuItem} from '@nuxt/ui'
import Logo from "~/assets/images/logo.svg?component"

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Главная',
    to: '/',
    icon: 'i-lucide-home'
  },
  {
    label: 'Экскурсии',
    to: '/excursions',
    icon: 'i-lucide-route'
  },
  {
    label: 'Достопримечательности',
    to: '/pois',
    icon: 'i-lucide-map-pin'
  }
])
const DROPDOWN: DropdownMenuItem[] = [
  {
    label: 'Дэшборд',
    icon: 'i-lucide-layout-dashboard',
    to: '/admin'
  },
  {
    label: 'Выйти',
    icon: 'i-lucide-log-out',
    color: 'error'
  }
]
const isAuthed = ref<boolean>(true)
</script>