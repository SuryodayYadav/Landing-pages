import React from 'react';
import { LeftImage } from './StyledComp';
import left from './asset/leftdis.png'

function ImageLeft(){
    return(
        <LeftImage>
            <img src={left} alt='left'/>
        </LeftImage>
    )
}

export default ImageLeft