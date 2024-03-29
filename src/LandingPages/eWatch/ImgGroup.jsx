import React from 'react';
import { BoxStar, ImageContainer, ImageGroupBox, Star1, Star2, Stroke1, Stroke2, Tag1, Tag2, Unsplash } from './Styled';
import star from './assets/Star.png'
import start1 from './assets/star (1).png'
import star2 from './assets/Star (2).png'
import unsplash from './assets/unsplash_QRWAdBCqysc (1).png'
import { Grid } from '@mui/material';


function ImageGroup() {
    return (
        <ImageGroupBox>
            <Stroke1>
                <BoxStar>
                    <img src={star} alt='star' />
                </BoxStar>
            </Stroke1>
            <Unsplash>
                <Grid container spacing={0}>
                    <ImageContainer item xs={12}>
                        <img src={unsplash} alt='unsplash' />
                        <Star1>
                            <img src={start1} alt='star1'/>
                        </Star1>
                        <Star2>
                            <img src={star2} alt='star2'/>
                        </Star2>
                        <Tag1>Award Winning Product</Tag1>
                        <Tag2>Ergonomic Design</Tag2>
                    </ImageContainer>
                </Grid>

            </Unsplash>
            <Stroke2 />
        </ImageGroupBox>
    )
}

export default ImageGroup