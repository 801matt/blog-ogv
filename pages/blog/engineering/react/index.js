import Header from "../../../../components/header"
import PageHero from "../../../../components/hero/page"
import Listings from "../../../../components/listings"

const React = () => {
    return (
        <>
            <Header />
            <PageHero title="React" />
            <Listings type="sub" refine="react" />
        </>
    )
}

export default React;