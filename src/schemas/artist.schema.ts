export interface SimilarArtists {
  similarartists: Artist[];
}

export interface Artist {
  name: string;
  listeners: string;
  mbid: string;
  url: string;
}

export interface Bio {
  summary: string;
  content: string;
}

export interface ArtistBio {
  bio: Bio[];
}
