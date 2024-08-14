<template>
  <div class="h-screen space-y-6 pb-12">
    <Search />
    <div v-if="items" class="space-y-4">
      <ItemGrid />
    </div>
  </div>
</template>

<script setup lang="ts">
  const { items } = useSearch();
</script>

<style scoped></style>
