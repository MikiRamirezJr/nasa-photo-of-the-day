import React from "react";


const NasaPhoto = (props) => {
    return (
       <div className="nasa-photo-wrapper">
        <h1>{props.photo.title}</h1>
        <p>{props.photo.date}</p>
        <img src={props.photo.hdurl} alt=""/>
        <p className="explanation">{props.photo.explanation}</p>
        </div>
    )
}

export default NasaPhoto;