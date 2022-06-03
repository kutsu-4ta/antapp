import React from 'react'
import MyHeading from "../components/MyHeading";
import Styled from "styled-components";
import Circle from '../components/BackgrounAnimation';

const StyledTopTitle = Styled.div`
    padding-top: 10rem;
`;

const Title = () => {
    return (
        <div>
            <div>
                <StyledTopTitle style={{textAlign: 'center', position: 'relative'}}>
                    <MyHeading>Antapp</MyHeading>
                </StyledTopTitle>
            </div>
            <Circle />
        </div>
    );
}
export default Title;
