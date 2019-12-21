import React from 'react';
import './AboutExpertise.css';

function AboutExpertise() {
    return (
        <div>
            <div className="container">
                <div className="row about-us-img mb-5">
                    <div className="col-12 col-sm-12 col-md-10 col-lg-5">
                        <img src="/assets/images/about-us-img2.jpg" className="about-img" alt="Main" />
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-7">
                        <h2 className="about-expertise ml-3">Our Expertise</h2>
                        <p className="about-para ml-3">
                            Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam movet omnes id, usu te meis corpora. Augue doming quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis prodesset, everti necessitatibus mei cu.<br /><br />
                            Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum gubergren definitionem id usu, graeco cetero ius ut.<br /><br />
                        </p>

                        <div className="row">
                            <div className="col-6">
                                <ul className="orderlist">
                                    <li className="list">Mauris convallis felis</li>
                                    <li className="list">Vestibulum nec dui</li>
                                    <li className="list">Donec euismod urna</li>
                                </ul>
                            </div>
                            <div className="col-6">
                            <ul className="orderlist">
                                <li className="list">Praesent vulputate diam</li>
                                <li className="list">Curabitur facilisis</li>
                                <li className="list">Mauris convallis felis</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutExpertise;