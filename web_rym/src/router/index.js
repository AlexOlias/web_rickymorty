import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/home.vue';
import EpisodePage from '@/pages/EpisodePage.vue';
import CharacterPage from '@/pages/CharacterPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/episode/:id', name: 'Episode', component: EpisodePage },
  { path: '/character/:id', name: 'Character', component: CharacterPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
