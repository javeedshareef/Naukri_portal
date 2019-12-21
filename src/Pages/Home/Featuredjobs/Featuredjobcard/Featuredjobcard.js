import React from 'react';
import './Featuredjobcard.css';
// const images = ['emplogo1','emplogo2','emplogo4','emplogo6','emplogo7','emplogo8','emplogo9','emplogo11','emplogo13',
//     'emplogo14','emplogo8','emplogo9','emplogo11','emplogo13','emplogo14','emplogo14']

// const loopimages = images.map(function (loopimages, i) {

//     return <img className='imagestyle'  src={require('.../.../...' + loopimages + '.jpg')} alt='imagelooping'></img>
// })

const JobType = ({ children }) => {
    let color;
    switch (children.toLowerCase()) {
        case 'fulltime':
            color = 'green';
            break;
        case 'parttime':
            color = 'yellow';
            break;
        case 'freelancer':
            color = 'red';
            break;

        default:
            color = 'red';
    }

    if (!children) {
        return null;
    }

    return (
        <span className="full-time" style={{ background: color }}>{children}</span>
    )
}


function Featuredjobcard({ logo, title, location, company, label }) {
    return (
        <div className="Featuredjobcard-card mt-3 p-2">
            <div className="row">
                <div className="col-md-2 d-flex align-items-center">
                    <img src={logo} alt="" />
                </div>
                <div className="col-md-7">
                    <div className="row">
                        <div className="col-md-12 Featuredjobcard-card-title">
                            <h4><a href="/">{title}</a></h4>
                        </div>
                        <div className="col-md-12 Featuredjobcard-card-subtitle">
                            <a href="/">{company}</a>
                        </div>
                        <div className="col-md-12 Featuredjobcard-card-jobtype">
                            <JobType>{label}</JobType>
                            <span className="cities">{location}</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center align-items-center">
                    <a href="/" className="Featuredjobcard-card-apply-btn">Apply Now</a>
                </div>
            </div>
        </div>

    );
}
export default Featuredjobcard;





