import axios from "axios";

function getTrendings(data){
    return axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=2240a90f6db43839a5c5c70f567b37a7`)
}

export default getTrendings;