import Footer from "../../../components/footer"
import Header from "../../../components/header"
import PageHero from "../../../components/hero/page"
import Listings from "../../../components/listings"
import SubSections from "../../../components/listings/SubSections/sub-sections"

const Hobbies = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <PageHero title="Hobbies" />
                <SubSections refine="hobbies" />
                <Listings refine="hobbies" />
            </div>
            <Footer />
        </>
    )
}

export default Hobbies;