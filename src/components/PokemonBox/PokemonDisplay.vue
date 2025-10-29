<template>
  <div :class="classes" @click.stop.prevent="onClick">
    <img :src="props.pokemon?.image" />
  </div>
</template>

<script setup lang="ts">
// Types
import type { Pokemon } from '@/types'

// Utils
import { computed } from 'vue'

const props = defineProps<{
  pokemon?: Pokemon
}>()

const emit = defineEmits<{
  (e: 'click', pkNumber: number): void
}>()

const classes = computed(() => [
  'pokemon-display',
  {
    'pokemon-display__not-caught': !props.pokemon?.caught,
  },
])

function onClick() {
  emit('click', props.pokemon?.number || 0)
}
</script>
