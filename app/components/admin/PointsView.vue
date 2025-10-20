<template>
  <div class="space-y-4">
    <UButton to="/admin/points/create" icon="i-lucide-plus">Добавить точку</UButton>
    <UTable v-model:expanded="expanded" :data="TEST_DATA" :columns="COLUMNS">
      <template #expanded="{ row }">
        <img class="h-64" src="/pCobXrHQoHbiI2JDiWMJj8zVKLEu26qFIMogpwcD.jpg" alt="Point image">
      </template>
    </UTable>
  </div>
</template>

<script lang="ts" setup>
import type {TableColumn} from "#ui/components/Table.vue";
import type { Row } from '@tanstack/vue-table'
import type {IPoint} from "~/types/points";

const UButton = resolveComponent('UButton')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const TEST_DATA: IPoint[] = [
  {
    "id": 1,
    "name": "Тестовая точка",
    "description": "Тестовое описание",
    "file_name": "points/pCobXrHQoHbiI2JDiWMJj8zVKLEu26qFIMogpwcD.jpg",
    "updated_at": "2000-01-01T00:00:00.000000Z",
    "created_at": "2000-01-01T00:00:00.000000Z"
  }
]
const COLUMNS: TableColumn<IPoint>[] = [
  {
    id: 'expand',
    cell: ({ row }) =>
      h(UButton, {
        color: 'neutral',
        variant: 'ghost',
        icon: 'i-lucide-chevron-down',
        square: true,
        'aria-label': 'Expand',
        ui: {
          leadingIcon: [
            'transition-transform',
            row.getIsExpanded() ? 'duration-200 rotate-180' : ''
          ]
        },
        onClick: () => row.toggleExpanded()
      })
  },
  {
    accessorKey: 'id',
    header: '№'
  },
  {
    accessorKey: 'name',
    header: 'Название',
  },
  {
    accessorKey: 'description',
    header: 'Описание',
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

const expanded = ref<Record<number, boolean>>({})
const router = useRouter()

function getRowItems(row: Row<IPoint>) {
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
          name: 'admin-points-edit-id',
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