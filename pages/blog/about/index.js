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
                    <p>Hello.<br></br>
                I am fascinated by engineering and design.<br></br>
                I created this website as a way to explore, study and practice my interests and passions from applicaiton and therotical senses.<br></br>
                Hopefully this can be a journey of enjoyment, enlightenment and synergistic collaboration as we learn more about the world that was created by the Almighty.<br></br>
                Peace and love,<br></br>
                Matt Jackson
                </p>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default About;