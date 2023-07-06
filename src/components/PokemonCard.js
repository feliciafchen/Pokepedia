import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Grid from "@mui/material/Grid";

export default function PokemonCard({ img, pokeId }) {
  return (
    <Grid item xs={12} md={4} key={pokeId} onClick={() => {}}>
      <Card
        raised
        sx={{
          maxWidth: 300,
          margin: "0 auto",
        }}
      >
        <CardMedia
          component="img"
          height="400"
          image={img}
          alt={"alt"}
          sx={{ objectFit: "fill" }}
        />
      </Card>
    </Grid>
  );
}
