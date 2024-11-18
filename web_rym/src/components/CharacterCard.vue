<template>
    <div class="character-card">
      <img :src="character.image" :alt="character.name" />
      <h3>{{ character.name }}</h3>
      <p>Status: {{ character.status }}</p>
      <router-link :to="{ name: 'Character', params: { id: character.id } }">Ver más</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      character: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .character-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    max-width: 200px;
  }
  .character-card img {
    width: 100%;
    border-radius: 8px;
  }
  </style>
  