import Header from "../components/header";
import MainHero from "../components/hero/main";
import Listings from "../components/listings";
import Footer from "../components/footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="page-content">
        <MainHero />
        <Listings refine="entire" />
      </div>
      <Footer />
    </>
  )
}

export default App;