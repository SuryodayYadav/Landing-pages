import { Box, ButtonBase } from "@mui/material";
import styled from '@emotion/styled'

export const CompWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '150vh',
    backgroundColor: '#2F2F2F',
    justifyContent: 'space-around',
}))

export const TextWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    width: '450px',
    height: '680px',
    top: '250px',
    left: '100px'
}))
export const HeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '200px',
    height: '230px',
}))
export const ParaWrapper = styled('p')(() => ({
    display: 'flex',
    flexDirection: 'column',
    marginTop: '30px',
    width: '300px',
    height: '200px',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'cursive'
}))

export const ExploreButton = styled(ButtonBase)(() => ({
    width: '160px',
    height: '50px',
    borderRadius: '30px',
    fontSize: '18px',
    padding: '20px 40px',
    color: 'black',
    background: 'white',
    marginTop: '70px',
}))

export const ImageWrapper = styled(Box)(() => ({
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridTemplateRows: 'repeat(4, 1fr)',
    gridGap: '10px',
    position: 'absolute',
    width: '850px',
    height: '800px',
    top: '100px',
    left: '550px'
}))

