<template>
  <div
    class="grid grid-cols-3 gap-0 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-5"
  >
    <ItemThumbnail
      v-for="item in items"
      :key="item.collectionId"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
  const { items } = useSearch();
</script>

<style scoped></style>
