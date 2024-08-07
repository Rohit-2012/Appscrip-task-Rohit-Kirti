import { Rubik } from 'next/font/google'

import Hero from "@/components/hero/Hero";
import ProductContainer from '@/components/products/ProductContainer';
const rubRubik = Rubik({ subsets: ["latin"] });

const Home = () => {
  return (
    <main className={rubRubik.className}>
      <Hero />
      <ProductContainer />
    </main>
  );
}

export default Home;