import { Box, ButtonBase, Grid } from "@mui/material";
import styled from '@emotion/styled'

export const PageWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
}))
export const CompWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin:'auto'
}))

export const TextWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '450px',
    height: '580px',
    top: '50px',
    alignContent: 'center'
}))
export const HeaderWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '400px',
    height: '250px',
}))
export const Heading = styled('h1')(() => ({
    fontSize: '64px', 
    fontWeight: '700',
    lineHeight: '80px'
}))
export const ParaWrapper = styled('p')(() => ({
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    height: '250px',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: '400',
    marginTop:"30px"
    
}))

export const CardWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    flexDirection: 'column',
    width: '600px',
    height: '600px',
    top: '70px',
    left: '50px',
}))

export const ExploreButton = styled(ButtonBase)(() => ({
    width: '190px',
    height: '70px',
    borderRadius: '36px',
    fontSize: '24px',
    padding: '20px 40px',
    color: '#fff', 
    background: '#A36A4F',
    marginTop: '10px',
    
}))

export const ImageGrid = styled(Grid)(() => ({
    width: 'calc(25% - 10px)', 
    height: 'calc(25% - 10px)',
    margin: '5px',
    borderRadius: '20px',
    overflow: 'hidden'
}))

export const CoffeeBox = styled(Box)(() => ({
    width: '400px',
    height: '400px',
    position: 'absolute',
    top: 0,
    left: 0,
    objectFit: 'cover'
}))
export const TeaBox = styled(Box)(() => ({
    width: '300px',
    height: '300px',
    position: 'absolute',
    bottom: 0,
    right: 0,
    objectFit: 'cover',
    zIndex: 1111
}))

export const ListBox = styled(Box)(() => ({
    width: '750px',
    height: '150px',
    position: 'absolute',
    justifyContent: 'center',
    margin: 'auto',
    top: '750px',
    left: '300px',
    backgroundColor:'#ECDAC4',
    borderRadius: '80px',
    padding: '24px 96px',
    zIndex: '1111'
}))

export const FrameBox = styled(Box)(() => ({
    width: '600px',
    height: '120px',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'row'
}))

export const FrameChild = styled('div')(() => ({
    width: '150px',
    height: '100px',
    justifyContent: 'center',
    alignContent: 'center',
    margin: 'auto',
    marginTop: '20px',
    display: 'flex',
    flexDirection: 'column'
}))

export const BottomBox = styled(Box)(() => ({
    width: '100%',
    height: '450px',
    position: 'absolute',
    justifyContent: 'space-around',
    margin: 'auto',
    top: '850px',
    backgroundColor:'#363032',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
}))

export const PhotoBox = styled(Box)(() => ({
    width: '100',
    height: '250px',
    gap: '15px',
    color: '#D9D9D9',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '50px'
}))

