<template>
  <UCard>
    <!-- Item Image -->
    <NuxtImg
      :src="item.artworkUrl600"
      :placeholder="item.artworkUrl300"
      width="1000"
      height="1000"
      quality="100"
      loading="lazy"
      class="pointer-events-none h-full w-full select-none rounded-lg"
    />
    <template #footer>
      <div class="flex flex-col gap-3">
        <UButton
          size="xl"
          color="gray"
          variant="solid"
          block
          @click="handleNavigate"
          >Abrir en otra pestaña</UButton
        >
        <UButton
          size="xl"
          color="primary"
          variant="solid"
          block
          @click="handleCopyToClipboard"
          >Copiar URL de imagen</UButton
        >
      </div>
    </template>
  </UCard>
</template>

<script setup lang="ts">
  const props = defineProps<{
    item: iTunesItem;
  }>();

  const { item } = toRefs(props);
  const { copy } = useClipboard({ legacy: true });
  const toast = useToast();

  const handleNavigate = async () => {
    await navigateTo(item.value.artworkUrlHiRes, {
      open: {
        target: '_blank',
      },
      external: true,
    });
  };

  const handleCopyToClipboard = () => {
    copy(item.value.artworkUrlHiRes);
    toast.add({
      id: `${item.value.collectionId}`,
      title: 'Copiado al portapapeles',
      description: `URL de ${item.value.collectionName}`,
      color: 'primary',
      icon: 'icon-park-outline:clipboard',
    });
  };
</script>

<style scoped></style>
