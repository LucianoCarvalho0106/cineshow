import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { GlobalStyle } from '../GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react';
import Home from './pages/Home/Home';
import MovieSingle from './pages/MovieSingle/MovieSingle';
import Context from './context/context';

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
  ]);

  const [contextValue, setContextValue] = useState<never>();

  return (
    <React.StrictMode>
      <ChakraProvider>
        <Context.Provider value={[contextValue, setContextValue]}>
          <RouterProvider router={route}></RouterProvider>
        </Context.Provider>
        <GlobalStyle></GlobalStyle>
      </ChakraProvider>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);