import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <div className='col-12 footer-bg'>
            <div className='row'>
                <div className='row col-lg-3'>
                    <div className='footer-logo col-md-12'>
                        <img src={require('../../public/assets/images/joblogo.png')} alt='footer-logo'></img>
                    </div>
                    <div className='footer-content col-md-12'>
                        <p className='footer-paragraph'>Lorem ipsum dolor  amet, consectetur adipiscing elit. Etiam et consequat elit. Proin molestie eros sed urna auctor lobortis. Integer eget scelerisque arcu. Pellentesque scelerisque pellentesque nisl, sit amet aliquam mi pellentesque fringilla. Ut porta augue a libero pretium laoreet. Suspendisse sit amet massa accumsan, pulvinar augue id, tristique tortor.</p>
                    </div>
                    <div className='footer-icons col-md-12'>
                        <a className='text-decoration-none' href='#' target='blank'>
                            <i className="fab fa-facebook-square common-iconstyle rounded pr-2"></i>
                        </a>
                        <a className='text-decoration-none' href='#' target='blank'>
                            <i className="fab fa-twitter-square common-iconstyle pr-2"></i>
                        </a>
                        <a className='text-decoration-none' href='#' target='blank'>
                            <i className="fab fa-google-plus-square common-iconstyle pr-2"></i>
                        </a>
                        <a className='text-decoration-none' href='#' target='blank'>
                            <i class="fab fa-linkedin common-iconstyle pr-2"></i>
                        </a>
                        <a className='text-decoration-none' href='#' target='blank'>
                            <i class="fab fa-youtube common-iconstyle pr-2"></i>
                        </a>
                    </div>
                </div>
                <div className='row col-md-12 col-lg-6'>
                    <div className='footer-links col-md-6 col-lg-6'>
                        <h5 className='quicklinks-css'>Quick Links</h5>
                        {
                            [
                                { link: '#', title: 'Career Services' },
                                { link: '#', title: 'CV Writing' },
                                { link: '#', title: 'Career Resources' },
                                { link: '#', title: 'Company Listings' },
                                { link: '#', title: 'Success Stories' },
                                { link: '#', title: 'Contact Us' },
                                { link: '#', title: 'Create Account' },
                                { link: '#', title: 'Post a Job' },
                                { link: '#', title: 'Contact Sales' },
                            ].map(currentValue => (
                                // eslint-disable-next-line jsx-a11y/anchor-has-content
                                <a className='footer-listing text-decoration-none' href={currentValue}><FontAwesomeIcon className='arrow mr-2' icon={faCaretRight} />{currentValue.title}</a>
                            ))
                        }
                    </div>
                    <div className='jobsby-industry col-md-6 col-lg-6'>
                        <h5 className='footer-jobs-byindustry'>Jobs By Industry</h5>
                        {
                            [
                                { link: '#', title: 'Information Technology Jobs' },
                                { link: '#', title: 'Recruitment/Employment Firms Jobs' },
                                { link: '#', title: 'Education/Training Jobs' },
                                { link: '#', title: 'Manufacturing Jobs' },
                                { link: '#', title: 'Call Center Jobs' },
                                { link: '#', title: 'N.G.O/Social Services Jobs' },
                                { link: '#', title: 'BPO Jobs' },
                                { link: '#', title: 'Textiles/Garments Jobs' },
                                { link: '#', title: 'Telecommunication/ISP Jobs' }
                            ].map(currentValue => (
                                <a className='jobsby-industry text-decoration-none' href={currentValue}><FontAwesomeIcon className='arrow mr-2' icon={faCaretRight} />{currentValue.title}</a>
                            ))
                        }
                    </div>
                </div>
                <div className=' col-12 col-lg-3 footer-Images'>
                    <div className='footer-articles'>
                        <h5 className='article-heading'>Latest Articles</h5>
                    </div>
                    <div className='footer-one'>
                        <div className='footer-imageone pr-4'>
                            <a href='#' className='text-decoration-none'>
                                <img width='80' height='80' src={require('../../public/assets/images/footerone.jpg')} alt='footer-logo'></img>
                            </a>
                        </div>
                        <div className='footer-imageonecontent'>
                            <h4 className='imageonedescription'>
                                <a href='#' className='one-content text-decoration-none'>Sed fermentum at lectus nec porta.</a>
                            </h4>
                            <span className='imageonedate'>Jan 28, 2016</span>
                        </div>
                    </div>
                    <div className='footer-two pt-3'>
                        <div className='footer-imagetwo pr-4'>
                            <a href='#' className='text-decoration-none'>
                                <img width='80' height='80' src={require('../../public/assets/images/basket.jpg')} alt='footer-logo'></img>
                            </a>
                        </div>
                        <div className='footer-imagetwocontent'>
                            <h4 className='imagetwodescription'>
                                <a href='#' className='one-content text-decoration-none'>Sed fermentum at lectus nec porta.</a>
                            </h4>
                            <span className='imageonedate'>Jan 28, 2016</span>
                        </div>
                    </div>
                    <div className='footer-three pt-2 pb-5'>
                        <div className='footer-imagethree pr-4'>
                            <a href='#' className='text-decoration-none'>
                                <img width='80' height='80' src={require('../../public/assets/images/law.jpg')} alt='footer-logo'></img>
                            </a>
                        </div>
                        <div className='footer-imagethreecontent'>
                            <h4 className='imagetwodescription'>
                                <a href='#' className='one-content text-decoration-none'>Sed fermentum at lectus nec porta.</a>
                            </h4>
                            <span className='imageonedate'>Jan 28, 2016</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright text-center pt-4 pb-4 col-12 col-md-12'>
                Copyright <span className='copyright-icon'><i class="far fa-copyright"></i></span> 2017 Your Company Name. All Rights Reserved. Design by:
                <a href='#' target='blank' className='text-decoration-none'> eCreativeSolutions</a>
            </div>
        </div>
    )
}


