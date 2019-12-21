import React from 'react';
import './BannerReuse.css';


function BannerReuse(props) {
    return (
        <div>
            <div className="container-fluid login-img">
                <div className="row">
                    <div className='col-12'>
                        <div className='container'>
                            <div className='bground row'>
                                <div className='col-xs-12 col-md-6 testing'>
                                    <h1 className="login-h1">{props.h1text}</h1>
                                </div>
                                <div className="col-12 col-md-6 testingtwo">
                                    <div className="job-name">
                                        <a href="/">{props.atext}</a>
                                        <span className="">/{props.spantext}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
    export default BannerReuse;
