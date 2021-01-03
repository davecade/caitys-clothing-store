import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({id, title, imageUrl, linkUrl}) => (
    <div className="menu-item">
        <div className="menu-item-content">
            <h1 className="title">{title}</h1>
            <p>SHOP NOW</p>
        </div>
    </div>
)


export default MenuItem;