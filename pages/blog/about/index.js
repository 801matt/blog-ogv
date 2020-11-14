import Footer from "../../../components/footer"
import Header from "../../../components/header"
import PageHero from "../../../components/hero/page"

const About = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <PageHero title="About" />
                <div className="content-styles">
                    <p>Hello.
                <div className="break"></div>
                I am fascinated by engineering and design.
                <div className="break"></div>
                I created this website as a way to explore, study and practice my interests and passions from an applicable and therotical standpoint.
                <div className="break"></div>
                Hopefully this can be a journey of enjoyment, enlightenment and synergistic collaboration as we learn more about the world that was created by the Almighty.
                <div className="break"></div>
                Peace and love,
                <div className="break"></div>
                Matt Jackson
                </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;