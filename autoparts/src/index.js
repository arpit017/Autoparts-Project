import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
=======
import {BrowserRouter} from 'react-router-dom'
import {ChakraProvider} from '@chakra-ui/react'
>>>>>>> 35000c4fba481916876061588e4604e13c31ed76


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<<<<<<< HEAD
 
    <App />
  
=======
    <ChakraProvider>
   <BrowserRouter>
   <App />
   </BrowserRouter>
    </ChakraProvider>
>>>>>>> 35000c4fba481916876061588e4604e13c31ed76
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
