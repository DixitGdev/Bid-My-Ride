
import React from "react";
import AuctionItem from "./AuctionItem";
 
const Auction = () =>
    <div className="projects">
    <h1 className="project_heading" style={{'color':'black'}}>Create Auction</h1>
    <div className="projectList">
    <AuctionItem />
    </div>
    </div>
    ;

export default Auction;
