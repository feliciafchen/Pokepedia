import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";

export default function PokemonCard({ img }) {
  return (
    <Card
      raised
      sx={{
        maxWidth: 250,
        margin: "0 auto",
      }}
    >
      <CardMedia
        component="img"
        height="350"
        image={img}
        alt={"alt"}
        sx={{ objectFit: "fill" }}
      />
    </Card>
  );
}
