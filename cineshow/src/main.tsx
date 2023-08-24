import React, { useState } from 'react';
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
import MovieSingleSeriesPopulares from './pages/MovieSingleSeriesPopulares/MovieSingleSeriesPopulares';
import SeriesPopulares from './pages/SeriesPopulares/SeriesPopulares';
import SeriesMaisBemAvaliadas from './pages/SeriesMaisBemAvaliadas/SeriesMaisBemAvaliadas';
import MovieSingleSeriesMaisBemAvaliadas from './pages/MovieSingleSeriesMaisBemAvaliadas/MovieSingleSeriesMaisBemAvaliadas';
import PessoasPopulares from './pages/PessoasPopulares/PessoasPopulares';
import MovieSinglePessoasPopulares from './pages/MovieSinglePessoasPopulares/MovieSinglePessoasPopulares';
import Context from './context/context';
import SearchPessoasPopulares from './pages/SearchPessoasPopulares/SearchPessoasPopulares';

const App = () => {

  const [value,setValue] = useState<any>([])
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
    },
    {
      path:"/MovieSingleSeriesPopulares",
      element:<MovieSingleSeriesPopulares></MovieSingleSeriesPopulares>
    },
    {
      path:"/seriesPopulares",
      element:<SeriesPopulares></SeriesPopulares>
    },
    {
      path:"/MovieSingleSeriesMaisBemAvaliadas",
      element:<MovieSingleSeriesMaisBemAvaliadas></MovieSingleSeriesMaisBemAvaliadas>
    },
    {
      path:"/seriesMaisBemAvaliadas",
      element:<SeriesMaisBemAvaliadas></SeriesMaisBemAvaliadas>
    },
    {
      path:"/pessoasPopulares",
      element:<PessoasPopulares></PessoasPopulares>
    },
    {
      path:"/MovieSinglePessoasPopulares",
      element:<MovieSinglePessoasPopulares></MovieSinglePessoasPopulares>
    },
    {
      path:"/SearchPessoasPopulares",
      element:<SearchPessoasPopulares></SearchPessoasPopulares>
    }
  ]);


  return (
    <React.StrictMode>
      <ChakraProvider>
        <Context.Provider value={[value,setValue]}>
          <RouterProvider router={route}></RouterProvider>
        </Context.Provider>
        <GlobalStyle></GlobalStyle>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);