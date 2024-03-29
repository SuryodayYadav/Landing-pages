import React from 'react';
import { BoxWrapper, ImageWrapper } from './StyledComp';
import images from './data';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    text: {
        fontFamily: 'serif',
        color: 'rgba(37, 37, 37, 0.25)',
        fontWeight: '800',
        fontSize: '40px'
    }
})
function ImageCard() {
    const classes = useStyles()
    return(
        <React.Fragment>
        <ImageWrapper>
            {images.map((e, i) => 
                <BoxWrapper>
                    <div className={classes.text}>{e.text1}</div>
                    <img src={e.img1} alt={e.text1} />
                </BoxWrapper>
            )}
        </ImageWrapper>
    </React.Fragment>
    )
}

export default ImageCard