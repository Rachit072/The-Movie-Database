import React from "react";
import Switch from "./Switch/Switch";

function Card({title,children,...props}){
        
    return <div>
        <div className="trending-section">
            <div className="trending-container flex-col px-10">
                <div className="flex item-center gap-5">
                    <div className="trending-title "><h2>{title}</h2></div>
                    <Switch {...props}/>
                </div>
                <div className="pt-5 overflow-x-scroll">
                    {children}
                </div>
            </div>
        </div>
    </div>

}

export default Card