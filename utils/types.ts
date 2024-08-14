export type Market = {
  id: string;
  label: string;
  icon?: string;
};

export type Entity = Market;

export type Search = {
  query: string;
  entity?: Entity;
  market?: Market;
  limit?: number;
  offset?: number;
};

export type iTunesResponse = {
  resultCount: number;
  results: iTunesItem[];
};

export type iTunesItem = {
  wrapperType: string;
  collectionType: string;
  artistId: number;
  collectionId: number;
  amgArtistId?: number;
  artistName: string;
  collectionName: string;
  collectionCensoredName: string;
  artistViewUrl: string;
  collectionViewUrl: string;
  artworkUrl60: string;
  artworkUrl100: string;
  artworkUrl300: string;
  artworkUrl600: string;
  artworkUrlHiRes: string;
  collectionPrice: number;
  collectionExplicitness: string;
  contentAdvisoryRating?: string;
  trackCount: number;
  copyright: string;
  country: string;
  currency: string;
  releaseDate: string;
  primaryGenreName: string;
};
