import React from "react";

function url(poster_path){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}
export default function TrailerCard({poster_path,title,name}){
    return <div className="Tcard-container">
            <div>
                <img src={imageurl(poster_path)} alt={title} className="movie-trailer"/>
            </div>
            <div >
                <h3 className="trailer"> {title}{name} </h3>
            </div>
        </div>
}