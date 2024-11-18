import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles.css';
import '@splidejs/splide/dist/css/splide.min.css';

createApp(App).use(router).mount('#app');
