import React from 'react';


const ColorDisplay = (props) => {
    const {color} = props
    return (
        <li className="swatch" key={color.colorId}>
               <div className="sample" style={{background: color.hexString}}>
               </div>
               <div>
                <label className="name">{color.name}: {color.hexString} </label>
               </div>
            </li>
    )
}

export default ColorDisplay;

