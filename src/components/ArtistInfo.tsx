import React, { useState, useEffect } from "react";
import { Bio } from "../schemas/artist.schema";
import { fetchArtistInfo } from "../services/LastFMService/LastFMService";
import { useLocation } from "react-router-dom";

export interface ArtistWidgetProps {
  props: object;
}

export const ArtistInfo: React.FC = () => {
  const [artistBio, setArtistBio] = useState<Bio>();
  let location = useLocation();

  useEffect(() => {
    fetchArtistInfo("test").then((response) => {
      const results = response.artist.bio;
      setArtistBio(results);
    });
  }, []);
  return (
    <div>
      {artistBio && (
        <div>
          <h3>{location.state.name}</h3>
          <p>{artistBio.content}</p>
        </div>
      )}
    </div>
  );
};
