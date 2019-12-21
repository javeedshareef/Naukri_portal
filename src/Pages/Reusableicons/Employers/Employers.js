import React from 'react';
import './Employers.css';
import Workflow from '../../Home/Workflow/Workflow';


function Employers() {
    const images = ['emplogo1','emplogo2','emplogo4','emplogo6','emplogo7','emplogo8','emplogo9','emplogo11','emplogo13',
    'emplogo14','emplogo8','emplogo9','emplogo11','emplogo13','emplogo14','emplogo14']
    const loopimages = images.map((loopimages, i)=> {

        return <img className='imagestyle' key={i} src={'/assets/images/' + loopimages + '.jpg'} alt='imagelooping'></img>
    })
    return (
        <div className="Employer p-5">
            <div className="row">
                <div className="col">
                    <Workflow h3text={'Top '} spantext={'Employers'}></Workflow>
                    <div className="container">
                    {loopimages}
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Employers;
