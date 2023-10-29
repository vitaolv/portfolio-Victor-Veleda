'use client'
import { Provider } from 'react-redux';
import { store } from "./store";

import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import HomePage from "./pages/HomePage";


export default function App() {

  return (
    <Provider store={store}>
      <Head />
      <main className="row-span-6 grid min-h-screen">

        <HomePage />

        <Footer />

      </main>
    </Provider >
  )
}
