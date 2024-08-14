<template>
  <UCard>
    <template #header>
      <p>Configuración de Búsqueda</p>
    </template>
    <div class="space-y-4 pb-4">
      <!-- Content Type Select -->
      <UFormGroup label="Tipo de Contenido">
        <USelectMenu size="xl" :options="entities" v-model="currentEntity">
          <template #leading>
            <UIcon :name="currentEntity.icon!" class="size-5" />
          </template>
        </USelectMenu>
      </UFormGroup>

      <!-- Country Select -->
      <UFormGroup label="País de Publicación">
        <USelectMenu
          size="xl"
          :options="markets"
          v-model="currentMarket"
          searchable-placeholder="Escribe para buscar..."
          searchable
        >
          <template #leading>
            <UIcon
              :name="
                currentMarket.icon
                  ? currentMarket.icon
                  : 'icon-park-outline:world'
              "
              class="size-5"
              dynamic
            />
          </template>
        </USelectMenu>
      </UFormGroup>
    </div>
  </UCard>
</template>

<script setup lang="ts">
  const { entities, currentEntity, markets, currentMarket } = useSearch();
</script>

<style scoped></style>
