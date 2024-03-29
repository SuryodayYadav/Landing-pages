import { Box, ButtonBase } from "@mui/material";
import { styled } from "@mui/styles";

export const CompWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    height: '90%',
    background: '#2F2F2F',
    margin:'auto'
}))

export const TextWrapper = styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '450px',
    height: '580px',
    top: '100px',
    left: '130px',
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
    flexDirection: 'column',
    width: '750px',
    height: '800px',
    top: '20px',
    right: '30px',
    flexGrow: '1'
}))

export const ExploreButton = styled(ButtonBase)(() => ({
    width: '180px',
    height: '66px',
    borderRadius: '36px',
    fontSize: '18px',
    padding: '24px 48px',
    color: 'black', 
    background: 'white',
    gap: '30px',

}))