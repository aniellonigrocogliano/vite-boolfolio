import { createApp } from 'vue';
import './style/general.scss'; // Assicurati di avere il file SCSS nella giusta posizione
import App from './App.vue';
import {router} from './router';

const app = createApp(App);

app.use(router).mount('#app');