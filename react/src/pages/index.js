import React from 'react'
import MyHeading from "../components/MyHeading";
import Styled from "styled-components";
import BackgroundAnimation from '../components/BackgrounAnimation';

import About from './about.js';
import Works from './work.js';
import Contact from './contact';
import ScrollFader from '../components/Transition/ScrollFader';

const StyledTopTitle = Styled.div`
    padding-top: 10rem;
`;

const Title = () => {
    return (
        <>
            <div>
                <StyledTopTitle style={{marginTop: '4rem', textAlign: 'center', position: 'relative'}}>
                    <MyHeading>Antapp</MyHeading>
                </StyledTopTitle>
                <BackgroundAnimation style={{marginTop: '10rem'}} />
            </div>

            <div style={{height: '1000px'}}>
                <div style={{marginTop: '15rem'}}>
                    <ScrollFader>
                        <About/>
                    </ScrollFader>
                </div>
                <div style={{marginTop: '10rem'}}>
                    <ScrollFader>
                        <Works/>
                    </ScrollFader>
                </div>
                <div style={{marginTop: '10rem'}}>
                    <ScrollFader>
                        <Contact/>
                    </ScrollFader>
                </div>
            </div>
        </>
    );
}
export default Title;
