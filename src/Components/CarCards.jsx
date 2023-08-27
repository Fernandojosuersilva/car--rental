import React from "react";
import { AiFillStar } from 'react-icons/ai'
import { GiGearStick } from 'react-icons/gi'
import { FaCarSide } from 'react-icons/fa'


export default function CarCards(props){

    return(
        <section className="car--cards--section">
            
            <div className="cars--cards--container">
                <img src={props.img} alt="car image"
                className="cars--card--image"
                />
                
                <div className="cards--stats">
                    <div className="card--stats--header">
                        <h2>{props.name}</h2>
                        <h2 
                            className="car--card--price">
                            £{props.price}
                        </h2>
                    </div>
                    <div className="car--card--price--icon">
                        <div className="icon--container">
                            <AiFillStar className="car--cards--icon"/>
                            <AiFillStar className="car--cards--icon"/>
                            <AiFillStar className="car--cards--icon"/>
                            <AiFillStar className="car--cards--icon"/>
                            <AiFillStar className="car--cards--icon"/>
                        </div>
                        <span className="perday">/day</span>
                    </div>
                    <div className="card--transmission--fuel">
                        <p className="transmission">
                            <GiGearStick /> {props.transmission}</p>
                        <p className="fuel">
                            <FaCarSide /> {props.fuel}</p>
                    </div>
                    
                </div>
                <button className="car--cards--btn">
                    Book Ride
                </button>
            </div>
        </section>
    )
}