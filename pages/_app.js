import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';

import'../styles/styles.css';


function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
  return (
  <>
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>

<Layout>
              <Component {...pageProps} />
            </Layout>

  </>
  )
}

export default MyApp
const EmptyLayout = ({ children }) => <>{children}</>