import React, { useState } from 'react'
import {CSSTransition} from "react-transition-group";

const containerStyle = {
    position: 'relative',
    widthL: '3rem',
    height: '3rem'
};

const styledCircle = () => {
    //マウントの状態を管理
    const [mount, setMount] = useState(true);

    //マウントのオンオフを切り替える
    const changer = () => {
        setMount(!mount);
    };

    //状態変化時のコールバック
    const callBacks = {
        onEnter: () => console.log("enterです"),
        onEntered: () => console.log("enteredです"),
        onExit: () => console.log("exitです"),
        onExited: () => console.log("exitedです"),
    };

    const ballOneStyles = {
        entering: {
            opacity: 1,
            transition: 'all 2s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'red',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-130px',
            left: '600px',
            zIndex: '-1'
        },
        entered: {
            opacity: 1,
            transition: 'all 2s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'blue',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-130px',
            left: '503px',
            zIndex: '-1'
        },
        exiting: {
            opacity: 0,
            transition: 'all 2s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-130px',
            left: '500px',
            zIndex: '-1'
        },
        exited: {
            opacity: 0,
            transition: 'all 2s ease',
            display:'block',
            width: '10rem',
            height: '10rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'black',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-130px',
            left: '200px',
            zIndex: '-1'
        },
    };

    const ballTwoStyles = {
        exiting: {
            opacity: 0,
            transition: 'all 2s ease',
            display: 'block',
            width: '5rem',
            height: '5rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'yellow',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-100px',
            right: '10px',
            zIndex: '-1'
        },
        exited: {
            opacity: 0,
            transition: 'all 2s ease',
            display: 'block',
            width: '50rem',
            height: '50rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'yellow',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-60px',
            right: '10px',
            zIndex: '-1'
        },
        entering: {
            opacity: 1,
            transition: 'all 2s ease',
            display: 'block',
            width: '5rem',
            height: '5rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'blue',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-110px',
            right: '300px',
            zIndex: '-1'
        },
        entered: {
            opacity: 1,
            transition: 'all 2s ease', // 基本的にはtimeoutと同じにする
            display: 'block',
            width: '5rem',
            height: '5rem',
            border: '0.1rem solid',
            borderTop: '0.1rem solid',
            borderRadius: '50%',
            borderColor: 'red',
            position: 'absolute',
            boxSizing: 'border-box',
            top: '-50px',
            right: '330px',
            zIndex: '-1'
        },
    };

    return (
        <>
            <CSSTransition
                in={mount}
                timeout={2000}
                mountOnEnter={true}
                appear={true}
            >
                {(state) => (
                    <div style={containerStyle}>
                        <span style={ballOneStyles[state]} />
                        <span style={ballTwoStyles[state]} />
                    </div>
                )}
            </CSSTransition>
        </>
    )
}
export default styledCircle