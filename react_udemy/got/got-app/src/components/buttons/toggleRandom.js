import React from 'react';
import './toggleRandom.css';

const ToggleBtn = ({onToggle})=>{
    return (
        <button className="toggleBtn"
        onClick={onToggle}>
            Hide random character
        </button>
    )
}
export default ToggleBtn;