<template>
  <div class="pokemon-box">
    <div class="pokemon-box--title">{{ props.boxName }}</div>
    <div class="pokemon-box--content">
      <div v-for="row in GRID_SIZE_ROW" :key="`row-${row}`" class="pokemon-box--row">
        <div v-for="col in GRID_SIZE_COL" :key="`col-${col}`" class="pokemon-box--col">
          <pokemon-display
            v-if="props.pokemons && props.pokemons[getBoxIndex(row, col) - 1]"
            :pokemon="props.pokemons[getBoxIndex(row, col) - 1]"
            @click="onClick"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Components
import PokemonDisplay from './PokemonDisplay.vue'

// Types
import type { Pokemon } from '@/types'

const GRID_SIZE_ROW: number = 5
const GRID_SIZE_COL: number = 6

function getBoxIndex(row: number, col: number) {
  return (row - 1) * GRID_SIZE_COL + col
}

const props = defineProps<{
  boxName: string
  pokemons?: Pokemon[]
}>()

function onClick(pkNumber: number) {
  console.log(pkNumber)
}
</script>
