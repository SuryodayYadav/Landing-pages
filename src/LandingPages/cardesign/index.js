import React from 'react';
import { CardWrapper, CompWrapper, HeaderWrapper, ParaWrapper, TextWrapper } from './Styled';
import design from './assets/Design. Create. Inspire..png'

function CardDesign() {
    return (
        <CompWrapper>
            <TextWrapper>
                <HeaderWrapper>
                    <img src={design} alt='design' />
                </HeaderWrapper>
                <ParaWrapper>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget.
                </ParaWrapper>
            </TextWrapper>
            <CardWrapper>

            </CardWrapper>
        </CompWrapper>
    )
}

export default CardDesign