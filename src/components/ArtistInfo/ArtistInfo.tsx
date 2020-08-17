import React, { useState, useEffect } from "react";
import { ArtistData } from "../../schemas/artist.schema";
import { fetchArtistInfo } from "../../services/LastFMService/LastFMService";
import { useLocation } from "react-router-dom";
import {
  Container,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export interface ArtistWidgetProps {
  props: object;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: "flex",
      alignItems: "center",
      height: "100%",
    },
    cardContainer: {
      backgroundColor: "#efefef",
      padding: "50px 40px",
    },
    statBox: {
      padding: "15px 40px",
      margin: "20px 0",
      textAlign: "center",
    },
  })
);

export const ArtistInfo: React.FC = () => {
  const classes = useStyles();
  const [artistBio, setArtistBio] = useState<ArtistData>();
  let location = useLocation();
  const selectedArtist = location.state.name;

  useEffect(() => {
    fetchArtistInfo(selectedArtist).then((response) => {
      const results = response.artist;
      setArtistBio(results);
    });
  }, [selectedArtist]);

  return (
    <Container className={classes.mainContainer}>
      <div>
        {artistBio && (
          <Card>
            <CardContent className={classes.cardContainer}>
              <Typography variant="h3">{selectedArtist}</Typography>
              <Grid container spacing={3}>
                <Grid item>
                  <Paper className={classes.statBox}>
                    <Typography variant="subtitle1">Listeners</Typography>
                    <span>{artistBio.stats.listeners}</span>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.statBox}>
                    <Typography variant="subtitle1">Scrobbles</Typography>
                    <span>{artistBio.stats.playcount}</span>
                  </Paper>
                </Grid>
              </Grid>
              <div
                dangerouslySetInnerHTML={{
                  __html: artistBio.bio.content
                    ? artistBio.bio.content
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
