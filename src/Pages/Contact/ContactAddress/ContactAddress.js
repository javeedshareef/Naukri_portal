import React from 'react';
import './ContactAddress.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function ContactAddress(props) {
    
    const {icon} = props

    return (
        <div>
            <div className="card mt-4">
                <div className="card-body">
                    <div className="row">
                        <div className="col-3">
                            <FontAwesomeIcon  className="fa-home" icon={icon} size="3x"/>
                        </div>
                        <div className="col-9">
                            <h5 className='information'>{props.text}</h5>
                            <p className="para-tab">{props.ptext}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export  default ContactAddress;
