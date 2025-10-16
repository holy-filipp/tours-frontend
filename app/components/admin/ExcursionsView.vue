<template>
  <UTable :data="TEST_DATA" :columns="COLUMNS" :get-sub-rows="(row) => row.points" />
</template>

<script lang="ts" setup>
import type {FullExcursion} from "~/types/excursions";
import type {TableColumn} from "#ui/components/Table.vue";

const TEST_DATA: FullExcursion[] = [
  {
    "route": {
      "start_location": "Ижевск",
      "duration": 10,
      "updated_at": "2000-01-01T00:00:00.000000Z",
      "created_at": "2000-01-01T00:00:00.000000Z",
      "id": 1
    },
    "trip": {
      "starts_at": "2000-01-01 08:00",
      "capacity": 5,
      "min_age": 16,
      "price": 9999,
      "route_id": 1,
      "updated_at": "2000-01-01T00:00:00.000000Z",
      "created_at": "2000-01-01T00:00:00.000000Z",
      "id": 1
    },
    "points": [
      {
        "file_name": "points/pCobXrHQoHbiI2JDiWMJj8zVKLEu26qFIMogpwcD.jpg",
        "description": "Описание точки",
        "day_of_the_route": 1,
        "name": "Название точки",
        "updated_at": "2000-01-01T00:00:00.000000Z",
        "created_at": "2000-01-01T00:00:00.000000Z",
        "pivot": {
          "route_id": 2,
          "point_id": 2,
          "day_of_the_route": 1
        }
      }
    ]
  }
]
const COLUMNS: TableColumn<FullExcursion>[] = [
  {
    accessorKey: 'route.start_location',
    header: 'Точка начала',
  },
  {
    accessorKey: 'route.duration',
    header: 'Длительность',
    cell: ({ row }) => {
      return `${row.original.route.duration} дн.`
    }
  },

]
</script>

<style lang="scss" scoped>

</style>