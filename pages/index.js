import Header from "../components/header";
import MainHero from "../components/hero/main";
import Listings from "../components/listings";
import Footer from "../components/footer";

const App = () => {
  return (
    <>
      <Header />
      <MainHero />
      <Listings refine="entire" />
      <Footer />
    </>
  )
}

export default App;