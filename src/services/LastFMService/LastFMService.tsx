import axios from "axios";
import { SimilarArtists, ArtistBio } from "../../schemas/artist.schema";

const BASE_URL = `http://ws.audioscrobbler.com/2.0/`;
const API_KEY = `3e44b221241839d86d4a8ec6c027e0e2`;

export function fetchSimilarArtists(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get<SimilarArtists>(BASE_URL, {
        params: {
          method: `artist.getsimilar`,
          artist: query,
          api_key: API_KEY,
          format: `json`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
\
export function fetchArtistInfo(query: string): Promise<any> {
  return new Promise((resolve, reject) => {
    axios
      .get<ArtistBio>(BASE_URL, {
        params: {
          method: `artist.getinfo`,
          artist: query,
          api_key: API_KEY,
          format: `json`,
        },
      })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
