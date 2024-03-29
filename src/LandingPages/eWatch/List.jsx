import React from 'react';
import { Frames, ListBox } from './Styled';
import sun from './assets/Vector (1).png'
import star from './assets/Icons.png'
import eye from './assets/Icons (1).png'
import world from './assets/Vector (2).png'

function List(){
    return(
        <ListBox>
            <Frames>
                <img src={sun} alt='sun' style={{width: '22px', height: '21.9px', marginLeft: '5px'}}/>
                <p style={{margin: '2px'}}>Lorem ipsu dolor amet</p>
            </Frames>
            <Frames>
                <img src={star} alt='star'style={{width: '22px', height: '21.9px', marginLeft: '5px'}}/>
                <p style={{margin: '2px'}}>Lorem ipsu dolor amet</p>
            </Frames>
            <Frames>
                <img src={eye} alt='eye' style={{width: '22px', height: '21.9px', marginLeft: '5px'}}/>
                <p style={{margin: '2px'}}>Lorem ipsu dolor amet</p>
            </Frames>
            <Frames>
                <img src={world} alt='world' style={{width: '22px', height: '21.9px', marginLeft: '5px'}}/>
                <p style={{margin: '2px'}}>Lorem ipsu dolor amet</p>
            </Frames>
        </ListBox>
    )
}

export default List