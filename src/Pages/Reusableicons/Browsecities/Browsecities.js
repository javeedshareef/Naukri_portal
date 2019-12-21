import React from 'react';
import './Browsecities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

function Browsecities() {
    return (

        <div className='container pt-2'>
            <div className='row'>
                <div className="col-12">
                    <h4 className='top-search'> browse by cities </h4>
                </div>
                <div className="col-12">
                    <div className="row">
                        {[
                            { link: '#', title: 'New York' },
                            { link: '#', title: 'Anniston' },
                            { link: '#', title: 'Andalusia' },
                            { link: '#', title: 'Germany' },
                            { link: '#', title: 'Berlin' },
                            { link: '#', title: 'Denmark' },
                            { link: '#', title: 'Alaska' },
                            { link: '#', title: 'London' },
                            { link: '#', title: 'clanton' },
                            { link: '#', title: 'Texas' },
                            { link: '#', title: 'czech Republic'},
                            { link: '#', title: 'prague' },
                            { link: '#', title: 'california' },
                            { link: '#', title: 'cuba'},
                            { link: '#', title: 'Havana'},
                            { link: '#', title: 'poland' },
                            { link: '#', title: 'Auburn'},
                            { link: '#', title: 'Austria' },
                            { link: '#', title: 'clington' },
                            { link: '#', title: 'Birmingham' },
                            {link: '#', title: 'clanton' },
                            { link: '#', title: 'Texas' },
                            { link: '#', title: 'czech Republic'},
                            { link: '#', title: 'prague' },
                            
                        ].map((x,i) => (
                            <a key={i} className="col-6 col-md-4 categories" href={x.link}><FontAwesomeIcon className="arrow mr-2" icon={faCaretRight} />{x.title}</a>
                        ))}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Browsecities;

