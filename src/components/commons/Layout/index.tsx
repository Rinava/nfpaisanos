import { createContext, useEffect, useState } from 'react';
import styles from './styles.module.css';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';

interface currencies {
  eth: number;
}

interface LayoutContextProps {
  currencies: currencies;
}

export const LayoutContext = createContext<LayoutContextProps>({
  currencies: {
    eth: 0,
  },
});

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  const [currencyValues, setCurrencyValues] = useState<currencies>({
    eth: 0,
  });

  useEffect(() => {
    const getCurrencyValues = async () => {
      const response = await fetch('/api/currencies');
      const data = await response.json();
      setCurrencyValues(data);
    };

    getCurrencyValues();
  }, []);

  return (
    <LayoutContext.Provider value={{ currencies: currencyValues }}>
      <Head>
        <title>NFPaisanos</title>
        <meta
          name='description'
          content='NFPaisanos, an NFT marketplace for the NFT community'
        />
        <meta name='theme-color' content='#141416' />
        <meta name='chartSet' charSet='utf-8' />
        <meta name='keywords' content='NFT, Paisanos, auctions, marketplace' />
        <meta name='author' content='Paisanos' />
        <meta name='copyright' content='Property of Paisanos' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='icon' href='/favicon.png' />
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.main}>{children}</main>
        <Footer />
      </div>
    </LayoutContext.Provider>
  );
};

export default Layout;
