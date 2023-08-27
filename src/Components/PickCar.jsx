import React from "react";

export default function PickCar(props) {

    
  return (
    <section className="pick--car--section">
        <div className="buttons--pick--car">
            <button className="pickcar--btn--btn"
                onClick={props.setActive}>
                {props.name}
            </button>
        </div>
        <div className="pick--car--name--box"> 
          {props.active ? (<img src={props.img} alt="car img"
           className="pick--car--image"/>) : null}
          {props.active && (
            <div className="pickcar--details">
                <h3>{props.name}</h3>
                <p>Price - £{props.price}</p>
                <p>Model - {props.model}</p>
                <p>Mark - {props.mark}</p>
                <p>Year - {props.year}</p>
                <p>Doors - {props.doors}</p>
                <p>Air Conditioning - {props.air}</p>
                <p>Transmission - {props.transmission}</p>
                <p className="car--details--fuel">Fuel - {props.fuel}</p>
            </div>
          )}
          
        </div>        
    </section>
  );
}
