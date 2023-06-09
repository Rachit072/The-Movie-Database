import React from "react";
import SwitchToggle from "./Switch/SwitchToggle";

function Card({title,children,handleToday,handleWeek,toggle}){

    return <div>
        <div className="trending-section">
            <div className="trending-container flex-col justify-content-start px-5">
                <div className="flex  gap-5">
                    <div className="trending-title text-xs " style={{padding:"3px"}}><h2>{title}</h2></div>
                    <SwitchToggle handleToday={handleToday} handleWeek={handleWeek} toggle={toggle}/>
                </div>
                <div >
                    {children}
                </div>
            </div>
        </div>
    </div>

}

export default Card;