import React from 'react'

export default function TrailerList() {
    const [movies,setmovies] = useState([]) 

    useEffect(()=>{
        getmovie();
    },[]);

    const getmovie = async()=>{
        let movie = await
        axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=2240a90f6db43839a5c5c70f567b37a7`);
        setmovies(movie.data.results);
    }

    return <div className="movielist">
        {   movies.map((movie)=>{
                return <Moviecard {...movie}/>  
            })
        }
    </div>
}
