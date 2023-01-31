import React from "react";

function Header(){
    let url=""; 
    return <header>
        <div className="header-main">
         <div className="Header-container">
            <div className="nav1">
                <a href={url}><img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="TMDB" /></a>
                 <div className="nav">
                    <ul className="Header-content nav">
                        <li>Movies</li>
                        <li>TV Shows</li>
                        <li>People</li>
                        <li>More</li>
                    </ul>
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
