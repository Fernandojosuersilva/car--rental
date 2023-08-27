import React from "react";
import SelectCar from "/assets/Trip/icon1.png"
import Contact from "/assets/Trip/icon2.png"
import Drive from "/assets/Trip/icon3.png"


export default function PlanTrip(){
    return(
        <section className="plan--trip--section">
            <div className="plan--trip--container--component">
                <div className="plan--trip--title">
                    <h3>Plan your trip now</h3>
                    <h2>Quick & Easy car rental</h2>
                </div>
                <div className="plan--trip--boxes">
                    <div className="plan--trip--boxes--box">
                        <img src={SelectCar} alt="select car icon img" />
                        <h3>Select a car</h3>
                        <p>We offers a big range of vehicles for all your driving needs.
                    We have the perfect car to meet your needs</p>
                    </div>
                    <div className="plan--trip--boxes--box">
                        <img src={Contact} alt="contact info icon img"/>
                        <h3>Contact us</h3>
                        <p>Our knowledgeable and friendly operators are always ready to
                  help with any questions or concerns</p>
                    </div>
                    <div className="plan--trip--boxes--box drive--box">
                        <img src={Drive} alt="car icon img"/>
                        <h3>Let's Drive</h3>
                        <p>Whether you're hitting the open road, we've got you covered
                  with our wide range of cars</p>
                    </div>
                </div>
            </div>
        </section>
    )
}