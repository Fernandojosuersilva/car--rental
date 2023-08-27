import React from "react";
import CarCards from "../Components/CarCards";
import dataSell from "../Components/dataSell";


export default function Models(){

    const cars = 
        dataSell.map((item, index) => {
            return(
                <CarCards 
                key={index}
                img={item.img}
                name={item.name}
                price={item.price}
                transmission={item.transmission}
                fuel={item.fuel}
                />
            )
        })
    

    return(
        <div className="models--page">
            <div className="car--cards--text">
                <h3>Vehicle Models</h3>
                <h2>Experience Luxury On Wheels</h2>
                <p>Welcome to our exquisite collection of premium vehicles 
                    that redefine elegance and performance. 
                    Each model is a masterpiece of engineering, 
                    crafted to deliver an unparalleled driving experience. 
                    From sleek sedans to powerful SUVs, our diverse range 
                    offers a perfect blend of style, comfort, and innovation. 
                    Discover the art of driving with cutting-edge features and 
                    timeless design. Explore our meticulously curated 
                    selection of models and set your journey in motion 
                    with the pinnacle of automotive excellence. 
                    Your road to sophistication starts here.</p>
            </div>
            <div className="horizontal-line"></div>
            <div className="models--container">
                {cars}
            </div>
        </div>
    )
}