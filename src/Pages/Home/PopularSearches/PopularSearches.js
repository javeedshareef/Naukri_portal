import React from 'react';
import './PopularSearches.css';
import Workflow from '../Workflow/Workflow';
import Browsecategories from '../../Reusableicons/Browsecategories/Browsecategories';
import Browsecities from '../../Reusableicons/Browsecities/Browsecities';
import Featuredjobs from '../Featuredjobs/Featuredjobs';


function PopularSearches() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Workflow h3text={'Popular '} spantext={'Searches'} />
                        <div className='row pt-4'>
                            <div className=" col-md-6 col-lg-6 col-xl-6 col-md-12">
                                <Browsecategories></Browsecategories>
                            </div>

                            <div className="col-md-6 col-lg-6 col-xl-6 col-md-12">
                                <Browsecities />
                            </div>

                        </div>



                        {/* searches staerts
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-6 pt-4'>
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
                                                ].map(x => (
                                                    <a className="col-6 categories"  href= {x.link}><FontAwesomeIcon className="arrow mr-2" icon={faCaretRight} />{x.title} <span className="count">({x.count})</span></a>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-6 pt-4'>
                                    <h4 className='top-search'> browse by categories </h4>

                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
            <Featuredjobs></Featuredjobs>            
        </div>
    )
}
export default PopularSearches;