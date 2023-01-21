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
