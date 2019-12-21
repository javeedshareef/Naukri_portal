import React from 'react';
import './AboutProcess.css';

function AboutProcess() {

    return (
        <section className="about-us ">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12 mt-5">
                        <h4 className="main-heading">Our Process is Simple</h4>
                        <p className="p-tab">Diam velit voluptatibus has te. Verear aliquid mentitum nam no</p>
                    </div>
                </div>
                <div className="d-flex justify-content-around">
                    <div className="row text-center mt-5">
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                            <i className="fas fa-user icon"></i>
                            <h3 className="title">Create Account</h3>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor congue enim non rhoncus. Sed ac lacus non elit malesuada blandit.</p>
                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                            <i className="fas fa-file icon"></i>
                            <h3 className="title">Create Account</h3>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor congue enim non rhoncus. Sed ac lacus non elit malesuada blandit.</p>

                        </div>
                        <div className="col-12 col-sm-4 col-md-4 col-lg-4">
                            <i className="fas fa-suitcase icon"></i>
                            <h3 className="title">Create Account</h3>
                            <p className="para">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor congue enim non rhoncus. Sed ac lacus non elit malesuada blandit.</p>
                        </div>
                    </div>
                </div>
            </div>
            
         </section>
        
         

    )
}

export default AboutProcess;