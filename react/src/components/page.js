import React, { useState } from 'react'
import { Transition } from 'react-transition-group'
const page = () => {
    const [inProp, setInProp] = useState(false)
    const transitionStyles = {
        entering: { opacity: 1, color: 'red', transition: 'all 1s ease' },
        entered: { opacity: 1, color: 'blue' },
        exiting: { opacity: 0, transition: 'all 1s ease' },
        exited: { opacity: 0 },
    }
    return (
        <>
            <Transition in={inProp} timeout={1500}>
                {(state) => (
                    <div style={transitionStyles[state]}>
                        <p>React CSS Animation</p>
                    </div>
                )}
            </Transition>
            <button style={{ marginTop: '10px' }} onClick={() => setInProp(!inProp)}>
                Click
            </button>
        </>
    )
}
export default page