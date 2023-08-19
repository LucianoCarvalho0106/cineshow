import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home/Home';
import MovieSingle from './pages/MovieSingle/MovieSingle';
import FilmesPopulares from './pages/FilmesPopulares/FilmesPopulares';


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
      path:"/filmesPopulares",
      element:<FilmesPopulares></FilmesPopulares>
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