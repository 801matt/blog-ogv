import styled from "styled-components";

const InternalHeader = styled.header`
color: red;
`;

const Header = () => {
    return (
        <InternalHeader>HELLO</InternalHeader>
    )
}

export default Header