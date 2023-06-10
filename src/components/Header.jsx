import React,{useState} from "react";

function Header(){
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isOpen4, setIsOpen4] = useState(false);

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    const toggleDropdown2 = () => {
        setIsOpen2(!isOpen2);
      };
    const toggleDropdown3 = () => {
       setIsOpen3(!isOpen3);
    };
    const toggleDropdown4 = () => {
       setIsOpen4(!isOpen4);
    };
    let url=""; 
    return <header>
        <div className="header-main">
         <div className="Header-container">
            <div className="nav1">
                <a href={url}><img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" /></a>
                 <div className="nav">
                    <div className="Header-content nav relative inline-block">
                        <div className="cursor-pointer"  onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>Movies
                        {isOpen && (
                        <ul className="absolute  py-2 bg-white text-gray-800 rounded  top-full left-0">
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/movie">Popular</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/movie/now-playing">Now Playing</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/movie/upcoming">Upcoming</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/movie/top-rated">Top Rated</a></li>
                        </ul>
                        )}
                        </div>
                        <div className="cursor-pointer" onMouseEnter={toggleDropdown2} onMouseLeave={toggleDropdown2}>TV Shows
                        {isOpen2 && (
                        <ul className="absolute  py-2 bg-white text-gray-800 rounded  top-full left-18">
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/tv">Popular</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/tv/airing-today">Airing Today</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/tv/on-the-air">On TV</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black"  href="https://www.themoviedb.org/tv/top-rated">Top Rated</a></li>
                        </ul>
                        )}
                        </div>
                        <div className="cursor-pointer" onMouseEnter={toggleDropdown3} onMouseLeave={toggleDropdown3}>People
                        {isOpen3 && (
                        <ul className="absolute  py-2 bg-white text-gray-800 rounded  top-full left-40">
                            <li className="pr-8 py-1 "><a className="no-underline text-black" href="https://www.themoviedb.org/person">Popular People</a></li>
                        </ul>
                        )}
                        </div>
                        <div className="cursor-pointer" onMouseEnter={toggleDropdown4} onMouseLeave={toggleDropdown4}>More
                        {isOpen4 && (
                        <ul className="absolute  py-2 bg-white text-gray-800 rounded  top-full left-60">
                            <li className="pr-8 py-1 "><a className="no-underline text-black" href="https://www.themoviedb.org/discuss">Discussions</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black" href="https://www.themoviedb.org/leaderboard">Leaderboard</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black" href="https://www.themoviedb.org/talk">Support</a></li>
                            <li className="pr-8 py-1 "><a className="no-underline text-black" href="https://developer.themoviedb.org/docs">API</a></li>
                        </ul>
                        )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="nav2">
                <ul  className="nav">
                    <li><i class="fa-sharp fa-solid fa-plus"></i></li>
                    <li><button id="btn-lang">EN</button></li>
                    <li>Login</li>
                    <li>Join TBDB</li>
                </ul>
                <div className="search-glass"><i class="fa-solid fa-magnifying-glass"></i></div>
            </div>        
        </div> 
    </div>
</header>
}
export default Header
