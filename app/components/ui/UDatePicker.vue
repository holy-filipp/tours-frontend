<template>
  <UFieldGroup>
    <UInput v-model="dateString" v-maska="'##.##.####'" :class="$attrs.class" class="w-full" placeholder="дд.мм.гггг" @input="updateDate" />
    <UPopover>
      <UButton icon="i-lucide-calendar" @click="isOpened = !isOpened" />
      <template #content>
        <UCalendar v-model="model" />
      </template>
    </UPopover>
  </UFieldGroup>
</template>

<script lang="ts" setup>
import { parseDate, DateFormatter, type CalendarDate } from '@internationalized/date'
import { vMaska } from 'maska/vue'

const modelWrapper = defineModel<Date>()
const model = ref<CalendarDate>()
const dateString = ref<string>()
const df = new DateFormatter('ru-RU', {
  day: '2-digit',
  month: '2-digit',
  year: 'numeric'
})
const isOpened = ref<boolean>(false)

const updateDate = (event: Event) => {
  const e = event.target as HTMLInputElement
  const value = e.value

  if (!value) return;

  if (dateString.value == value) return;

  const [day, month, year] = value.split('.')
  try {
    model.value = parseDate(`${year}-${month}-${day}`)
  } catch {
    return false
  }
}

watch(model, (value) => {
  if (!value) return

  const jsDate = value.toDate('UTC')
  dateString.value = df.format(jsDate)

  // Wrapper

  modelWrapper.value = jsDate
})
</script>

<style lang="scss" scoped>

</style>