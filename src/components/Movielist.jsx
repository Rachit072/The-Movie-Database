import {React,useState,useEffect} from "react";
import Moviecard from "./Moviecard";
import axios from "axios";

function Movielist({insert}){

    const [movies,setmovies] = useState([]) 

    useEffect(()=>{
        getmovie();
    });

    const getmovie = async()=>{
        let movie = await
        axios.get(`https://api.themoviedb.org/3/${insert}?api_key=2240a90f6db43839a5c5c70f567b37a7`);
        setmovies(movie.data.results);
    }
    
    return <div className="movielist">
        {   movies.map((movie)=>{
                return <Moviecard {...movie}/>  
            })
        }
    </div>
}

export default Movielist;