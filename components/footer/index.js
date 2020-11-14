import styled from "styled-components";

const InternalFooter = styled.footer`
margin-top: 60px;
padding: 20px;
color: white;
background: #333;
display: flex;
justify-content: center;
align-items: center;
`;

const Footer = () => {
    return (
        <InternalFooter>
            <div className="footer-content">
                A production of Matt Jackson
            </div>
        </InternalFooter>
    )
}

export default Footer