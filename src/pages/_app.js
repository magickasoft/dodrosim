import '../styles/globals.css';
import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import { Header } from '../components';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ScrollOut({
      threshold: 0.6
    });
  }, []);

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
