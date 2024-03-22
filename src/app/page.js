import Navbar from "./components/navbar/Navbar";
import Header from './home/header/Header'
import Products from "./home/products/Products";
import About from "./home/about-us/About";
import Benefits from "./home/benefits/Benefits";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <>
      <main>
        <Navbar />
        <Header />
        <About />
        <Products />
        <Benefits />
      </main>
      <Footer />
    </>
  );
}
