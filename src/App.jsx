import "./App.scss";
import Header from "./Header";
import Hero from "./Hero";
import Features from "./Features";
import Download from "./Download";
import Faq from "./Faq";
import Newsletter from "./Newsletter";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Features />
      <Download />
      <Faq />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
