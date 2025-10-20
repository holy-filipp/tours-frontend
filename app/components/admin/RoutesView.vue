<template>
  <div class="space-y-4">
    <UButton to="/admin/routes/create" icon="i-lucide-plus">Добавить маршрут</UButton>
    <UTable :data="TEST_DATA" :columns="COLUMNS" />
  </div>
</template>

<script lang="ts" setup>
import type {TableColumn} from "#ui/components/Table.vue";
import type { Row } from '@tanstack/vue-table'
import type {IRoute} from "~/types/routes";

const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const TEST_DATA: IRoute[] = [
  {
    "id": 1,
    "duration": 10,
    "start_location": "Ижевск",
    "updated_at": "2000-01-01T00:00:00.000000Z",
    "created_at": "2000-01-01T00:00:00.000000Z"
  }
]
const COLUMNS: TableColumn<IRoute>[] = [
  {
    accessorKey: 'id',
    header: '№'
  },
  {
    accessorKey: 'start_location',
    header: 'Точка начала'
  },
  {
    accessorKey: 'duration',
    header: 'Длительность',
    cell: ({ row }) => `${row.original.duration} дн.`
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-right' },
        h(
          UDropdownMenu,
          {
            content: {
              align: 'end'
            },
            items: getRowItems(row),
            'aria-label': 'Actions dropdown'
          },
          () =>
            h(UButton, {
              icon: 'i-lucide-ellipsis-vertical',
              color: 'neutral',
              variant: 'ghost',
              class: 'ml-auto',
              'aria-label': 'Actions dropdown'
            })
        )
      )
    }
  }
]

const router = useRouter()

function getRowItems(row: Row<IRoute>) {
  return [
    {
      type: 'label',
      label: 'Действия'
    },
    {
      label: 'Редактировать',
      onSelect() {
        const id = row.original.id

        router.push({
          name: 'admin-routes-edit-id',
          params: {
            id
          }
        })
      }
    },
    {
      type: 'separator'
    },
    {
      label: 'View customer'
    },
    {
      label: 'View payment details'
    }
  ]
}
</script>

<style lang="scss" scoped>

</style>