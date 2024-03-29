import React from 'react';
import { DiscoverContainer, DiscoverTypography, DiscoverTypographyBox, ParaTypography, PrimaryButton} from './StyledComp';
import { Typography } from '@mui/material';
import ImageLeft from './ImageLeft';
import ImageRight from './ImageRight';


function Content() {
    return (
        <React.Fragment>
            <DiscoverContainer>
            <DiscoverTypographyBox>
                <DiscoverTypography>
                    <Typography variant='h1' style={{ fontWeight: '800', fontSize: '56px', lineHeight: '80px' }}>
                        Discover the beauty around the world
                    </Typography>
                </DiscoverTypography>
                <ParaTypography>
                    <Typography variant='h1' style={{ fontWeight: '400', fontSize: '26px', lineHeight: '35.52px' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu.
                    </Typography>
                </ParaTypography>
                <PrimaryButton>
                    <Typography variant='h4' style={{fontWeight: '400', fontSize: '18px', lineHeight: '18px', color:'#fff'}}>
                        Get started
                    </Typography>
                </PrimaryButton>
            </DiscoverTypographyBox>
            <ImageLeft />
            <ImageRight />
            </DiscoverContainer>
        </React.Fragment>
    )
}

export default Content