import React from 'react';
import './Browsecategories.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Browsecategories() {
    return (

        <div className='container pt-2'>
            <div className="row">
                <div className="col-12">
                    <h4 className='topsearch'> browse by categories </h4>
                </div>
                <div className="col-12">
                    <div className="row">
                        {[
                            { link: '#', title: 'Marketing', count: 130 },
                            { link: '#', title: 'Teaching And Education', count: 140 },
                            { link: '#', title: 'Telemarketing', count: 140 },
                            { link: '#', title: 'Administration', count: 140 },
                            { link: '#', title: 'Clerical & Font Office', count: 140 },
                            { link: '#', title: 'SEO', count: 140 },
                            { link: '#', title: 'Engineering', count: 140 },
                            { link: '#', title: 'Software And Web', count: 140 },
                            { link: '#', title: 'Sales & BD ', count: 140 },
                            { link: '#', title: 'Customer Service', count: 140 },
                            { link: '#', title: 'Creative Design', count: 140 },
                            { link: '#', title: 'Accounts & Finance', count: 140 },
                            { link: '#', title: 'Web Design', count: 140 },
                            { link: '#', title: 'Accounts & Finance ', count: 140 },
                        ].map((x, i) => (
                           <a key={i} className="col-md-6 categories" href={x.link}><FontAwesomeIcon className="arrow mr-2" icon={faCaretRight} />{x.title} <span className="count">({x.count})</span></a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Browsecategories;