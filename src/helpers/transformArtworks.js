const transformArtworks = (artworks) => {
	return artworks.map((artwork) => {
		return {
			...artwork,
			artworkUrl600: artwork.artworkUrl100.replace('100x100', '600x600'),
			artworkUrlHiRes: artwork.artworkUrl100.replace(
				'100x100bb',
				'100000x100000-999'
			),
		};
	});
};

export default transformArtworks;
