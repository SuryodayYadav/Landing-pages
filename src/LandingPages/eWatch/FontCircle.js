import React from "react"
import { FontCircleText, FontCirclediv } from "./Styled"
import watch from './assets/Vector (3).png'

function FontCircle(){
    return(
        <FontCirclediv>
            <img src={watch} alt="watch"/>
            <FontCircleText>
                <span style={{position: 'relative', width: '9px', height: '16px', rotate: '149.74', top: '87.12px', left: '13.24px', lineHeight:'16.35px'}}>L</span>
            {/* Lorem ipsum dolor sit amet, cons */}
            </FontCircleText>
        </FontCirclediv>
    )
}

export default FontCircle