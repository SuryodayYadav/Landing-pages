import styled from '@emotion/styled'
import { ButtonBase, Container } from '@mui/material'
import Box from '@mui/material/Box'

export const ImageWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around'
}))

export const BoxWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
}))
export const DiscoverContainer = styled(Container)(() => ({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-around', 
    maxWidth: '100%', 
    marginBottom: '150px'

}))
export const DiscoverTypographyBox = styled(Box)(() => ({
    width: '444px',
    height: '473px',
    position: 'relative',
    top: '37px',
}))
export const DiscoverTypography = styled(Box)(() => ({
    width: '444px',
    height: '231px',
}))

export const ParaTypography = styled(Box)(() => ({
    width: '386px',
    height: '144px',
}))

export const PrimaryButton = styled(ButtonBase)(() => ({
    width: '157px',
    height: '50px',
    borderRadius: '16px',
    padding:'16px, 32px, 16px, 32px',
    gap: '10px',
    backgroundColor: 'rgba(37, 37, 37, 1)'
}))

export const LeftImage = styled(Box)(() => ({
    width: '408px',
    height: '480px',
    borderRadius: '16px',
    position: 'relative',
    top: '65px',
    left: '25px',
}))

export const RightImage = styled(Box)(() => ({
    width: '408px',
    height: '480px',
    borderRadius: '16px',
    position: 'relative',
    top: '117px',
    left: '68px',
}))