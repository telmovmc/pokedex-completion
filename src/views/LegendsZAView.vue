<template>
  <div>Legends: Z-A</div>
  <pokemon-box :pokemons="pokemons" box-name="Box 1" />
</template>

<script setup lang="ts">
import PokemonBox from '@/components/PokemonBox/PokemonBox.vue'
import type { Pokemon } from '@/types'

const pokemons: Pokemon[] = [
  {
    name: 'chicorita',
    image: 'https://www.serebii.net/Shiny/ZA/152.png',
    serebii: 'https://www.serebii.net/pokedex-sv/chikorita/',
    pokedexNumber: '1',
    number: 1,
    caught: false,
  },
  {
    name: 'bayleef',
    image: 'https://www.serebii.net/Shiny/ZA/153.png',
    serebii: 'https://www.serebii.net/pokedex-sv/bayleef/',
    pokedexNumber: '2',
    number: 2,
    caught: false,
  },
  {
    name: 'meganium',
    image: 'https://www.serebii.net/Shiny/ZA/154.png',
    serebii: 'https://www.serebii.net/pokedex-sv/meganium/',
    pokedexNumber: '3',
    number: 3,
    caught: true,
  },
]
</script>
