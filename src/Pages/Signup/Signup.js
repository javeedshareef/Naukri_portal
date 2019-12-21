import React, { useState, useEffect} from 'react';
import './Signup.css';
import BannerReuse from '../BannerReuse/BannerReuse';


function Signup() {
    const [data, setData] = useState();

    const handleChange = ({ target }) => {
        const { name, value } = target;
        const newData = Object.assign({}, data, { [name]: value });
        // this.setState({ data });
        setData(newData);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div>
             <BannerReuse h1text={"Register"} atext={"Home"} spantext={"Register"} />

            {/* Login user details starts here */}
            <section className="bgcolor">
                <div className='container'>
                    <div className='row testing pt-5'>
                        <div className='col-12 col-lg-6'>
                            <div className="card">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <h5 className='h5-heading'>Login Or Register with Social</h5>
                                        <div className="icons text-center">
                                            <i className="fab fa-facebook-square fb-icon pr-3"></i>
                                            <i className="fab fa-google-plus-square plus-icon pr-3"></i>
                                            <i className="fab fa-twitter-square twitter-icon pr-2"></i>
                                        </div>
                                        <hr className="lines"></hr>
                                        {/* alerts */}
                                        <div className="alert alert-success" role="alert">  Well done! Your account successfully created. </div>
                                        <div className="alert alert-warning" role="alert"> Warning! Better check yourself, you're not looking too good. </div>
                                        <div className="alert alert-danger" role="alert"> Oh snap! Change a few things up and try submitting again </div>
                                        {/* button */}
                                        <section>
                                        </section>

                                        <div className='input-tab mt-5 pl-2 pr-2'>
                                            <input type="text" className="form-control mt-3" placeholder="Fullname" name="Fullname" onChange={handleChange} />
                                            <input type="text" className="form-control mt-3" placeholder="Username" name="Username" onChange={handleChange} />
                                            <input type="email" className="form-control mt-3" placeholder="Email" name="Email" onChange={handleChange} />
                                            <input type="password" className="form-control mt-3" placeholder="Password" name="Password" onChange={handleChange} />
                                            <input type="password" className="form-control mt-3" placeholder=" Confirm Password" name="Password" onChange={handleChange} />
                                            <div className="form-check mt-3">
                                                <input className="form-check-input" type="checkbox" value="" id="defaultCheck1" />
                                                <label className="form-check-label" htmlFor="defaultCheck1">
                                                    There are many variations of passages of Lorem Ipsum availabl </label>
                                            </div>
                                            <button type="submit" className="btn btn-primary login-btn mt-3">Register</button>
                                        </div>
                                        <div className=' user d-flex'>
                                            <i className="fas fa-user user-icon"></i>
                                            <h5 className="user-heading">New User?
                                                <a className='link-tab' href="/login"> Login</a>
                                            </h5>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Ends here */}
            </section>
        </div>
    )
}

export default Signup;