import React from 'react';
import './WorkCard.css';
import Iconcircle from '../Reusableicons/Iconcircle/Iconcircle'

function WorkCard(props) {
    const { title, para} =  props
    return (
        <div>
            <Iconcircle {...props} ></Iconcircle>
            <h3 className="heading text-center">{title}</h3>
            <p className="text-center">{para}</p>
        </div>);
}
export default WorkCard;
// export default WorkCard;