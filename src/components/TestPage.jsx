import React, {useState, useEffect} from "react";
import axios from 'axios';
import PhotoCard from "./PhotoCard";





export default function TestPage() {
    const [pic, setNewPic] = useState();


useEffect(() => {
    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-14')
        .then(res => {
            // console.log(res.data.url);
            const photo = res.data;
            console.log('res.dat', res.data.url)
            console.log(photo);
            setNewPic(photo);
        })

        .catch(err => { 
            console.log('mistake',err);
            
        });
    }, [])
    
    return(
        <div className="main">
            <PhotoCard 
                key={pic}
                id={pic}
                url={pic}
            />
        
            
            <p>stuff inside</p>
        </div>
    )

    
}