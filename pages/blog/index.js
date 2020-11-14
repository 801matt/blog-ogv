import Footer from "../../components/footer"
import Header from "../../components/header"
import PageHero from "../../components/hero/page"
import Listings from "../../components/listings"
import SubSections from "../../components/listings/SubSections/sub-sections"

const Blog = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <PageHero title="Blog" />
                <SubSections refine="entire" />
                <Listings refine="entire" />
            </div>
            <Footer />
        </>
    )
}

export default Blog;