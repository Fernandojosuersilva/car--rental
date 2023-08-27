import React from 'react';
import { FaQuoteRight } from 'react-icons/fa'



export default function Testimonials(){
    return(
        <section className='testimonials--section'>
            
            <div className='testimonials--container'>
                <p>"We rented a car from this website and had an amazing experience!
                     The booking was easy and the rental rates were very
                      affordable. "
                </p>
                <img src='./assets/testimonials/fiveStar.jpg'
                alt='five star'
                className='five--star--review'
                />
                <h3>Joris Bonson</h3>
                <img src='./assets/testimonials/joris2.jpg'
                 alt='joris bonson image'
                 className='joris--bonson'/>
                 <FaQuoteRight className='FaQuoteRight'/>
            </div>
            <div className='testimonials--container'>
                <p>
                    "The car was in great condition and made our
                     trip even better. Highly
                     recommend for this car rental website!"
                </p>
                <img src='./assets/testimonials/fiveStar.jpg'
                alt='five star'
                className='five--star--review'
                />
                <h3>Tony Stark</h3>
                <img src='./assets/testimonials/tony3.jpg'
                alt='tony image'
                className='tony--stark'
                />
                <FaQuoteRight className='FaQuoteRight'/>
            </div>
            <div className='testimonials--container last'>
                <p>
                "I just wanted to say thank you,
                 great customer service and easy to 
                 pickup and leave the car at the airport. 
                 Much appreciated."
                </p>
                <img src='./assets/testimonials/fiveStar.jpg'
                alt='five star'
                className='five--star--review'
                /> 
                <h3>H. Lamilton</h3>
                <img src='./assets/testimonials/lewis.avif'
                alt='donald dump image'
                className='donald--dump'
                />
                <FaQuoteRight className='FaQuoteRight'/>
            </div>
        </section>
    )
}