import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PokemonCard from "./components/PokemonCard";
import TextField from "@mui/material/TextField";
import { useState } from "react";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");

  async function getPokemon() {
    const imageId = searchText;
    const response = await fetch(
      "https://api.tcgdex.net/v2/en/cards/?image=h&name=" + imageId,
      requestOptions
    );
    const data = await response.json();
    const pokemonData = data;
    setPokemon(pokemonData);
  }
  getPokemon();

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
      >
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Pokepedia
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {}}
          >
            Button
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
        >
          Pokepedia
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          sx={{ mx: 10 }}
        >
          the best pokemon card index ever
        </Typography>
        <TextField
          sx={{
            mt: "25px",
          }}
          fullWidth
          id="outlined-basic"
          label="ex: pikachu"
          variant="outlined"
          value={searchText}
          onChange={(event) => {
            const newValue = event.target.value;
            setSearchText(newValue);
          }}
        />
      </Container>
      {/* End hero unit */}
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          {pokemon?.slice(0, 30).map((p) => (
            <Grid item xs={12} md={4} key={p.name}>
              <PokemonCard
                name={p.name}
                img={p.image + "/high.png"}
                // descriptionArray={character.description}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
