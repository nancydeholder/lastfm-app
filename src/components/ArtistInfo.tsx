import React, { useState, useEffect } from "react";
import { Bio } from "../schemas/artist.schema";
import { fetchArtistInfo } from "../services/LastFMService/LastFMService";
import { useLocation } from "react-router-dom";
import { Container, Card, CardContent } from "@material-ui/core";

export interface ArtistWidgetProps {
  props: object;
}

export const ArtistInfo: React.FC = () => {
  const [artistBio, setArtistBio] = useState<Bio>();
  let location = useLocation();
  const selectedArtist = location.state.name;

  useEffect(() => {
    fetchArtistInfo(selectedArtist).then((response) => {
      const results = response.artist.bio;
      setArtistBio(results);
    });
  }, [selectedArtist]);

  return (
    <Container>
      <div>
        {artistBio && (
          <Card>
            <CardContent>
              <h3>{selectedArtist}</h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: artistBio.content
                    ? artistBio.content
                    : "Sorry, no bio found on this artist",
                }}
              ></div>
            </CardContent>
          </Card>
        )}
      </div>
    </Container>
  );
};
