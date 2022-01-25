import { createApp } from 'vue';
import i18n from './i18n';
import './index.css';

import ArtworksFinderApp from './ArtworksFinderApp.vue';

createApp(ArtworksFinderApp).use(i18n).mount('#app');
