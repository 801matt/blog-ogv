import Styled from "styled-components";
import Link from "next/link";
import Meta from "./meta";

const InternalListings = Styled.section`
padding: 20px;
padding-bottom: 60px;
.listing-group {
    padding-bottom: 60px;
    max-width: 700px;
    margin: 0 auto;
    text-align: center;
    &:hover {
        color: #2E3A5B;
    }
    .title {
        margin-bottom: 16px;
    }
    .excerpt {
        color: #888;
        font-size: 18px;
        line-height: 27px;
    }
}
`;

const Listings = ({ refine }) => {
    let Posts;
    refine === "entire" ? Posts = Meta : Posts = Meta.filter(x => x.category === refine);
    return (
        <InternalListings>
            {Posts.map(x => {
                return (
                    <div key={x.id} className="listing-group">
                        <Link href={x.url}>
                            <a href={x.url}>
                                <div className="title">
                                    <h1>{x.title}</h1>
                                </div>
                            </a>
                        </Link>
                        <div className="excerpt">
                            <p>{x.excerpt}</p>
                        </div>
                    </div>
                )
            }
            )
            }
        </InternalListings>
    )
}

export default Listings