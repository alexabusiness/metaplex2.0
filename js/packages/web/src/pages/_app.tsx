import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';

import '../styles/index.less';
import '../css/style.css';
import '../css/bootstrap.min.css';
import '../css/icofont.min.css';
import '../css/animate.css';
import '../css/swiper-bundle.min.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Metaplex NFT Marketplace</title>
      </Head>
      <div id="root">
        <Component {...pageProps} />
      </div>
    </>
  );
}
