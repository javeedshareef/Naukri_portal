import React from 'react';
import './About.css';
import BannerReuse from '../BannerReuse/BannerReuse';
import AboutProcess from './AboutProcess/AboutProcess';
import AboutExpertise from './About Expertise/AboutExpertise';

function About() {

    return (
        <div>

            <BannerReuse h1text={"About Us"} atext={"Home "} spantext={"About Us"} />

            <div className="container">
                <div className="row about-content">
                    <div className="col-lg-7 col-12">

                        <h2 className="about-wrapper">Our Perfect Platform</h2>
                        <p>
                            Doctus omnesque duo ne, cu vel offendit erroribus. Laudem hendrerit pro ex, cum postea delectus ad. Te pro feugiat perpetua tractatos. Nam movet omnes id, usu te meis corpora. Augue doming quaestio vix at. Sumo duis ea sed, ut vix euismod lobortis prodesset, everti necessitatibus mei cu.<br /><br />
                            Nam ea eripuit assueverit, invenire delicatissimi ad pro, an dicam principes duo. Paulo prodesset duo ad. Duo eu summo verear. Natum gubergren definitionem id usu, graeco cetero ius ut.<br /><br />
                            Unum postea sit an, iudico invenire expetenda ei sea, atqui fierent sed ut. Ex pri numquam indoctum suavitate, sed id movet mentitum consequat, cum et amet ipsum dolor. Unum postea sit an, iudico invenire expetenda ei sea, atqui fierent sed ut.
                        </p>
                    </div>
                    <div className="col-lg-5 col-md-10 col-12">
                        <img src="/assets/images/about-img.jpg" className="about-img" alt="Main" />

                    </div>

                </div>

            </div>

            <AboutProcess />
            <AboutExpertise />

        </div>
    )
}

export default About;