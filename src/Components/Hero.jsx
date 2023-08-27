import React from "react";
import Mercedes from "/assets/cars/mercedesBenz.png"
import { FaCheck } from "react-icons/fa"



export default function Hero(props){
    return(
        
        <>
            <div className="hero--container">
                <img src={Mercedes} alt="Mercedes Benz" className="hero--mercedes" />
                <div className="plan--trip--hero">
                    <p className="plan--trip--text--hero">Plan your trip now!</p>
                    <h2 className="header--text--hero">Save with <span className="us--text">us</span>!</h2>
                    <p className="header--paragraph--hero">Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
                    </p>
                    <div>
                        <button className="book--btn--hero"
                         onClick={props.scrollToBookCar}>
                            Book Ride <FaCheck /></button>
                        <button className="learn--btn--hero">Learn More</button>
                    </div>
                </div>
            </div>
        </>
    )
}