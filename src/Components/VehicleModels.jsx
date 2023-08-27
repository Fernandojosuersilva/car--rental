import React, { useState } from "react";
import data from "../Components/data";
import PickCar from "./PickCar";



export default function VehicleModels(props) {
  const initialActiveStates = data.map((vehicle, index) => index === 0);

  const [activeCars, setActiveCars] = useState(initialActiveStates);

  function setActiveCar(index) {
    const newActiveCars = activeCars.map((_, i) => i === index);
    setActiveCars(newActiveCars);
  }

  return (
    <div className="vehicle--models">
        <div className="container--header">
            <h3>Vehicle Models</h3>
            <h2>Our Rental Fleet</h2>
            <p>
                Choose from a variety of our amazing vehicles to rent for your next
                adventure or business trip.
            </p>
        </div>
        
        <div className="vehicle-list">
            {data.map((vehicle, index) => (
            <PickCar
                key={index}
                active={activeCars[index]}
                setActive={() => setActiveCar(index)}
                name={vehicle[0].name}
                price={vehicle[0].price}
                img={vehicle[0].img}
                model={vehicle[0].model}
                mark={vehicle[0].mark}
                year={vehicle[0].year}
                doors={vehicle[0].doors}
                air={vehicle[0].air}
                transmission={vehicle[0].transmission}
                fuel={vehicle[0].fuel}
            />
            
            ))}
            <button onClick={props.scrollToBookCar}
             className="reserve--btn">Reserve now!</button>

        </div>
    </div>
  );
}
