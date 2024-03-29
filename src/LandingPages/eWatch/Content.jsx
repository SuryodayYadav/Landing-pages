import React from "react";
import { BolderContent, ButtonGroup, ExploreButton, OrderNowButton, SmootherPara } from "./Styled";

function Content() {
    return (
        <React.Fragment>
            <BolderContent>
                The eWatch with the newest microchip technology
            </BolderContent>
            <SmootherPara>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer facilisi eget diam.
            </SmootherPara>
            <ButtonGroup>
                <OrderNowButton>Order Now</OrderNowButton>
                <ExploreButton>Explore Button</ExploreButton>
            </ButtonGroup>
        </React.Fragment>
    )
}
export default Content