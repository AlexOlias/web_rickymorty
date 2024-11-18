<template>
    <div>
      <h1>Rick and Morty Episodes</h1>
      <div v-if="episodes.length">
        <EpisodeCard v-for="episode in episodes" :key="episode.id" :episode="episode" />
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import EpisodeCard from '@/components/EpisodeCard.vue';
  
  export default {
    components: { EpisodeCard },
    data() {
      return {
        episodes: [],
      };
    },
    async created() {
      const response = await axios.get('https://rickandmortyapi.com/api/episode');
      this.episodes = response.data.results;
    },
  };
  </script>
  
  <style>
 
  </style>
  