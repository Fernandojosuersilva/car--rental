import React from "react";
import { FaCarSide } from "react-icons/fa";
import { BsFillBuildingsFill } from 'react-icons/bs'
import { GiHomeGarage } from 'react-icons/gi'
import PlanTrip from "../Components/PlanTrip";

export default function About(){
    return(
        <section className="about--section">
            <div className="about--text">
                <div className="about--car--image">
                    <img src="./assets/aboutImg/about3.jpg"
                    alt="car rental image"
                    className="about--car--rental--image"
                    />
                </div>
                <div className="about--text--header">
                    <h3>About Our Company</h3>
                    <h2>You start the engine and your adventure
                        begins
                    </h2>
                    <p>Certain but she but shyness why cottage.
                        Guy the put instrument sir entreaties affronting.
                        Pretended exquisite see cordially the you. Weeks
                        quiet do vexed or whose. Motionless if no to affronting
                            imprudence no precaution.
                        My indulged as disposal strongly attended.
                    </p>
                    
                </div>
                
            </div>
            <div className="about--icons">
                 
                <p><FaCarSide className="about--icons--icons"/> <span
                 className="about--span">20 </span>
                 <span className="about--text--span">Car Types</span>
                </p>
                
                <p><BsFillBuildingsFill className="about--icons--icons"/> <span
                 className="about--span">85 </span>
                  <span className="about--text--span">Rental Outlets</span>
                </p> 
                
                <p><GiHomeGarage className="about--icons--icons"/> <span
                 className="about--span">75 </span>
                  <span className="about--text--span">Repair Shop</span>
                </p> 
            </div>
            <div className="about--plan--trip">
                <PlanTrip />
            </div>
            
        </section>
    )
}