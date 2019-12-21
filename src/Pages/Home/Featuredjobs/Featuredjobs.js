import React from 'react';
import './Featuredjobs.css';
import Workflow from '../Workflow/Workflow';
import Featuredjobcard from './Featuredjobcard/Featuredjobcard';

function Featuredjobs() {
    const data = [
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'fullTime',
            location: 'Chennai',
            logo: '/assets/images/emplogo1.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'Parttime',
            location: 'Chennai',
            logo: '/assets/images/emplogo2.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'freelance',
            location: 'Chennai',
            logo: '/assets/images/emplogo4.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'Parttime',
            location: 'Chennai',
            logo: '/assets/images/emplogo6.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'fulltime',
            location: 'Chennai',
            logo: '/assets/images/emplogo7.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'freelance',
            location: 'Chennai',
            logo: '/assets/images/emplogo8.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'fulltime',
            location: 'Chennai',
            logo: '/assets/images/emplogo9.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'Parttime',
            location: 'Chennai',
            logo: '/assets/images/emplogo1.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'freelance',
            location: 'Chennai',
            logo: '/assets/images/emplogo2.jpg',
        },
        {
            title: 'Technical Database Engineer',
            company: 'Database Management Company',
            label: 'Parttime',
            location: 'Chennai',
            logo: '/assets/images/emplogo4.jpg',
        }
    ];
    return (
        <section className="featured-background">
            <div className="container featured-jobs mt-5">
                <div className="row d-flex">
                    <div className="col">
                        <Workflow h3text={'Featured '} spantext={'Jobs'} />
                    </div>

                    <div className="row justify-content-between">
                        {data.map((item, i) => (
                            <div key={i} className="col col-md-6">
                                <Featuredjobcard {...item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>


    )
}

export default Featuredjobs;