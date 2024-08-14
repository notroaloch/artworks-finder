<template>
  <!-- Search Form -->
  <UForm
    :state="formState"
    :schema="searchSchema"
    class="flex flex-col items-start gap-3 md:flex-row"
    @submit="onSubmit"
  >
    <!-- Search Input -->
    <UFormGroup name="query" class="w-full md:w-3/4 lg:w-5/6">
      <UInput
        size="xl"
        name="query"
        v-model="formState.query"
        class="flex-1"
        placeholder="Buscar ..."
        autocomplete="off"
        :ui="{ icon: { trailing: { pointer: '' } } }"
      >
        <!-- Search Config Button -->
        <template #trailing>
          <UButton
            size="xl"
            color="gray"
            variant="link"
            icon="icon-park-outline:find"
            :padded="false"
            @click="isConfigOpen = true"
          />
        </template>
      </UInput>
    </UFormGroup>

    <!-- Form Submit -->
    <UButton
      size="xl"
      type="submit"
      color="primary"
      variant="solid"
      label="Buscar"
      class="w-full md:w-1/4 lg:w-1/6"
      :loading="isLoadingItems"
      block
    />

    <!-- Search Config Modal -->
    <UModal v-model="isConfigOpen">
      <SearchConfig />
    </UModal>
  </UForm>
</template>

<script setup lang="ts">
  import { searchSchema } from '@/utils/zod-schemas';

  const isConfigOpen = ref(false);
  const { isLoadingItems, currentEntity, currentMarket, handleSearch } =
    useSearch();

  const formState = reactive({
    query: undefined,
  });

  const onSubmit = async () => {
    await handleSearch({
      query: formState.query!,
      entity: currentEntity.value.id,
      market: currentMarket.value.id,
    });
  };
</script>

<style scoped></style>
