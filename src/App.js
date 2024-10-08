import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage";
import NavBar from './components/navBar';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material';

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
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </ThemeProvider>

  </>
  );
};

export default App;
