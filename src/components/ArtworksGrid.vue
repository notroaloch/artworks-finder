<template>
	<div
		v-if="artworks.length > 0"
		class="mt-10 grid grid-cols-1 gap-y-5 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4"
	>
		<ArtworkCard
			v-for="artwork in artworks"
			:key="artwork.collectionId"
			:artwork="artwork"
		/>
	</div>
	<div v-else class="w-full mt-9 lg:mt-12">
		<h1 class="text-2xl text-gray-500 text-center">
			{{ $t('messageEmptyList') }}
		</h1>
	</div>
</template>

<script>
import ArtworkCard from './ArtworkCard.vue';
export default {
	name: 'ArtworksGrid',
	props: {
		artworks: {
			type: Array,
			required: true,
		},
	},
	components: {
		ArtworkCard,
	},
};
</script>
