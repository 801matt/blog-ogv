import Footer from "../../../components/footer"
import Header from "../../../components/header"
import PageHero from "../../../components/hero/page"
import Listings from "../../../components/listings"
import SubSections from "../../../components/listings/SubSections/sub-sections"

const Engineering = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <PageHero title="Engineering" />
                <SubSections refine="engineering" />
                <Listings refine="engineering" />
            </div>
            <Footer />
        </>
    )
}

export default Engineering;