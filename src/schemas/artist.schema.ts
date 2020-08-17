export interface SimilarArtists {
  similarartists: Artist[];
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
}

export interface ArtistData {
  bio: Bio;
  stats: Stats;
}

export interface Bio {
  summary: string;
  content: string;
}

export interface Stats {
  listeners: string;
  playcount: string;
}
