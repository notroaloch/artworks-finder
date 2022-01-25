<template>
	<div
		class="shadow-md rounded-md overflow-hidden dark:border dark:border-gray-800"
	>
		<a :href="artwork.artworkUrlHiRes" target="_blank">
			<img
				:src="artwork.artworkUrl600"
				:alt="artwork.collectionName"
				class="h-auto w-full cursor-pointer"
			/>
		</a>
		<div class="p-4">
			<a :href="artwork.collectionViewUrl" target="_blank">
				<h1
					class="text-left text-xl hover:text-purple-600 hover:cursor-pointer"
				>
					{{ artwork.collectionName }}
				</h1>
			</a>
			<a :href="artwork.artistViewUrl" target="_blank">
				<h3
					class="text-left text-md hover:text-purple-600 hover:cursor-pointer"
				>
					{{ artwork.artistName }}
				</h3>
			</a>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ArtworkCard',
	props: {
		artwork: {
			type: Object,
			required: true,
		},
	},
};
</script>

<style></style>
