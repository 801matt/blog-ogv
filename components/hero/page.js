import styled from "styled-components";
import Link from "next/link";

const InternalPageHero = styled.div`
height: 200px;
/* background: #f5f5f5; */
background: #ECEFF1;
display: flex;
justify-content: center;
align-items: center;
border-bottom: solid 1px #dfdfdf;
.hero-content {
    padding: 20px;
    text-align: center;
    h1 {
        font-size: 32px;
        text-transform: uppercase;
    }
}
`;

const PageHero = ({ title }) => {
    return (
        <InternalPageHero>
            <div className="hero-content">
                <h1>{title}</h1>
            </div>
        </InternalPageHero>
    )
}

export default PageHero;