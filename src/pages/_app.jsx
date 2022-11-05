import Head from 'next/head';
import { Toaster } from 'react-hot-toast';
import Navbar from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Entertainer</title>
        <meta name="description" content="Made by Pinaki Bhattacharjee" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Toaster position="bottom-right" reverseOrder={false} toastOptions={{ duration: 3000 }} />
      <div className="flex flex-col min-h-screen bg-gray-900 text-white p-5">
        <Navbar active={Component.name} />
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
