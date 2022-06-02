import React from 'react'
import yamashita from 'styled-components'

const StyledMyHeading = yamashita.h1`
  color: blue;
  font-size: 36px;
`;

const MyHeading = (props) => {
    return (
        <StyledMyHeading>{props.children}</StyledMyHeading>
    );
}

export default MyHeading;