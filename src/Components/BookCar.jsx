import React, { useState, useEffect } from "react";
import {FaCar, FaCalendar, FaInfoCircle, FaWindowClose,
FaMapPin,
FaCalendarDay} from "react-icons/fa"
import { BiSolidErrorCircle } from 'react-icons/bi'
import { MdLocationOn } from 'react-icons/md'
import CarMercedes from "/assets/cars/benz.jpg"
import Toyota from "/assets/cars/toyotacamry.jpg"
import Audi from "/assets/cars/audia1.jpg"
import Ford from "/assets/cars/ford.jpeg"
import Volks from "/assets/cars/golf6.jpg"
import BMW from "/assets/cars/bmw320.jpg"

export default function BookCar(props){

    //Booking cars
    const [CarType, setCarType] = useState("");
    const [PickUpLocation, setPickUpLocation] = useState("");
    const [DropOfLocation, setDropOfLocation] = useState("");
    const [pickUpTime, setPickUpTime] = useState("");
    const [dropOfTime, setDropOfTime] = useState("");

    //modal info
    const [modal, SetModal] = useState(false);
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      age: "",
      address: "",
      city: "",
      zipcode: "",
      isChecked: true,
      success: null,
      errorModal: null,
      error: null
    });
    // closing modal pressing esc
    useEffect(() => {
      const handleKeyDown = (e) => {
          if (e.key === "Escape" && modal) {
              closeModal(e);
          }
      };
        if(modal){
          window.addEventListener("keydown", handleKeyDown);
        }
  
      return () => {
          window.removeEventListener("keydown", handleKeyDown);
      };
    }, [modal]);
    //manage scroll
    useEffect(() => {
      const handleBodyScroll = (event) => {
          if (modal) {
              event.preventDefault();
          }
      };
  
      if (modal) {
          document.body.style.overflow = 'hidden';
          window.addEventListener('scroll', handleBodyScroll, { passive: false });
      } else {
          document.body.style.overflow = 'auto';
          window.removeEventListener('scroll', handleBodyScroll);
      }
  
      return () => {
          document.body.style.overflow = 'auto';
          window.removeEventListener('scroll', handleBodyScroll);
      };
  }, [modal]);

    const openModal = (event) => {
        event.preventDefault();
        if(
            CarType === "" ||
            PickUpLocation === "" ||
            DropOfLocation === "" || 
            pickUpTime === "" || 
            dropOfTime === ""
        ){
            SetModal(false)
            setFormData({
              ...formData,
              success: null, 
              error: 'Please, fill up all the fields',
            });
        }else{
            setFormData({...formData, 
              error: null, 
              success: null});
            
            SetModal(!modal)
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    
    }

    const handleInputChange = (event) => {
      const { name, value } = event.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value
      }));
    };

    const handleCheckBox = () => {
      setFormData((prevData) => ({
        ...prevData,
        isChecked: !prevData.isChecked
      }));
    };
      
    // confirm modal booking
    const handlePickUpTime = (event) => {
        setPickUpTime(event.target.value)
    }

    function handleCarType(event){
        setCarType(event.target.value);
    }
    function handleDropOff(event){
        setDropOfLocation(event.target.value);
    }
    function handlePickUp(event){
        setPickUpLocation(event.target.value);
    }

    //close modal when X is clicked
    function closeModal(e){
        e.preventDefault()
        SetModal(false)
    }
    
    //handle error/success messages (Booking done)
    function handleReserveModalButton(e){
        e.preventDefault();

        const isEmailValid = /^\S+@\S+\.\S+$/.test(formData.email)
        setFormData(formData)

        if(formData.firstName === "" ||
        formData.lastName === "" ||
        formData.email === "" ||
        formData.phone === "" ||
        formData.age === "" || 
        formData.address === "" || 
        formData.city === "" || 
        formData.zipcode === ""){

          setFormData({...formData, errorModal: 'Please, fill up all the fields.'})
          console.log('getting error:', formData.errorModal)

        }else if(!isEmailValid){
          setFormData({...formData, errorModal: 'Please, enter a valid email address.'})
        }else{
          console.log('done:', formData.success)
          setFormData({...formData, 
            success: 'Done!', 
            errorModal: null,
            error: null
          })
          SetModal(!modal)
        }
        
        
    }

    const handleDropOfTime = (e) => {
      const selectDropOfTime = new Date(e.target.value)
      const selectPickUpTime = new Date(pickUpTime)

      if(selectDropOfTime < selectPickUpTime){
        console.log('Drop off date cannot be before pickup date');
        (<div>Drop-off date cannot be before pickup date.</div>)

        return;
      }
      setDropOfTime(e.target.value);
    }

    let imgUrl;
    switch (CarType.toLowerCase()) {
        case "mercedez":
        imgUrl = CarMercedes;
        break;
        case "ford":
        imgUrl = Ford;
        break;
        case "audi":
        imgUrl = Audi;
        break;
        case "bmw":
        imgUrl = BMW;
        break;
        case "volkswagen":
        imgUrl = Volks;
        break;
        case "toyota":
        imgUrl = Toyota;
        break;
        default:
        imgUrl = "";
  }


    return(
        <div className="bookcar--header" id="header">
            <div className="bookCar--container" ref={props.bookCarContainerRef}>
                 {formData.success && (
                    <div className="success--message">
                        {formData.success}
                    </div>
                  )}
                  {formData.error && (
                    <div className="error--message">
                      <BiSolidErrorCircle className="error--icon" /> {formData.error}
                    </div>
                  )}
                <h3 className="bookCar--content--header">Book a car</h3>

                <form className="bookCar--inputs">
                    
                    <div className="box--form bookcar--carType">
                        <label htmlFor="select-car-type">
                            <FaCar className="iconFa car--icon"/> Select Your Car Type
                            <br />
                        </label>    
                            <select
                             id="select-car-type" 
                             value={CarType} 
                             onChange={handleCarType}
                             className="select-car-type">
                                <option>Mercedez</option>
                                <option>Ford</option>
                                <option>Audi</option>
                                <option>Volkswagen</option>
                                <option>BMW</option>
                                <option>Toyota</option>
                                <option value="" disabled> Select a option</option>
                            </select>
                    </div>

                    

                    <div className="box--form pickup">
                        <label htmlFor="location--pickup">
                            <MdLocationOn className="iconMd"/>Pick Up
                            <br />
                        </label>
                        <select 
                        id="location--pickup"
                        value={PickUpLocation} 
                        onChange={handlePickUp}
                        className="location--PickUp">
                            <option>London</option>
                            <option>Paris</option>
                            <option>Barcelona</option>
                            <option>Lisbon</option>
                            <option value="" disabled> Select a option</option>
                        </select>
                    </div>
                    <div className="box--form dropof">
                       
                        <label>
                            <MdLocationOn className="iconMd"/> Drop-of
                            <br />
                            <select value={DropOfLocation} onChange={handleDropOff} className="location--DropOf">
                            <option>London</option>
                            <option>Paris</option>
                            <option>Barcelona</option>
                            <option>Lisbon</option>
                            <option value="" disabled> Select a option</option>
                            </select>
                        </label>
                    </div>
                    
                   

                    <div className="box--form pickupTime">
                    <label htmlFor="picktime">
                        <FaCalendar className="iconFa"/>Pick Up
                        <br />
                    </label>
                        <input
                            id="picktime"
                            value={pickUpTime}
                            onChange={handlePickUpTime}
                            type="date"
                        >
                        </input>
                    </div>

                    
                    <div className="box--form dropOfTime">
                    <label htmlFor="dropoftime">
                        <FaCalendar className="iconFa"/>Drop of
                        <br />
                    </label>
                        <input 
                            id="dropoftime"
                            value={dropOfTime}
                            onChange={handleDropOfTime}
                            type="date"
                        >

                        </input>
                    </div>
                    
                    <button onClick={openModal}
                     type="submit"
                      className="bookCar--btn">
                        Search
                    </button>
                </form>
            </div>

            {/* modal---------------------. */}


        <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
        {/* title */}
        <div className="booking-modal_header">
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <span className="windowClose--btn">
              <FaWindowClose className="close--btn" onClick={closeModal}/>
          </span>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <FaInfoCircle /> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5><FaMapPin /> Location & Date</h5>
              <span>
                
                <div>
                  <h6> <MdLocationOn /> Pick-Up Date & Time</h6>
                  <p>
                    {pickUpTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
        
                <div>
                  <h6><MdLocationOn /> Drop-Off Date & Time</h6>
                  <p>
                    {dropOfTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <div>
                  <h6><FaCalendarDay /> Pick-Up Location</h6>
                  <p>{PickUpLocation}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6><FaCalendarDay /> Drop-Off Location</h6>
                  <p>{DropOfLocation}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {CarType}
            </h5>
            {imgUrl && <img 
                src={imgUrl} 
                alt="car_img"
                className="modal--image"
                // style={{width: imgWidth, height: imgHeight}}
            />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label htmlFor="firstname">
                  First Name <b>*</b>
                </label>
                <br />
                <input
                  id="firstname"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                
                <p className="error-modal">This field is required.</p>
                
              </span>

              <span>
                <label htmlFor="lastName">
                  Last Name <b>*</b>
                </label>
                <br />

                <input
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label htmlFor="phoneNumber">
                  Phone Number <b>*</b>
                </label>
                <br />

                <input
                  id="phoneNumber"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  type="num"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="age">
                  Age <b>*</b>
                </label>
                <br />
                <input
                  id="age"
                  name="age"
                  value={formData.age}
                  onChange={handleInputChange}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label htmlFor="email">
                  Email <b>*</b>
                </label>
                <br />
                <input
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="address">
                  Address <b>*</b>
                </label>
                <br />
                <input
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label htmlFor="city">
                  City <b>*</b>
                </label>
                <br />
                <input
                  id="city"
                  name='city'
                  value={formData.city}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label htmlFor="zipCode">
                  Zip Code <b>*</b>
                </label>
                <br />
                <input
                  id="zipCode"
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleInputChange}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__checkbox">
              <label htmlFor="checkbox">
              
                <input 
                id="checkbox"
                onChange={handleCheckBox}
                type="checkbox"
                checked={formData.isChecked} 
                />
                Please send me all news and updates
              </label>
              
            </div>
            {/* error message */}
            {formData.errorModal && (
              <div className="modal--error--message">
                <BiSolidErrorCircle className="error--icon"/> {formData.errorModal}
              </div>
            )}
            

            <div className="modal--reserve--button">
              <button 
              className="modal--reserve--btn"
              onClick={handleReserveModalButton}>Reserve Now</button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
        
       
    )
}