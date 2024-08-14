<template>
  <div>
    <!-- Toggle View/Hide button -->
    <UButton
      size="xl"
      color="gray"
      variant="ghost"
      icon="icon-park-outline:config"
      square
      @click="isOpen = true"
    />

    <!-- User Preferences Drawer -->
    <USlideover v-model="isOpen">
      <div class="space-y-5 p-4">
        <!-- Title and Close Button -->
        <div class="flex items-center justify-between">
          <p class="font-poppins text-2xl font-semibold tracking-tight">
            Preferencias
          </p>
          <UButton
            size="xl"
            color="gray"
            variant="ghost"
            icon="icon-park-outline:close"
            square
            padded
            @click="isOpen = false"
          />
        </div>
        <div class="space-y-3">
          <!-- TODO: Implement Color Mode and Internalization -->
        </div>
      </div>
    </USlideover>
  </div>
</template>

<script setup lang="ts">
  const isOpen = ref(false);
</script>

<style scoped></style>
