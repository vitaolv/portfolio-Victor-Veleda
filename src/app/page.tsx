'use client'
import { Provider } from 'react-redux';
import { store } from "./store";

import { Footer } from "./components/Footer";
import { Head } from "./components/Head";
import HomePage from './pages/homePage';

import useIntersectionObserver from "./utils/scrolls/fadeIn"

export default function App() {

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeInScrollWithOpacity');
        entry.target.classList.add('visble');
        entry.target.classList.remove('animate-fadeInScroll');
      } else {
        entry.target.classList.add('animate-fadeInScroll');
        entry.target.classList.add('visble');
        entry.target.classList.remove('animate-fadeInScrollWithOpacity');
      }
    });
  };

  useIntersectionObserver('.js-show-on-scroll', handleIntersection);

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
