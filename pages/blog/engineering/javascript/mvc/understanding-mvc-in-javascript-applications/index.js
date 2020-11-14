const { default: Footer } = require("../../../../../../components/footer")
const { default: Header } = require("../../../../../../components/header")

const PageMVC = () => {
    return (
        <>
            <Header />
            <div className="page-content">
                <div className="content-styles">
                    <h1>Understanding MVC In JavaScript Applications</h1>
                    <p>If you are a web developer, you have undoubtedly gotten to the point where you were wondering if there was a better way to structure your code.
                        <div className="break"></div>
                    There most likely is.
                    <div className="break"></div>
                    Though it does depend on which type of internet application you are building.
                    <div className="break"></div>
                    A simple blog can be managed by breaking the website up into content-based relative compartmentalization, such as pages, posts and media, and that is pretty much it.
                    <div className="break"></div>
                    A larger website, like YouTube or Facebook require much more diligence in keeping everything clean and organized.
                    As a project grows, you will soon see why you need better structure and organizaiton, or else you will most likely end up ambandoning the project.
                    </p>
                    <h2>Introducing MVC</h2>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageMVC