import React from 'react';
import { RightImage } from './StyledComp';
import right from './asset/rightdis.png'

function ImageRight(){
    return(
        <RightImage>
            <img src={right} alt='right'/>
        </RightImage>
    )
}

export default ImageRight