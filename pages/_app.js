import Head from "next/head";

import 'bootstrap/dist/css/bootstrap.css';

import'../styles/styles.css';
import {Provider} from 'react-redux'
import {store} from '../Redux/store'



function MyApp({ Component, pageProps }) {

  const Layout = Component.Layout || EmptyLayout;
 
  return (
  <>
  
  <Head>
   <meta name="viewport" content="width=device-width, initial-scale=1" />
</Head>
<Provider store={store}>
<Layout>
              <Component {...pageProps} />
            </Layout>
            </Provider>
  </>
  )
}

export default MyApp
const EmptyLayout = ({ children }) => <>{children}</>