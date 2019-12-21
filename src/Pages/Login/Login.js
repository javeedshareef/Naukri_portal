import React, { useState, useEffect} from 'react';
import './Login.css';
import BannerReuse from '../BannerReuse/BannerReuse';


function Login() {
    const [data, setData] = useState();
    // useEffect(() => {
    //     console.log('Hi');
    // }, []);

    // useEffect(() => {

    //     (async () => {
    //         const res = await Axios.get('https://jsonplaceholder.typicode.com/todos')
    //     })()

        

    // }, [data.email])

    

    // const postHooks = async () => {
    //     try {
    //         const res = await axios.post('http://localhost:5000/api/user');
    //         useState({ Hooks: res.data });
    //         console.log(success);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

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
            
             <BannerReuse h1text={"Login"} atext={"Home "} spantext={" job Name"} />

            {/* Login user details starts here */}
            <section className="bgcolor">
                <div className='container'>
                    <div className='row testing pt-5'>
                        <div className='col-12 col-lg-6'>
                            <div className="card mb-5">
                                <div className="card-body">
                                    <form onSubmit={handleSubmit}>
                                        <h5 className='h5-heading'>Login Or Register with Social</h5>
                                        <div className="icons text-center">
                                            <i className="fab fa-facebook-square fb-icon pr-3"></i>
                                            <i className="fab fa-google-plus-square plus-icon pr-3"></i>
                                            <i className="fab fa-twitter-square twitter-icon pr-2"></i>
                                        </div>
                                        <hr className="lines"></hr>
                                        <h5 className="h5-headings pl-2"> User Login</h5>
                                        <div className='input-tab pl-2 pr-2'>
                                            <input type="email" className="form-control mt-2" name="email" placeholder="Username" onChange={handleChange} />
                                            <input type="password" className="form-control mt-3" name="password" placeholder="Password" onChange={handleChange}/>
                                            <button type="submit" className="btn btn-primary login-btn mt-3">Login</button>
                                        </div>
                                        <div className=' user d-flex'>
                                            <i className="fas fa-user user-icon"></i>
                                                <h5 className="user-heading">New User?
                                                <a className='link-tab' href="/signup"> Register Here</a>
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

export default Login;