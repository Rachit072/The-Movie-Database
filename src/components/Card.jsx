import React from "react";
import SwitchToggle from "./Switch/SwitchToggle";

function Card({title,children,handleToday,handleWeek,toggle}){

    return <div>
        <div className="trending-section">
            <div className="trending-container flex-col justify-content-start px-10">
                <div className="flex justify-content-start gap-5">
                    <div className="trending-title "><h2>{title}</h2></div>
                    <SwitchToggle handleToday={handleToday} handleWeek={handleWeek} toggle={toggle}/>
                </div>
                <div className="pt-5 overflow-x-scroll">
                    {children}
                </div>
            </div>
        </div>
    </div>

}

export default Card