import React from "react";
import {Router} from "../Router";
import Dynamic from "../../containers/Dynamic";
import {Routes} from "react-static";
import Styled from "styled-components";
import {StyledDiv, StyledP, StyledEm} from './LoadingElements';


const Loading = (props) => {
    return (
        <StyledDiv>
            <StyledP>
                <StyledEm>Loading...</StyledEm>
            </StyledP>
        </StyledDiv>
    )
    ;
}

export default Loading;