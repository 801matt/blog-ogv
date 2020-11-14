import styled from "styled-components";
import Link from "next/link";

const InternalMainHero = styled.div`
height: 400px;
/* background: #f5f5f5; */
background: #ECEFF1;
display: flex;
justify-content: center;
align-items: center;
border-bottom: solid 1px #dfdfdf;
margin-bottom: 60px;
.hero-content {
    padding: 20px;
    text-align: center;
    h1 {
        font-size: 32px;
        margin-bottom: 16px;
    }
    p {
        font-size: 18px;
        /* text-transform: uppercase; */
        margin-bottom: 32px;
    }

    .hero-link {
        a {
            padding: 2px 55px;
            display: inline-block;
            line-height: 40px;
            color: white;
            background: #2E3A5B;
            font-size: 12px;
            text-transform: uppercase;
        }
    }
}
`;

const MainHero = () => {
    return (
        <InternalMainHero>
            <div className="hero-content">
                <h1>801MATT</h1>
                <p>Welcome to my blog about isometric design and isomorphic engineering.</p>
                <div className="hero-link">
                    <Link href="/blog">
                        <a href="/blog">
                            Blog
                        </a>
                    </Link>
                </div>
            </div>
        </InternalMainHero>
    )
}

export default MainHero;