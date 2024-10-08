import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { CHAMPIONS } from '../consts';
import {  Autocomplete, Container,  Grid2, TextField, ThemeProvider } from '@mui/material';
import ImageDrawer from '../imageDrawer';
import '..'
import CountdownToMidnight from '../components/midnightCountdown';

const simplifyChampionName = (name) => name.replaceAll(" ", "").replaceAll("'", "").replaceAll(".", "");

export default function Home() {

  const GUESSES = 9;
  const [guesses, setGuesses] = useState([]);
  const pixelSize = [12,11,10,9,8,7,6,5,4];

  useEffect(() => {
    const guessesGenerated = [];
    while (guessesGenerated.length < GUESSES) {
      const championName = simplifyChampionName(CHAMPIONS[Math.floor(Math.random() * CHAMPIONS.length)]);
      if (!guessesGenerated.some(x => x.champion === championName)) {
        guessesGenerated.push({ champion: championName});
      }
    }
    setGuesses(guessesGenerated)
  }, []);

  const renderGuess = (guess, index) => {
    const championImage = require(`../resources/${guess.champion}.png`);
    return (
      <Grid2
        key={index}
        display="flex"
        flexDirection={"column"}
        justifyContent="center"
        alignItems="center"
        size={{ xs: 12, sm: 6, md:4 }}
      >
        <ImageDrawer src={championImage} pixelCount={pixelSize[index]} grayscale={index} />
        {guess.guess && guess.show ? guess.champion == guess.guess? "✅" : "🚫" : "❓"}
        
        <Autocomplete
          disablePortal
          disabled={guess.show}
          options={CHAMPIONS}
          sx={{ width: 175, }}
          renderInput={(params) => <TextField {...params} label="Escolha..." />}
          className='mb2 mt2 championInput'
          size='small'
          onChange={(event, newValue) => {
            setGuesses(prevGuesses => 
              prevGuesses.map((item, i) => 
                i === index ? { ...item, guess: newValue } : item
              )
            );
          }}
        />
        <div>
          <Button 
            variant="contained" 
            className='championInput'
            disabled={guess.show}
            onClick={ () => 
              {setGuesses(prevGuesses => 
                prevGuesses.map((item, i) => 
                  i === index ? { ...item, show: true } : item
                )
              )}
            }
            >Confirmar</Button>
        </div>
      </Grid2> 
    )
  }

  return (
    <>
        <Container maxWidth="xl" className='mt3'>
            <h1 style={{textAlign: "center", color: "white"}} >Próximo Quiz em <CountdownToMidnight></CountdownToMidnight></h1>
            <Grid2 container rowSpacing={5} columnSpacing={1}>
                {guesses.map((guess, index) => (renderGuess(guess, index)))}
            </Grid2> 
        </Container>
    </>
  );
};
