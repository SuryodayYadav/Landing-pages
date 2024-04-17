import { BottomBox, CardWrapper, CoffeeBox, CompWrapper, ExploreButton, FrameBox, FrameChild, HeaderWrapper, Heading, ListBox, PageWrapper, ParaWrapper, PhotoBox, TeaBox, TextWrapper } from "./Styled"
import coffee from './assets/unsplash_XtUd5SiX464 (1).png'
import tea from './assets/unsplash_XtUd5SiX464.png'
import coffeeIcon from './assets/coffee.png'
import rect1 from './assets/Rectangle 22.png'
import rect2 from './assets/Rectangle 23.png'
import rect3 from './assets/Rectangle 24.png'
import rect4 from './assets/Rectangle 25.png'
import rect5 from './assets/Rectangle 26.png'

function TeaCofee() {
    return (
        <PageWrapper>
            <CompWrapper>
                <TextWrapper>
                    <HeaderWrapper>
                        <Heading>Your coffee</Heading>
                        <Heading>Your vibe</Heading>
                        <Heading>Your energy</Heading>
                    </HeaderWrapper>
                    <ParaWrapper>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
                    </ParaWrapper>
                    <ExploreButton>Explore</ExploreButton>
                </TextWrapper>
                <CardWrapper>
                    <CoffeeBox>
                        <img src={coffee} alt="coffee" style={{ borderRadius: '50%' }} />
                    </CoffeeBox>
                    <TeaBox>
                        <img src={tea} alt="tea" style={{ borderRadius: '50%' }} />
                    </TeaBox>
                </CardWrapper>
            </CompWrapper>
            <ListBox>
                <FrameBox>
                    <FrameChild>
                    <img src={coffeeIcon} alt="icon" style={{ width: '20px', height: '20px', objectFit: 'cover', margin: '7px' }} />
                    <h2 style={{margin: '7px'}}>190+</h2>
                    <p style={{margin: '7px'}}>Lorem ipsum dolor sit amet, consectetur</p>
                    </FrameChild>
                    <FrameChild>
                    <img src={coffeeIcon} alt="icon" style={{ width: '20px', height: '20px', objectFit: 'cover',margin: '7px' }} />
                    <h2 style={{margin: '7px'}}>123K</h2>
                    <p style={{margin: '7px'}}>Lorem ipsum dolor sit amet, consectetur</p>
                    </FrameChild>
                    <FrameChild>
                    <img src={coffeeIcon} alt="icon" style={{ width: '20px', height: '20px', objectFit: 'cover', margin: '7px' }} />
                    <h2 style={{margin: '7px'}}>58</h2>
                    <p style={{margin: '7px'}}>Lorem ipsum dolor sit amet, consectetur</p>
                    </FrameChild>
                </FrameBox>
            </ListBox>
            <BottomBox>
                <PhotoBox>
                    <img src={rect1} alt="rect1" />
                    <p style={{fontSize: '12px', color: '#D9D9D9'}}>Et integer facilisi eget</p>
                </PhotoBox>
                <PhotoBox>
                    <img src={rect2} alt="rect2"/>
                    <p style={{fontSize: '14px', color: '#D9D9D9'}}>Et integer facilisi eget</p>
                </PhotoBox>
                <PhotoBox>
                    <img src={rect3} alt="rect3"/>
                    <p style={{fontSize: '14px', color: '#D9D9D9'}}>Et integer facilisi eget</p>
                </PhotoBox>
                <PhotoBox>
                    <img src={rect4} alt="rect4"/>
                    <p style={{fontSize: '14px', color: '#D9D9D9'}}>Et integer facilisi eget</p>
                </PhotoBox>
                <PhotoBox>
                    <img src={rect5} alt="rect5"/>
                    <p style={{fontSize: '14px', color: '#D9D9D9'}}>Et integer facilisi eget</p>
                </PhotoBox>
            </BottomBox>
        </PageWrapper>
    )
}

export default TeaCofee