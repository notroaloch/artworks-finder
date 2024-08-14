export const useSearch = () => {
  const searchStore = useSearchStore();
  const {
    markets: mkts,
    currentMarket,
    entities,
    currentEntity,
    items,
  } = storeToRefs(searchStore);

  const isLoadingItems = ref(false);

  // Markets with Icon
  const markets = computed((): Market[] => {
    return mkts.value.map((market) => {
      return {
        id: market.id,
        label: market.label,
        icon: `circle-flags:${market.id}`,
      };
    });
  });

  const reset = () => {
    items.value = undefined;
  };

  const handleSearch = async ({
    query,
    entity,
    market,
  }: {
    query: string;
    entity: string;
    market: string;
  }) => {
    isLoadingItems.value = true;

    const data = await $fetch<iTunesItem[]>('/api/search', {
      method: 'POST',
      body: {
        query,
        entity,
        market,
      },
    });

    items.value = data;
    isLoadingItems.value = false;

    return items.value;
  };

  return {
    markets,
    currentMarket,
    entities,
    currentEntity,
    items,
    isLoadingItems,
    handleSearch,
    reset,
  };
};
