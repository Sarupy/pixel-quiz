import { createTheme, ThemeProvider } from '@mui/material';

// const simplifyChampionName = (name) => name.replaceAll(" ", "").replaceAll("'", "").replaceAll(".", "");

const App = () => {

  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#ddd', // Defina sua cor primária aqui
      },
      secondary: {
        main: '#00ccd4', // Você pode definir uma cor secundária também
      },
      background: {
        default: '#aaa', // Cor de fundo padrão
        paper: '#004A35', // Cor de fundo para componentes como Paper
      },
    },
  });

  return (
    <>
    <ThemeProvider theme={theme}>
      <h1>Oi</h1>
    {/* <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          
        </Route>
      </Routes>
    </BrowserRouter> */}
    </ThemeProvider>

  </>
  );
};

export default App;
