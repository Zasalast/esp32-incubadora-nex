import { createContext } from "react";
import DataContext from "./../context/DataContext"
export const UserContext = createContext();

export default function App({ Component, pageProps }) {

  return (<DataContext.Provider value="Reed"> <Component {...pageProps} /></DataContext.Provider>)
}


