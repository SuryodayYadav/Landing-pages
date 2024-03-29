import React from 'react';
import Content from './Content';
import List from './List';
import FontCircle from './FontCircle';
import ImageGroup from './ImgGroup';


function EWatch(){
    return(
        <React.Fragment>
            <FontCircle />
            <Content />
            <List />
            <ImageGroup />
        </React.Fragment>
    )
}

export default EWatch