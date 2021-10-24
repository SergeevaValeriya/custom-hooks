import React, {useRef} from 'react';
import useHover from "../hooks/useHover";

const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref);

    console.log(isHovering);

    return (
        <div ref={ref} style={{width: '300px', height: '300px', backgroundColor: isHovering ? 'mediumaquamarine' : 'teal'}} />
    );
};

export default Hover;