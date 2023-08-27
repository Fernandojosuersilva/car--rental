import React, { useRef } from "react";
import Hero from "../Components/Hero";
import BookCar from "../Components/BookCar";
import PlanTrip from "../Components/PlanTrip";
import VehicleModels from "../Components/VehicleModels";
import ChooseUs from "../Components/ChooseUs";
import TestimonialsHeader from "../Components/Testimonials-header";
import Marquee from "react-fast-marquee";
import Testimonials from "../Components/Testimonials";

export default function Home(){
    const bookCarContainerRef = useRef(null);

  const scrollToBookCar = () => {
    bookCarContainerRef.current.scrollIntoView({ behavior: 'smooth' });
  };
    return(
        <>
            <Hero scrollToBookCar={scrollToBookCar}/>
            <BookCar bookCarContainerRef={bookCarContainerRef}/>
            <PlanTrip />
            <VehicleModels scrollToBookCar={scrollToBookCar}/>
            <ChooseUs />
            <TestimonialsHeader/>
            <Marquee>
                <Testimonials />
            </Marquee>
        </>
    )
}