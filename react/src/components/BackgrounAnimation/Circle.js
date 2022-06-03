import React from 'react'

const containerStyle = {
    position: 'relative',
    widthL: '3rem',
    height: '3rem'
};
const circleStyle = {
    display:'block',
    width: '10rem',
    height: '10rem',
    border: '0.1rem solid #808080',
    borderTop: '0.1rem solid #808080',
    borderRadius: '50%',
    position: 'absolute',
    boxSizing: 'border-box',
    top: '-100px',
    left: '500px',
    zIndex: '-1'
};

export default function StyledCircle() {
    return (
        <div style={containerStyle}>
            <span style={circleStyle} />
        </div>
    );
};