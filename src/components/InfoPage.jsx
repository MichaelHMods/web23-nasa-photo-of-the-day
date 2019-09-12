import React, {useState, useEffect} from "react";
import axios from 'axios';
import PhotoCard from "./PhotoCard";
import NavBar from './NavBar';





export default function TestPage() {
    const [pic, setPic] = useState();
    const [title, setTitle] =useState();



useEffect(() => {
    axios
        .get('https://api.nasa.gov/planetary/apod?api_key=fUD1Xs2Np9sb8t5d0fVLk3vDuzg2XK9MQDn4vOfJ')
        .then(res => {
            console.log(res.data.title);
            const photo = res.data.url;
            const headline = res.data.title;
            console.log('res.dat', res.data.url)
            setPic(photo);
            setTitle(headline);
        })

        .catch(err => { 
            console.log('mistake',err);
            
        });
    }, [])
    
    
    return(
        <div className="main">
            
            <NavBar
                key={title}
                id={title}
                title={title}/>
            <PhotoCard 
                key={pic}
                id={pic}
                url={pic}
            /> 
            
                
            
            <p>stuff inside</p>
        </div>
    )

    
}