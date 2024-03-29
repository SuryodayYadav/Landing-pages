import React from 'react';
import { BoxStar, ImageGroupBox, Stroke1, Stroke2, Unsplash } from './Styled';
import star from './assets/Star.png'
import unsplash from './assets/unsplash_QRWAdBCqysc (1).png'


function ImageGroup(){
    return(
        <ImageGroupBox>
            <Stroke1>
                <BoxStar>
                    <img src={star} alt='star'/>
                </BoxStar>
            </Stroke1>
            <Unsplash>
                <img src={unsplash} alt='unsplash'/>
            </Unsplash>
            <Stroke2 />
        </ImageGroupBox>
    )
}

export default ImageGroup