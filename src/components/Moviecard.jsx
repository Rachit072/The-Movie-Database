import React from "react";

// function Moviecard(){
//     return <div className="image-scroller">
//         <div className="card-container">
//             <div className="image">
//                 <a href={URL}><img className="movie-image" src="https://www.themoviedb.org/t/p/w220_and_h330_face/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" alt="movie" /></a>
//             </div>
//             <div className="content" >
//                 <h6>Black Panther: Wakanda Forever</h6>
//                 <p></p>
//             </div>
//         </div>
//     </div>
// }
function imageurl(poster_path){
    return `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
}
function Moviecard({poster_path,title,name,id}){
    return <div className="card-container">
            <div>
                <a className="no-underline" href={`https://www.themoviedb.org/movie/${id}`}>
                    <img src={imageurl(poster_path)} alt={title} className="movie-image"/>
                </a>
            </div>
            <div>
            <a className="no-underline text-black"  href={`https://www.themoviedb.org/movie/${id}`}>
                <h3 className="content"> {title}{name} </h3>
            </a>
            </div>
        </div>
}
export default Moviecard