import React from 'react'
import './App.scss'
// import { RouterProvider } from 'react-router-dom'
import router from './routes'
import './styles/index.scss';
import Search from './componets/search';
// import { Toaster } from 'react-hot-toast';

function App() {
  const phoneNumber = '9898144191'; // Replace with your phone number, including country code
  const message = encodeURIComponent('Hello, I would like to know more about your services.');
  return (
    <>
      {/* <RouterProvider router={router} />
      <Toaster/> */}
      {/* <Search/> */}
      <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        padding: '10px 20px',
        backgroundColor: '#25D366',
        color: 'black',
        borderRadius: '5px',
        textDecoration: 'none',
        display: 'inline-block',
      }}
    >
      Chat with us on WhatsApp
    </a>
    </>
  )
}

export default App
