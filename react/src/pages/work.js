import React from 'react'
import { Link } from 'components/Router'
import Styled from 'styled-components'
import MyHeading from "../components/MyHeading";

// import { useRouteData } from 'react-static'
// export default function Blog() {
//   const { posts } = useRouteData()
//   return (
//     <div>
//       <h1>It's blog time.</h1>
//       <div>
//         <a href="#bottom" id="top">
//           Scroll to bottom!
//         </a>
//       </div>
//       <br />
//       All Posts:
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>
//             <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
//           </li>
//         ))}
//       </ul>
//       <a href="#top" id="bottom">
//         Scroll to top!
//       </a>
//     </div>
//   )
// }

const Work = (props) => {
    return (
        <div style={{ textAlign: 'center' }}>
            <MyHeading>works</MyHeading>
        </div>
    );
}

export default Work;