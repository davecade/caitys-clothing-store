import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({id, title, imageUrl, linkUrl}) => {

    
    return (
        <div className="menu-item">
            <div className="background-img" style={{backgroundImage: `url("${imageUrl}")`}}></div>
            <div className="menu-item-content">
                <h1 className="title">{title}</h1>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}



export default MenuItem;