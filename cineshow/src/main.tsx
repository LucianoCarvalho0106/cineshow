import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home/Home';
import MovieSingle from './pages/MovieSingle/MovieSingle';
import FilmesPopulares from './pages/FilmesPopulares/FilmesPopulares';
import FilmesEmCartaz from './pages/FilmesEmCartaz/FilmesEmCartaz';
import FilmesBemAvaliados from './pages/FilmesBemAvaliados/FilmesBemAvaliados';
import MovieSinglePopulares from './pages/MovieSinglePopulares/MovieSinglePopulares';
import MovieSingleCartaz from './pages/MovieSingleCartaz/MovieSingleCartaz';
import MovieSingleBemAvaliados from './pages/MovieSingleBemAvaliados/MovieSingleBemAvaliados';

const App = () => {
  const route = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/movieSingle',
      element: <MovieSingle></MovieSingle>,
    },
    {
      path:"/movieSinglePopulares",
      element: <MovieSinglePopulares></MovieSinglePopulares>
    },
    {
      path:"/filmesPopulares",
      element:<FilmesPopulares></FilmesPopulares>
    },
    {
      path:"/emCartaz",
      element:<FilmesEmCartaz></FilmesEmCartaz>
    },
    {
      path:"/bemAvaliados",
      element:<FilmesBemAvaliados></FilmesBemAvaliados>
    },
    {
      path:"/movieSingleCartaz",
      element:<MovieSingleCartaz></MovieSingleCartaz>
    },
    {
      path:"/movieSingleBemAvaliados",
      element:<MovieSingleBemAvaliados></MovieSingleBemAvaliados>
    }
  ]);


  return (
    <React.StrictMode>
      <ChakraProvider>
          <RouterProvider router={route}></RouterProvider>
        <GlobalStyle></GlobalStyle>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);