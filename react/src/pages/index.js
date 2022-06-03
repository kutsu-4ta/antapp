import React from 'react'
import MyHeading from "../components/MyHeading";
import Styled from "styled-components";

const StyledTopTitle = Styled.div`
    padding-top: 10rem;
`;

const Title = (props) => {
    return (
        <StyledTopTitle style={{ textAlign: 'center' }}>
            <MyHeading>Antapp</MyHeading>
        </StyledTopTitle>
    );
}
export default Title;
