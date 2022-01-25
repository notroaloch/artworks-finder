<template>
	<div class="flex flex-col mx-auto">
		<CustomSelectors :availableLanguages="availableLanguages" />
		<SearchBar @submit="searchArtworks" :loading="loading" />
		<ArtworksGrid :artworks="artworks" />
	</div>
</template>

<script>
import CustomSelectors from '../components/CustomSelectors.vue';
import SearchBar from '../components/SearchBar.vue';
import ArtworksGrid from '../components/ArtworksGrid.vue';

import { availableLanguages } from '../i18n/index';
import transformArtworks from '../helpers/transformArtworks';

import itunesAPI from '../api';

export default {
	name: 'SearchPage',
	components: {
		CustomSelectors,
		ArtworksGrid,
		SearchBar,
	},
	data() {
		return {
			availableLanguages,
			artworks: [],
			loading: false,
		};
	},
	methods: {
		async searchArtworks({ term, country }) {
			this.loading = true;

			const data = await itunesAPI
				.post('/search', null, {
					params: {
						term,
						country,
						entity: 'album',
					},
				})
				.then((res) => res.data.results);

			this.artworks = transformArtworks(data);

			this.loading = false;
		},
	},
};
</script>
