import React, {useState, useEffect} from "react";
import axios from 'axios';

export default function TestPage() {
    const [pic, setNewPic] = useState();


useEffect(() => {
    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
        .then(res => {
            console.log(res.data.url);
        })

        .catch(err => { 
            console.log('you fucked up',err);
            
        });
    }, [])
    return(
        <div className="main-container">
            <p>stuff inside</p>
        </div>
    )
}