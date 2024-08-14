export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { query, market, entity } = body;

  const { data } = await itunesAPI.get<iTunesResponse>('/search', {
    params: {
      term: query,
      country: market,
      entity,
      limit: 100,
    },
  });

  const items = data.results.map((item) => {
    return {
      ...item,
      artworkUrl300: item.artworkUrl100.replace('100x100', '300x300'),
      artworkUrl600: item.artworkUrl100.replace('100x100', '600x600'),
      artworkUrlHiRes: item.artworkUrl100.replace(
        '100x100bb',
        '100000x100000-999'
      ),
    };
  });

  return items;
});
