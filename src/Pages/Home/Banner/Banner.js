import React from 'react';
import './Banner.css';
import Jobsearch from '../Jobsearch/Jobsearch';
import Workflow from '../Workflow/Workflow';
// import Iconcircle from '../../Reusableicons/Iconcircle/Iconcircle';
import { faUser, faSuitcase, faFile } from '@fortawesome/free-solid-svg-icons';
import WorkCard from '../../WorkCard/WorkCard'
import Employers from '../../Reusableicons/Employers/Employers';
import PopularSearches from '../PopularSearches/PopularSearches';

function Banner() {

    return (
        <div className="container-fluid p-0">
            <div className="banner text-center">
                <h3 className="banner-title">One million Success Stories.<br></br> Starts yours Today.</h3>
                <Jobsearch></Jobsearch>
            </div>
            <Workflow h3text={'How It'} spantext={' Works?'}></Workflow>
            {/* <Iconcircle icon={faUser} bgColor="red" borderColor="yellow"></Iconcircle> */}
            <div className="container d-flex justify-content-center pt-5">
                <div className="row">
                    <div className="col-md-4">
                        <WorkCard icon={faUser} bgColor="#263BD6"
                            borderColor="#78ceff"
                            title="Create An Account"
                            para="Diam no ea accusam sadipscing stet aliquyam amet ea, ipsum eirmod ipsum sadipscing ipsum dolores no. Et rebum ipsum rebum." />
                    </div>

                    <div className="col-md-4">
                        <WorkCard icon={faSuitcase} bgColor="#6ACA00"
                            borderColor="#83ec0f"
                            title="Search Desired Job"
                            para="Diam no ea accusam sadipscing stet aliquyam amet ea, ipsum eirmod ipsum sadipscing ipsum dolores no. Et rebum ipsum rebum." />
                    </div>

                    <div className="col-md-4">
                        <WorkCard icon={faFile} bgColor="#f8a60c"
                            borderColor="#ffc456"
                            title="Send Your Resume"
                            para="Diam no ea accusam sadipscing stet aliquyam amet ea, ipsum eirmod ipsum sadipscing ipsum dolores no. Et rebum ipsum rebum." />
                    </div>
                </div>
            </div>
            <Employers></Employers>
            <PopularSearches/>
            
            
            

        </div>

    )
}

export default Banner;



//const data = [
//     {
//         icon: faUser,
//         title: 'Sanctus vero voluptua.',
//         para: `Harold mighty he carnal agen name, but nor to spent and, hour only high noontide by, pillared nor though he.`,
//         bgColor: 'green',
//         borderColor: 'red'
//     },
//     {
//         icon: faBomb,
//         title: 'Sanctus vero voluptua.',
//         para: `Harold mighty he carnal agen name, but nor to spent and, hour only high noontide by, pillared nor though he.`,
//         bgColor: 'blue',
//         borderColor: 'red'
//     },
//     {
//         icon: faUser,
//         title: 'Sanctus vero voluptua.',
//         para: `Harold mighty he carnal agen name, but nor to spent and, hour only high noontide by, pillared nor though he.`,
//         bgColor: 'gblackreen',
//         borderColor: 'red'
//     }
// ]


/* <WorkCard icon={faUser}  bgColor="red" borderColor="yellow" title="Lorem gubergren takimata dolor." para="Diam no ea accusam sadipscing stet aliquyam amet ea, ipsum eirmod ipsum sadipscing ipsum dolores no. Et rebum ipsum rebum."/>  */ 

/* // data.map(x => {
                //     return <WorkCard icon={x.icon}  bgColor={x.bgColor} borderColor={x.borderColor} title={x.title} para={x.para}/>;
                // }) */
