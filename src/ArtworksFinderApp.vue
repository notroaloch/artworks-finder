<template>
	<SearchPage class="w-2/3 dark:bg-gray-900 dark:text-white select-none" />
</template>

<script>
import SearchPage from './pages/SearchPage.vue';

export default {
	name: 'ArtworksFinderApp',
	components: {
		SearchPage,
	},
};
</script>

<style>
#app {
	@apply h-screen overflow-y-scroll pb-10;
}

::-webkit-scrollbar {
	@apply w-0;
}
</style>
