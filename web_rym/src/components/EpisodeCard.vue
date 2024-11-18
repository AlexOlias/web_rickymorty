<template>
    <div class="episode-card">
      <h3>{{ episode.name }}</h3>
      <p>Air date: {{ episode.air_date }}</p>
      <router-link :to="{ name: 'Episode', params: { id: episode.id } }">Detalles</router-link>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      episode: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .episode-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 16px;
    margin-bottom: 16px;
  }
  </style>
  