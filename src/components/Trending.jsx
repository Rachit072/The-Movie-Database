import React from "react";
import Movielist from "./Movielist";

function Trending(){
        
    return <div>
        <div className="trending-section">
            <div className="trending-container">
                <div className="trending-title"><h2>Trending</h2></div>
                    <div className="toggle-container">
                        <div className="switch-container">
                            <div className="btn"></div>
                            <button type="button" className="togglemovie" >Today</button>
                            <button type="button" className="togglemovie" >This Week</button>
                        </div>
                    </div>
            </div>
            <Movielist/>
        </div>
    </div>

}

export default Trending