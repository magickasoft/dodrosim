import '../styles/globals.css';
import React, { useEffect } from 'react';
import ScrollOut from 'scroll-out';
import { Header } from '../components';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    ScrollOut({
      threshold: 0.6,
      onShown: function(element, ctx, scrollingElement) {
        // todo mave by map
        console.log('onShown', element, ctx, scrollingElement);
      },
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
