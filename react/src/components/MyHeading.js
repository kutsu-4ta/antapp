import React from 'react'
import Styled from 'styled-components'

const StyledMyHeading = Styled.h1`
  font-size: 36px;
`;

// NOTE:ちゃんと書いた版。備忘録として残してある
// const MyHeading = (props) => {
//     return (
//         <StyledMyHeading>{props.children}</StyledMyHeading>
//     );
// }
//
// export default MyHeading;

export default StyledMyHeading;