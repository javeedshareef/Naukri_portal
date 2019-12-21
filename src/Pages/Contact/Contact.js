import React from 'react';
import './Contact.css';
import BannerReuse from '../BannerReuse/BannerReuse';
import ContactAddress from './ContactAddress/ContactAddress';
import { faHome, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
            <BannerReuse h1text={"Contact Us"} atext={"Home "} spantext={"Contact Us"} />


            {/* contact details */}

            <div className="container">
                <div className="headers-tab text-center mt-5">
                    <span>We Are Here For Your Help</span>
                    <h2>GET IN TOUCH FAST</h2>
                    <p>Vestibulum at magna tellus. Vivamus sagittis nunc aliquet. Vivamin orci aliquam <br /> eros vel saphicula. Donec eget ultricies ipsmconsequat.</p>
                </div>
                <div className="row">
                    <div className="address col-sm-4 col-md-12 col-lg-4 col-12">
                        <div>
                            <ContactAddress icon={faHome} text={"ADDRESS:"} ptext={"8500 lorem, New Ispum, Dolor amet sit 12301"} />
                            <ContactAddress icon={faEnvelope} text={"ADDRESS:"} ptext={"8500 lorem, New Ispum, Dolor amet sit 12301"} />
                            <ContactAddress icon={faPhone} text={"ADDRESS:"} ptext={"8500 lorem, New Ispum, Dolor amet sit 12301"} />
                        </div>

                    </div>
                    <div className="col-12 col-lg-8">
                        <div className="row">
                            <div className="col-12 col-md-12 col-lg-6 mt-4">
                                <input type="text" placeholder="Full Name" className="fullname" />
                            </div>
                            <div className="col-12 col-md-12 col-lg-6 mt-4">
                                <input type="number" placeholder="Phone number" className='fullname' />
                            </div>
                            <div className="col-12 mt-3">
                                <input type="email" placeholder="Email" className='email-tab' />
                            </div>
                            <div className="col-12 mt-3">
                                <div className="form-group">
                                    <textarea className="form-control" placeholder="Details" id="exampleFormControlTextarea1" rows="6"></textarea>
                                </div>
                            </div>
                            <div className="col-12">
                                <button className='submit-tab'>SUBMIT NOW</button>
                            </div>


                        </div>
                    </div>
                </div>


            </div>
        </div>)
}
export default Contact;