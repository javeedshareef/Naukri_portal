import React from 'react';
import './Jobsearch.css';

function Jobsearch() {
    return (

        <div className='banner-main no-gutters pt-5'>
            <input className='banner-inputs' type='text' placeholder='Enter Skills or job title'></input>
            <select className='banner-inputs-isize'>
                <option value="Select Categories">Select Categories</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>

            <select className='banner-inputs-isize1'>
            <option value="Select City">Select City</option>
                <option value="saab">Saab</option>
                <option value="opel">Opel</option>
                <option value="audi">Audi</option>
            </select>
            <button className='banner-search-btn' type='submit'>SEARCH JOB</button>
            <section>
                <button className='text-white getstart-btn mt-5' type='submit'><i className="fas fa-user text-white"></i> Get Started Now</button>
            </section>
        </div>

    )
}

export default Jobsearch;