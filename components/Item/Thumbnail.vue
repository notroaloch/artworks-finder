<template>
  <div class="h-full w-full overflow-clip">
    <NuxtImg
      ref="htmlRefOnMouseUp"
      :src="item.artworkUrl300"
      width="300"
      height="300"
      class="disable-ios-haptic-touch h-full w-full select-none"
      loading="lazy"
      draggable="false"
      @contextmenu="disableDefaultContextMenu"
      @click="isDetailsCardOpen = true"
    />
    <!-- Item Deatils Modal -->
    <UModal v-model="isDetailsCardOpen">
      <ItemDetailsCard :item="item" />
    </UModal>
  </div>
</template>

<script setup lang="ts">
  const props = defineProps<{
    item: iTunesItem;
  }>();

  const htmlRefOnMouseUp = ref<HTMLElement | null>(null);

  const { item } = toRefs(props);
  const isDetailsCardOpen = ref(false);

  // Disable default context menu on right click
  const disableDefaultContextMenu = (event: MouseEvent) => {
    event.preventDefault();
  };
</script>

<style scoped>
  /* Disable iOS long press context menu */
  .disable-ios-haptic-touch {
    -webkit-touch-callout: none;
  }
</style>
