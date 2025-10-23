<template>
  <UHeader>
    <template #title>
      <Logo class="w-48" />
    </template>
    <UNavigationMenu :items="items" />
    <template v-if="user.isLoading" #right>
      <USkeleton class="w-[100px] h-24" />
    </template>
    <template v-else-if="!user.isAuthed" #right>
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
          :name="user.user.first_name"
          :description="user.user.role"
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
const user = useUserStore()
</script>