import { useStorage } from '@vueuse/core';

export const useSearchStore = defineStore('search', () => {
  // Market
  const markets = ref<Market[]>(marketDB);
  const currentMarket = useStorage<Market>('user-preference-market', {
    id: 'mx',
    label: 'Mexico',
    icon: 'circle-flags:mx',
  });

  // Entity
  const entities = ref<Entity[]>(entityDB);
  const currentEntity = useStorage<Entity>('user-preference-entity', {
    id: 'album',
    label: 'Album',
    icon: 'icon-park-outline:folder-music-one',
  });

  // Search
  const items = ref<iTunesItem[]>();

  return { markets, currentMarket, entities, currentEntity, items };
});
