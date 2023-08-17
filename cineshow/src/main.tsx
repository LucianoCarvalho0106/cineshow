import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import { GlobalStyle } from '../GlobalStyle';
import { ChakraProvider } from '@chakra-ui/react'
import Home from './pages/Home/Home';
import CardMovie from './components/CardMovie/CardMovie';

const route = createBrowserRouter([
  {
    path:"/",
    element: <Home></Home>
  },
  {
    path:"/card",
    element:<CardMovie src="https://cinema10.com.br/upload/filmes/filmes_11149_velozes-e-furiosos-10-poster-nacional.jpg" title="Velozes e Furiosos 10"></CardMovie>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ChakraProvider>
       <RouterProvider router={route}></RouterProvider>
    </ChakraProvider>
    <GlobalStyle></GlobalStyle>
  </React.StrictMode>,
)
