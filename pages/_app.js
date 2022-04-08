import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/styles.css";
import { Provider } from "react-redux";
import { store } from "../Redux/store";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
 import { vesselService } from  '../services';


function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout;
  const router = useRouter();
  const [authorized, setAuthorized] = useState(false);


  useEffect(() => {
            // run auth check on initial load
            authCheck(router.asPath);
    
            // set authorized to false to hide page content while changing routes
            const hideContent = () => setAuthorized(false);
            router.events.on('routeChangeStart', hideContent);
    
            // run auth check on route change
            router.events.on('routeChangeComplete', authCheck)
    
            // unsubscribe from events in useEffect return function
            return () => {
                router.events.off('routeChangeStart', hideContent);
                router.events.off('routeChangeComplete', authCheck);
            }
        }, []);

        function authCheck(url) {
                  // redirect to login page if accessing a private page and not logged in 
                  const publicPaths = ['/'];
                  const path = url.split('?')[0];
                  if (!vesselService.userValue && !publicPaths.includes(path)) {
                      setAuthorized(false);
                      // router.push({
                      //     pathname: '/',
                      //    // query: { returnUrl: router.asPath }
                      // });
                  } else {
                      setAuthorized(true);
                  }
              }

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
  );
}

export default MyApp;
const EmptyLayout = ({ children }) => <>{children}</>;





// import Head from 'next/head';
// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/router';

// import 'styles/globals.css';
// import { vesselService } from 'services';
// import { Nav } from 'components';

// export default App;

// function App({ Component, pageProps }) {
//     const router = useRouter();
//     const [authorized, setAuthorized] = useState(false);

//     useEffect(() => {
//         // run auth check on initial load
//         authCheck(router.asPath);

//         // set authorized to false to hide page content while changing routes
//         const hideContent = () => setAuthorized(false);
//         router.events.on('routeChangeStart', hideContent);

//         // run auth check on route change
//         router.events.on('routeChangeComplete', authCheck)

//         // unsubscribe from events in useEffect return function
//         return () => {
//             router.events.off('routeChangeStart', hideContent);
//             router.events.off('routeChangeComplete', authCheck);
//         }
//     }, []);

//     function authCheck(url) {
//         // redirect to login page if accessing a private page and not logged in 
//         const publicPaths = ['/login'];
//         const path = url.split('?')[0];
//         if (!vesselService.userValue && !publicPaths.includes(path)) {
//             setAuthorized(false);
//             router.push({
//                 pathname: '/login',
//                 query: { returnUrl: router.asPath }
//             });
//         } else {
//             setAuthorized(true);
//         }
//     }

//     return (
//         <>
//             <Head>
//                 <title>Next.js 11 - JWT Authentication Example</title>

//                 {/* bootstrap css */}
//                 <link href="//netdna.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet" />
//             </Head>

//             <div className="app-container bg-light">
//                 <Nav />
//                 <div className="container pt-4 pb-4">
//                     {authorized &&
//                         <>
//                             <Component {...pageProps} />
//                         </>
//                     }
//                 </div>
//             </div>

//             {/* credits */}
//             <div className="text-center mt-4">
//                 <p>
//                     <a href="https://jasonwatmore.com/post/2021/08/04/next-js-11-jwt-authentication-tutorial-with-example-app" target="_top">Next.js 11 - JWT Authentication Tutorial with Example App</a>
//                 </p>
//                 <p>
//                     <a href="https://jasonwatmore.com" target="_top">JasonWatmore.com</a>
//                 </p>
//             </div>
//         </>
//     );
// }