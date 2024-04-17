import { CompWrapper, ExploreButton, HeaderWrapper, ImageWrapper, ParaWrapper, TextWrapper } from "./Styled"
import design from './assets/Design. Create. Inspire..png'
import images from "./assets/images"

function CardDesignPro() {
    return (
        <CompWrapper>
            <TextWrapper>
                <HeaderWrapper>
                    <img src={design} alt="design" />
                </HeaderWrapper>
                <ParaWrapper>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
                </ParaWrapper>
                <ExploreButton>
                    Explore
                </ExploreButton>
            </TextWrapper>
            <ImageWrapper>
                {images.map((ima, index) => (
                   <img 
                    src={ima}
                    alt={index}
                    key={index}
                    style={{
                        width: '180px', // Ensure images fill their grid cell
                        height: '200px', // Ensure images fill their grid cell
                        objectFit: 'cover', // Optional: adjust image sizing
                        borderRadius: '50px'
                    }}
                   />
                ))}
            </ImageWrapper>
        </CompWrapper>
    )
}
export default CardDesignPro