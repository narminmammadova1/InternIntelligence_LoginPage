// import "@/styles/globals.css";
// import type { AppProps } from "next/app";
// // import { QueryClient, QueryClientProvider } from "react-query";


// export default function App({ Component, pageProps }: AppProps) {
//   return 
//     <Component {...pageProps} />
   
// }


import "@/styles/globals.css";
import type { AppProps } from "next/app";
// import { QueryClient, QueryClientProvider } from "react-query";

// const  queryClient=new QueryClient()
import { ToastContainer } from "react-toastify";  

export default function App({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <ToastContainer 
        position="top-right"      
        autoClose={3000}          
        hideProgressBar={false}   
        closeOnClick              
        pauseOnHover             
        draggable                 
      />
  </>
    
}
