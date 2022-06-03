import React, { useState } from 'react'
import {CSSTransition} from "react-transition-group";

const containerStyle = {
    position: 'relative',
    widthL: '3rem',
    height: '3rem'
};
const circleStyle = {
    display:'block',
    width: '10rem',
    height: '10rem',
    border: '0.1rem solid',
    borderTop: '0.1rem solid',
    borderRadius: '50%',
    position: 'absolute',
    boxSizing: 'border-box',
    top: '-100px',
    left: '500px',
    zIndex: '-1'
};

const page = () => {
    //マウントの状態を管理
    const [mount, setMount] = useState(true);

    //マウントのオンオフを切り替える
    const changer = () => {
        setMount(!mount);
    };

    const transitionStyles = {
        entering: {
            opacity: 1,
            transition: 'all 1s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'red',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-100px',
            left: '600px',
            zIndex: '-1'
        },
        exiting: {
            opacity: 0,
            transition: 'all 1s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-100px',
            left: '400px',
            zIndex: '-1'
        },
        entered: {
            opacity: 1,
            transition: 'all 1s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'blue',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-100px',
            left: '500px',
            zIndex: '-1'
        },
        exited: {
            opacity: 0,
            transition: 'all 1s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'black',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-100px',
            left: '200px',
            zIndex: '-1'
        },

    }
    return (
        <>
            <CSSTransition in={mount} timeout={1400} mountOnEnter={true} appear={true}>
                {(state) => (
                    <div style={containerStyle}>
                        <span style={transitionStyles[state]} />
                    </div>
                )}
            </CSSTransition>
        </>
    )
}
export default page