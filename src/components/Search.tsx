import React, { useState, FormEvent } from "react";
import { Artist } from "../schemas/artist.schema";
import { fetchSimilarArtists } from "../services/LastFMService/LastFMService";
import { ArtistWidget } from "../components/ArtistWidget";

export const Search: React.FC = () => {
  const [relevantArtist, setRelevantArtist] = useState<Artist[]>();
  const [searchArtist, setSearchArtist] = React.useState("");

  const handleChange = (event) => {
    setSearchArtist(event.target.value);
  };

  const findFavoriteArtist = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    fetchSimilarArtists(searchArtist).then((response) => {
      const results = response.similarartists.artist;
      setRelevantArtist(results);
    });
  };

  return (
    <div>
      <form onSubmit={findFavoriteArtist}>
        <input
          type="text"
          placeholder="Search"
          value={searchArtist}
          onChange={handleChange}
        />
        <button>Find Favorite Artist</button>
      </form>
      {relevantArtist &&
        relevantArtist.map((artist, index) => (
          <ArtistWidget name={artist.name} key={index} />
        ))}
    </div>
  );
};
