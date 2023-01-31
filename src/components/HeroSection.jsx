import React from 'react'

function Hero(){
    return (
    <div className='hero-section'>
        <div className='hero-Section1'>
            <div className='title'>
                <h1>Welcome.</h1>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
            </div>
            <div className='search'>
                <input type="text" id='searchbar' placeholder='Search for movie, tv shows, person.......' />
                <input type="submit" value="Search" id="search-btn"/>
            </div>
        </div>
        <div className='hero-Section2'>
            <div>
                <h1 id='hs2-title'>THAT'S A WRAP 2022</h1>
                <p>The best (and worst) from 2022.</p>
            </div>
            <div>
                <button id="checkit-btn">Check it out → </button>
            </div>
        </div>
    </div>
    );
}
export default Hero