import React from 'react';
import './Workflow.css';


function Workflow(props){
    return(
        <div className="Container-fluid text-center mt-5">
                    <h5 className='heading-text mt-1'>Here You Can See</h5>
                    <h3 className='worktitle'>{props.h3text}
                        <span className="span-text">{props.spantext}</span>
                    </h3>
                    
                    
        </div>
    )
}
export default Workflow;