import React from 'react';
import './Jobinfo.css';


function Jobinfo() {
    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <select className="options-tab">
                        <option value="Select Categories"> Industry Area </option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 job-salary">
                    <select className="options-tab">
                        <option value="Select Categories"> Monthly Salary </option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <select className="options-tab">
                        <option value="Select Categories">Location </option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 job-status">
                    <select className="options-tab">
                        <option value="Select Categories">Employement Status</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col-sm-12 col-md-12 col-lg-6">
                    <select className="options-tab">
                        <option value="Select Categories">Employement Type</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6 job-position">
                    <select className="options-tab">
                        <option value="Select Categories">Positions</option>
                        <option value="saab">Saab</option>
                        <option value="opel">Opel</option>
                        <option value="audi">Audi</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Jobinfo;