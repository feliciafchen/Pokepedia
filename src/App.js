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
import ToggleButton from "@mui/material/ToggleButton";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import styles from "./App.css";

var requestOptions = {
  method: "GET",
  redirect: "follow",
};

function App() {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [saved, setSaved] = useState([]);
  const [selected, setSelected] = useState(false);

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

  function deletePokemon(pokemonToSave) {
    setSaved([]);
  }

  function saveIconClicked(pokemonData, toggle) {
    if (toggle === true) savePokemon(pokemonData);
    else if (toggle === false) deletePokemon(pokemonData);
  }

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
          <Typography
            variant="h6"
            sx={{ flexGrow: 1 }}
            style={{ fontFamily: "Pokemon Solid" }}
          >
            Poképedia
          </Typography>
          <ToggleButton
            value="check"
            selected={selected}
            onChange={() => {
              setSelected(!selected);
            }}
          >
            <BookmarkBorderIcon />
          </ToggleButton>
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
          <img
            style={{ width: 65, height: 65 }}
            src={require("./assets/icons/pokeball.png")}
          ></img>
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
          label="pokemon name"
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
          {selected
            ? saved?.map((p) => (
                <Grid item xs={12} md={4} key={p.id}>
                  <PokemonCard
                    name={p.name}
                    image={p.image}
                    id={p.id}
                    saveToggle={saveIconClicked}
                  />
                </Grid>
              ))
            : pokemon?.map((p) => (
                <Grid item xs={12} md={4} key={p.id}>
                  <PokemonCard
                    name={p.name}
                    image={p.image + "/high.png"}
                    id={p.id}
                    saveToggle={saveIconClicked}
                  />
                </Grid>
              ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
