<template>
	<div class="flex flex-col mx-auto">
		<CustomSelectors :availableLanguages="availableLanguages" />
		<SearchBar @submit="searchArtworks" :loading="loading" />
		<ArtworksGrid :artworks="artworks" />
		<div v-if="artworks.length > 0" class="mx-auto mt-10">
			<button class="text-purple-600 hover:scale-110" @click="searchArtworks({term, country})">
				{{ $t('buttonLoadMore') }}
			</button>
		</div>
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
			term: '',
			country: '',
		    lastArtwork: 0,
		};
	},
	methods: {
		async searchArtworks({ term, country }) {

			this.loading = true;
			this.term = term;
			this.country = country;

			const data = await itunesAPI
				.post('/search', null, {
					params: {
						term: this.term,
						country: this.country,
						entity: 'album',
						limit: 24,
						offset: this.lastArtwork
					},
				})
				.then((res) => res.data.results);

			this.artworks = [...this.artworks, ...transformArtworks(data)];
			this.lastArtwork = this.lastArtwork + this.artworks.length;

			this.loading = false;
		},
	},
};
</script>
