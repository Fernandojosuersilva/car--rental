import React from "react"

export default function ChooseUs(){
    return(
        <section className="choose--section">
            <div className="chooseUs--header">
                <h1>Save big with our cheap car rental!</h1>
                <p>Top Airports. Local Suppliers. <span
                 className="choose--time--support">24/7</span> Support.</p>
            </div>
            <div className="car--grouped--container">
                <img src="./assets/cars/used-cars-chicago.png" alt="car grouped image"
                className="car--grouped--img"
            />
            </div>
            <div className="choose--text--container">
                <h3>Why choose us?</h3>
                <h2>Best valued deals you will ever find</h2>
                <p>
                Discover the best deals you'll ever 
                find with our unbeatable offers. 
                We're dedicated to providing you 
                with the best value for your money, 
                so you can enjoy top-quality services
                 and products without breaking the bank.
                  Our deals are designed to give you the
                   ultimate renting experience, so don't 
                   miss out on your chance to save big.
                </p>
                <div className="choose--btn">
                    <a href="#">
                    Find Details &gt; </a>
                </div>
            </div>

        </section>
    )
}