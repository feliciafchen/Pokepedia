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
import styles from "./App.css";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [saved, setSaved] = useState([]);
  const imageId = searchText;

  async function getPokemon() {
    const response = await fetch(
      `https://api.tcgdex.net/v2/en/cards/?image=h&name=${imageId}`,
      requestOptions
    );
    const data = await response.json();
    const pokemonData = data.splice(0, 30);
    setPokemon(pokemonData);
  }
  getPokemon();

  function savePokemon(pokemonToSave) {
    setSaved([...saved, pokemonToSave]);
  }

  return (
    <div className="App">
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: "1px solid lightgray" }}
        img
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            style={{ fontFamily: "Pokemon Solid" }}
          >
            Poképedia
          </Typography>
          <Button
            href="#"
            variant="outlined"
            sx={{ my: 1, mx: 1.5 }}
            onClick={() => {}}
          >
            Your Deck
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md" sx={{ my: 4 }}>
        <Typography
          variant="h2"
          align="center"
          color="text.primary"
          sx={{ py: 2 }}
          style={{ fontFamily: "Pokemon Hollow", fontSize: 75 }}
        >
          Poképedia
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
          label="name"
          variant="outlined"
          value={searchText}
          onChange={(event) => {
            const newValue = event.target.value.toLowerCase();
            setSearchText(newValue);
          }}
        />
      </Container>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          justifyContent="center"
          alignItems="flex-start"
        >
          {/* {saved?.map((p) => (
            <Grid item xs={12} md={4} key={p.id}>
              <PokemonCard name={p.name} img={p.image + "/high.png"} />
            </Grid>
          ))} */}
          {/* <Modal></Modal> */}
          {pokemon?.map((p) => (
            <Grid item xs={12} md={4} key={p.id} onClick={() => {}}>
              <PokemonCard
                name={p.name}
                pokeID={p.id}
                img={p.image + "/high.png"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
