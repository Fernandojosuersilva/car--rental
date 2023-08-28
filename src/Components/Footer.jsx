import React, { useState } from "react";
import { FaCar } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import emailjs from 'emailjs-com'


export default function Footer(){
    const [footerSubs, setFooterSubs] = useState("")
    const [emailSent, SetEmailSent] = useState(false)
    const [error, setError] = useState(null)
    const [emailValid, setEmailValid] = useState(false)
    
    const handleSubscribe = () => {
        setError(null)
        const isEmailValid = /^\S+@\S+\.\S+$/.test(footerSubs);
        setEmailValid(isEmailValid)

        if(emailValid){
            emailjs.send(
                'service_3iizl2b',
                'template_hwa95fe',
                {to_email: footerSubs},
                'obkSD_aTn5fASTK3M'
            )
            .then(response => {
                console.log('confirmation email sent:', response);
                SetEmailSent(true)
            })
            .catch(error => {
                console.log('Error sending email:', error)
                setError('Error: Email can not be sent')
                SetEmailSent(false)
            })
        }else{
            setError('Please, enter a valid email address.')
            SetEmailSent(false)

        }
    }

    return(
        <footer className="footer--section">
        <h1 className="brand"><FaCar className="icon--faCar" /> Car 
        <span className="brand--word">Rental</span>
        </h1>            
            <div className="footer--container">
                <div className="footer-company">
                    <h3>Company</h3>
                    <p><a href="#" className="footer--link">
                        Our Team</a></p>
                    <p><a href="#" className="footer--link">
                        Contact us</a></p>
                </div>
                <div className="footer--workingHours">
                    <h3>Working Hours</h3>
                    <p>Mon - Fri</p>
                    <p>8am - 6pm</p>
                </div>
                <div className="footer--subscribe">
                    
                    <h3>Subscription</h3>
                {emailSent && (
                    <div className="email--sent--footer">
                        Email sent sucessfully!
                    </div>
                )}
                
                {error && (
                    <div className="footer--email--error">
                        {error}
                    </div>
                )}
                    <input
                    id="email"
                    autoComplete="email" 
                    type='email'
                    value={footerSubs}
                    className="footer--input"
                    placeholder="Email address"
                    onChange={e => setFooterSubs(e.target.value)}
                
                    />
                    <button 
                    onClick={handleSubscribe}
                    className="footer--btn">
                        <AiOutlineMail className="mail--icon" />
                     Subscribe</button>
                </div>
            </div>
            <p className="footer--copyright">Developed by Fernando Rocha &copy; </p>
        </footer>
    )
}