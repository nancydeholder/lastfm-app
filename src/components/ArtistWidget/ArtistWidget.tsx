import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Artist } from "../../schemas/artist.schema";
import { fetchSimilarArtists } from "../../services/LastFMService/LastFMService";
import {
  Card,
  CardContent,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface ArtistWidgetProps {
  name: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: "0 auto",
      cursor: "pointer",
    },
    artistContainer: {
      margin: "30px 0",
      borderBottom: "3px solid #000066",
      "&:hover": {
        opacity: "0.5",
      },
    },
    headline: {
      color: "#4a4a4a",
      margin: "30px 0",
    },
    link: {
      textDecoration: "none",
      color: "#009999",
      textTransform: "uppercase",
      letterSpacing: "0.09em",
    },
  })
);

export const ArtistWidget: React.FC = () => {
  const classes = useStyles();
  let location = useLocation();
  const artistSearch = location.state.name;
  const [relevantArtist, setRelevantArtist] = useState<Artist[]>();

  useEffect(() => {
    fetchSimilarArtists(artistSearch).then((response) => {
      const results = response.similarartists.artist;
      setRelevantArtist(results);
    });
  }, [artistSearch]);

  return (
    <Container>
      <Typography align="center" className={classes.headline} variant="h3">
        Artists similar to {artistSearch}
      </Typography>
      <div className={classes.container}>
        <Grid container spacing={3}>
          {relevantArtist &&
            relevantArtist.map((artist, index) => (
              <Grid item xs={4}>
                <Card className={classes.artistContainer} key={index}>
                  <CardContent>
                    <Link
                      to={{
                        pathname: `/artist/${artist.name}`,
                        state: {
                          name: artist.name,
                        },
                      }}
                      className={classes.link}
                    >
                      <Typography variant="h5">{artist.name}</Typography>
                    </Link>
                  </CardContent>
                </Card>
              </Grid>
            ))}
        </Grid>
      </div>
    </Container>
  );
};
