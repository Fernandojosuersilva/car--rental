import React, { useState } from "react";
import { BsTelephoneFill } from 'react-icons/bs'
import { MdEmail } from 'react-icons/md'
import { MdLocationOn } from 'react-icons/md'
import { MdError } from 'react-icons/md'
import { AiFillCheckCircle } from 'react-icons/ai'

export default function Contact(){

    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [validEmail, setValidEmail] = useState(false)
    const [error, setError] = useState(null)
    const [contactEmailSent, setContactEmailSent] = useState(false)

    const verifyEmail = () => {
        setError(null)
        const emailIsValid = /^\S+@\S+\.\S+$/.test(email)
        const fieldsFilled = fullName === "" || message === "";
        
        if(emailIsValid && !fieldsFilled){
            setValidEmail(true)
            setContactEmailSent('Email sent sucessfuly!')
            
        }else if(emailIsValid && fieldsFilled){
            setError("Please, fill all the fields.")
            setContactEmailSent(false)
        }else{
            setError('Please enter a valid email address.');
            setContactEmailSent(false);
        }
    }


    return(
        <section className="contact--section">
            <div className="contact--text">
                <h3>Contact us</h3>
                <h2>Need additional information?</h2>
                <p>A multifaceted professional skilled in multiple 
                    fields of research, development as well as a learning 
                    specialist. Over 15 years of experience.
                </p>
            </div>
            <div className="contact--content">

                <div className="contact--info"> 
                    <h2>Contact Info</h2>
                    <a><BsTelephoneFill /> (+44) 12345678910</a>
                    <a><MdEmail /> rentalcar@rentalcar.co.uk</a>
                    <a><MdLocationOn /> Lancing, UK</a>
                </div>

                <div className="contact--form">
                    <label htmlFor="fullName">
                        Full name
                        <input 
                            id="fullName"
                            type='text'
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            placeholder="Your name"
                        />
                    </label>
                    <label htmlFor="email">
                        Email
                        <input
                            id="email" 
                            type='email'
                            value={email}
                            placeholder="email"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label htmlFor="message">
                        Message
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            rows="4"
                            cols="51"
                            placeholder="Leave us a message..."
                        >

                        </textarea>
                    </label>
                    {contactEmailSent && (
                        <div className="email--sent--contact">
                            <AiFillCheckCircle
                            className="email--check--icon"
                            /> {contactEmailSent}
                        </div>
                    )}
                    {error && (
                        <div className="error--msg--contact">
                            {console.log('error state:', error)}
                            <MdError 
                            className="error--icon--contact" />  
                             {error}
                        </div>
                    )}
                    <button 
                    onClick={verifyEmail}
                    className="submit--contact--form">
                        Send Message
                    </button>
                </div>
            </div>
        </section>
    )
}