<template>
    <div>
      <h2>Personajes</h2>
      <Splide>
        <SplideSlide v-for="character in characters" :key="character.id">
          <CharacterCard :character="character" />
        </SplideSlide>
      </Splide>
    </div>
  </template>
  
  <script>
  import { Splide, SplideSlide } from '@splidejs/vue-splide';
  import CharacterCard from './CharacterCard.vue';
  
  export default {
    components: { Splide, SplideSlide, CharacterCard },
    props: {
      characters: {
        type: Array,
        required: true,
      },
    },
  };
  </script>
  