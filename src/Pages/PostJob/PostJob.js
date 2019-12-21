import React from 'react';
import './PostJob.css';
import BannerReuse from '../BannerReuse/BannerReuse';
import Jobinfo from './Jobinfo/Jobinfo';

function PostJob() {
    return (
        <div>

            <BannerReuse h1text={"Post Job"} atext={"Home "} spantext={" Post job"} />

            {/* PostJob starts */}
            <section className="bgcolor">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 d-flex justify-content-center">
                            <div className="card mt-5 mb-5 job-details">
                                <div className="card-body">
                                    <form>
                                        <h5 className="h5-headings pl-2"> Job Information </h5>
                                        <div className="row">
                                            <div className="col-sm-12 col-md-12">
                                            <input type="text" placeholder="Job title" className="full-name"/></div>
                                        </div>
                                        <Jobinfo/>
                                        <div className="row mt-3">
                                            <div className="col-sm-12 col-md-12 col-lg-3">
                                                <select className="options-tab">
                                                    <option value="Select Categories">Experience</option>
                                                    <option value="saab">Saab</option> <option value="opel">Opel</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-3 job-gender">
                                                <select className="options-tab">
                                                    <option value="Select Categories">Gender</option>
                                                    <option value="saab">Male</option> <option value="opel">Female</option>
                                                    <option value="audi">Any </option>
                                                </select>
                                            </div>
                                            <div className="col-sm-12 col-md-12 col-lg-6 job-nationality">
                                                <select className="options-tab">
                                                    <option value="Select Categories">Nationality</option>
                                                    <option value="saab">Saab</option> <option value="opel">Opel</option>
                                                    <option value="audi">Audi</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="row mt-2">
                                            <div className="col-12 col-md-12 mt-3">
                                                <div className="form-group job-detail">
                                                    <textarea className="form-control" placeholder=" Job Details" id="exampleFormControlTextarea1" rows="6"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-12">
                                                <button type="submit" className="post-btn">Post Job</button></div>
                                        </div>
                                    </form>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default PostJob;