import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { TextField, Button, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      height: "100%",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      width: "33%",
      margin: "0 auto",
    },
    link: {
      textDecoration: "none",
    },
    button: {
      width: "100%",
      marginTop: "20px",
      padding: "15px 0",
    },
  })
);

export const ArtistSearch: React.FC = () => {
  const classes = useStyles();
  const [searchArtist, setSearchArtist] = useState("");

  const handleChange = (event) => {
    setSearchArtist(event.target.value);
  };

  return (
    <Grid container alignItems="center" className={classes.container}>
      <form className={classes.form} data-testid="artist:search">
        <TextField
          id="outlined-number"
          label="Search Favorite Artist"
          type="text"
          value={searchArtist}
          onChange={handleChange}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          required
        />
        <Link
          to={{
            pathname: `/similar-artists/`,
            search: `?q=${searchArtist}`,
            state: {
              name: searchArtist,
            },
          }}
          className={classes.link}
          data-testid="artist:search:link"
        >
          <Button
            className={classes.button}
            variant="contained"
            disabled={!searchArtist}
          >
            Go
          </Button>
        </Link>
      </form>
    </Grid>
  );
};
