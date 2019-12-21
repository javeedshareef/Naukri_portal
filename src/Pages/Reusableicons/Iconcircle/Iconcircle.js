import React from 'react';
import './Iconcircle.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Iconcircle(props) {
    const {bgColor, borderColor, icon} = props
    return (
        <div className="iconCircle d-flex justify-content-around pt-3" style={{backgroundColor: bgColor, borderColor}}>
            <FontAwesomeIcon icon={icon} size="3x" />
        </div>
    )
}
export default Iconcircle;