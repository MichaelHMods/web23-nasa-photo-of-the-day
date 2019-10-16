import React from "react";
import {Title, NavSectionStyles, SubTitle, NavParts, Navigation} from './Styles';

export default function NavBar(props) {
    console.log(props)

    return(
    <div className="mainContainers">
        <NavSectionStyles>
        <div className="navSection">
        

            <Title><h1 className="mainHeader">Pic of the Day</h1></Title>
            <SubTitle><h2 className="pic-title">{props.title}</h2></SubTitle> 

        
            <Navigation>
                <div className="navBar">
                <NavParts><a href="#" className="nav">Home</a></NavParts>
                <NavParts><a href="#" className="nav">About</a></NavParts>
                <NavParts><a href="#" className="nav">Photo of the Day</a></NavParts>
            </div>
            </Navigation> 
        </div>
        </NavSectionStyles>
    </div>
    )
}
