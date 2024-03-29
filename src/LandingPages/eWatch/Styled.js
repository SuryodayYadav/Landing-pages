import styled from "@emotion/styled";
import { Box, ButtonBase } from "@mui/material";

export const BolderContent = styled(Box)(() => ({
    width: '629px', 
    height: '240px',
    fontWeight: '600',
    margin: '30px',
    fontSize: '64px',
    lineHeight: '80px',
    color: 'rgba(5,5,5,1)'
}))

export const SmootherPara = styled(Box)(() => ({
    width: '629px', 
    height: '90px',
    fontWeight: '400',
    margin: '30px',
    fontSize: '24px',
    lineHeight: '30px',
    color: 'rgba(51,51,51,1)'
}))

export const ButtonGroup = styled(Box)(() => ({
    width: '505px',
    height: '66px',
    gap: '32px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
}))

export const OrderNowButton = styled(ButtonBase)(() => ({
    width: '200px',
    height: '66px',
    borderRadius: '16px',
    gap: '10px',
    margin: '20px',
    fontSize: '20px',
    padding: '15px 30px',
    background: "rgba(5, 5, 5, 1)",
    color: '#fff'
}))
export const ExploreButton = styled(ButtonBase)(() => ({
    width: '200px',
    height: '66px',
    borderRadius: '16px',
    fontSize: '18px',
    padding: '15px 30px',
    color: 'black', 
    margin: '20px',
    border: '1px solid rgba(51, 51, 51, 1)'
}))

export const ListBox = styled(Box)(() => ({
    display: 'flex', 
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    position: 'relative',
    top: '75px',
    width: '652px', 
    height: '118px',
    margin: '30px',
    borderRadius: '24px',
    border: '1px solid rgba(17, 17, 17, 1)',
    padding: '24px',
    gap: '80px',

}))

export const Frames = styled('div')(() => ({
    width: '91px',
    height: '38px',
    display: 'flex', 
    flexDirection: 'column',
    textAlign: 'center',
    margin: 'auto',
    fontWeight: '400',
    fontSize: '16px',
    lineHeight: '16.77px',
    color: 'rgba(17, 17, 17, 1)'
}))

export const FontCirclediv = styled('div')(() => ({
    width: '100px', 
    height: '100px',
    margin: '30px',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'    
}))

export const FontCircleText = styled('span')(() => ({
    position: 'absolute',
}))
export const ImageGroupBox = styled(Box)(() => ({
    margin: '160px',
    position: 'relative',
    width: '636px', 
    height: '780px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}))
export const Stroke1 = styled(Box)(() => ({
    position: 'absolute',
    width: '480px', 
    height: '568px',
    border: '2px solid black',
    borderRadius: '0px 48px',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'start'
}))

export const BoxStar = styled('div')(() => ({
    position: 'relative',
    width: '136px', 
    height: '136px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    margin: '-14%'
}))

export const Unsplash = styled(Box)(() => ({
    position: 'relative',
    width: '480px', 
    height: '628px',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    borderRadius: '52px',
    marginTop: '20%', 
    marginLeft: '15%'
}))

export const Stroke2 = styled(Box)(() => ({
    position: 'absolute',
    width: '310px', 
    height: '476px',
    border: '2px solid black',
    borderRadius: '0px 40px 40px 40px',
    margin: '60% 05% 0% 60%'
}))



