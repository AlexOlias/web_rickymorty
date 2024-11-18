<template>
    <div>
      <h1>{{ episode.name }}</h1>
      <p>Air date: {{ episode.air_date }}</p>
      <EpisodeDetails :characters="characters" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import EpisodeDetails from '@/components/EpisodeDetails.vue';
  
  export default {
    components: { EpisodeDetails },
    data() {
      return {
        episode: {},
        characters: [],
      };
    },
    async created() {
      const episodeId = this.$route.params.id;
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeId}`);
      this.episode = response.data;
  
      // Fetch all character data
      const characterRequests = this.episode.characters.map((url) => axios.get(url));
      const charactersResponses = await Promise.all(characterRequests);
      this.characters = charactersResponses.map((res) => res.data);
    },
  };
  </script>
  