import React from "react";



// import TestPage from './TestPage';

export default function PhotoCard(props) {
    console.log(props)
    return(

        <div className="card" key={props.id}>
            <img src= {props.url} alt="Star Photo" className="photoOfTheDay"/>

        </div>
        
    )
}

