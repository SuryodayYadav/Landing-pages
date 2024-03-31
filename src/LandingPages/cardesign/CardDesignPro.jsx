import { Grid } from "@mui/material"
import { CardWrapper, CompWrapper, ExploreButton, HeaderWrapper, ParaWrapper, TextWrapper } from "./Styled"
import design from './assets/Design. Create. Inspire..png'
import images from "./assets/images"

function CardDesignPro(){
    return(
        <CompWrapper>
            <TextWrapper>
                <HeaderWrapper>
                    <img src={design} alt="design"/>
                </HeaderWrapper>
                <ParaWrapper>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
                </ParaWrapper>
                <ExploreButton>
                    Explore
                </ExploreButton>
            </TextWrapper>
            <CardWrapper>
            <Grid container spacing={2} style={{width: 'calc(85% + 16px)', marginLeft: '120px'}}>
                {images.map((url, index) => (
                    <Grid item key={index}>
                        <img src={url} alt={{index}} style={{width: '170px', height: '170px'}}/>
                    </Grid>
                ))}
            </Grid>
            </CardWrapper>
        </CompWrapper>
    )
}
export default CardDesignPro