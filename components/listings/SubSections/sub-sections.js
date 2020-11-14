import Link from "next/link";
import styled from "styled-components";
import SubSectionsMeta from "./_categories";
import Pages from "./_pages";

const InternalSubSections = styled.section`
padding: 20px;
padding-top: 40px;
max-width: 700px;
margin: 0 auto;
text-align: center;
.sub-section {
    display: inline;
    .link {
        margin: 5px;
        display: inline-block;
        padding: 10px 24px;
        background: #ECEFF1;
        border: solid 1px #dfdfdf;
        cursor: pointer;
        &:hover {
            background: #D3D6D8;
        }
    }
}
`;

const SubSections = ({ type, refine }) => {
    const Categories = SubSectionsMeta.filter(x => x.category === refine);
    return (
        <InternalSubSections>
            {
                refine === "entire" ?
                    Pages.map(x => {
                        return (
                            <div key={x.id} className="sub-section">
                                {x.url ? <Link href={x.url}><a className="link" href={x.url}>{x.name}</a></Link> : <span className="link">{x.name}</span>}
                            </div>
                        )
                    }) :
                    Categories.map(x => {
                        return (
                            <div key={x.id} className="sub-section">
                                {x.url ? <Link href={x.url}><a className="link" href={x.url}>{x.name}</a></Link> : <span className="link">{x.name}</span>}
                            </div>
                        )
                    })
            }
        </InternalSubSections>
    )
}

export default SubSections
