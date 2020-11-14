import Footer from "../../../components/footer"
import Header from "../../../components/header"
import PageHero from "../../../components/hero/page"
import Listings from "../../../components/listings"
import SubSections from "../../../components/listings/SubSections/sub-sections"

const Design = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <PageHero title="Design" />
                <SubSections refine="design" />
                <Listings refine="design" />
            </div>
            <Footer />
        </>
    )
}

export default Design;