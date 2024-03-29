import Styled from 'styled-components'
import { Link, Router } from 'components/Router';
import {FaBars} from 'react-icons/fa'

// TODO:白色か透明にする
export const Nav = Styled.nav`
    background: white;
    height: 80px;
    display: flex;
    justify-content: space-between;
    // padding: 0.5rem calc((100vw - 1000px) / 2);
    padding: 0;
    z-index: 10;
`;

export const NavLink = Styled(Link)`
    color: black;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursol: pointer;

    &.active {
        color: #15cdfc;
    }
`;

export  const Bars = Styled(FaBars)`
    display: none;
    color: #fff;
    
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-siza: 1.8rem;
        cursol: pointer;
    }
`

export const NavMenu = Styled.div`
    display: flex;
    align-items: center;
    margin-right: 4rem;
    
    @media screen and (max-width: 768px) {
        // display: none;
    }
`;

