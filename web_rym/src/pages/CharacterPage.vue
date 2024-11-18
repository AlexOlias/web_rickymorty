<template>
    <div>
      <h1>{{ character.name }}</h1>
      <img :src="character.image" :alt="character.name" />
      <p>Status: {{ character.status }}</p>
      <p>Species: {{ character.species }}</p>
      <p>Gender: {{ character.gender }}</p>
      <p>Origin: {{ character.origin.name }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        character: {},
      };
    },
    async created() {
      const characterId = this.$route.params.id;
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${characterId}`);
      this.character = response.data;
    },
  };
  </script>
  