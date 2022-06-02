import React from 'react'
import yamashita from 'styled-components'

const StyledMyHeading = yamashita.h1`
  color: blue;
  font-size: 36px;
`;

// const MyHeading = (props) => {
//     return (
//         <StyledMyHeading>{props.children}</StyledMyHeading>
//     );
// }
//
// export default MyHeading;

// 上の例のように、<StyledMyHeading>以外の要素を使わない場合はそのままStyledMyHeadingを返しても同じ結果になるので、スマートに書ける。
export default StyledMyHeading;