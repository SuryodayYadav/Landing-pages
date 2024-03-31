import { Box, ButtonBase, Grid } from "@mui/material";
import styled from '@emotion/styled'

export const CompWrapper = styled('div')(() => ({
    display: 'flex',
    flexDirection: 'row',
    width: '100vw',
    height: '185vh',
    backgroundColor: '#2F2F2F !important',
    justifyContent: 'space-around',
    margin:'auto'
}))

export const TextWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '450px',
    height: '580px',
    top: '100px',
    left: '100px',
    alignContent: 'center'
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
    width: '300px',
    height: '200px',
    fontSize: '24px',
    lineHeight: '36px',
    fontWeight: '400',
    color: '#fff',
    fontFamily: 'cursive'
}))

export const CardWrapper = styled(Box)(() => ({
    display: 'flex',
    flexWrap: 'wrap',
    position:'relative',
    flexDirection: 'column',
    width: '750px',
    height: '800px',
    top: '20px',
    right: '30px',
    flexGrow: '1'
}))

export const ExploreButton = styled(ButtonBase)(() => ({
    width: '160px',
    height: '50px',
    borderRadius: '30px',
    fontSize: '18px',
    padding: '20px 40px',
    color: 'black', 
    background: 'white',
    marginTop: '50px',
}))

export const ImageGrid = styled(Grid)(() => ({
    width: 'calc(25% - 10px)', 
    height: 'calc(25% - 10px)',
    margin: '5px',
    borderRadius: '20px',
    overflow: 'hidden'
}))