import React from 'react';
import Content from './Content';
import List from './List';
import FontCircle from './FontCircle';
import ImageGroup from './ImgGroup';
import { EwatchInfoLayout, EwatchLayout } from './Styled';


function EWatch() {
    return (
        <EwatchLayout>
            <EwatchInfoLayout>
                <FontCircle />
                <Content />
                <List />
            </EwatchInfoLayout>
            <ImageGroup />
        </EwatchLayout>
    )
}

export default EWatch