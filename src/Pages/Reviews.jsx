import React from "react";
import Marquee from "react-fast-marquee";
import Testimonials from "../Components/Testimonials";
import TestimonialsHeader from "../Components/Testimonials-header";


export default function Reviews(){
    return(
        <>
            <TestimonialsHeader />
            <Marquee>
                <Testimonials />
            </Marquee>
        </>
    )
}