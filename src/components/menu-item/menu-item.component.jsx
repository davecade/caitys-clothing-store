import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router-dom'

const MenuItem = ({id, title, imageUrl, linkUrl, history}) => {

    return (
        <div className="menu-item" onClick={() => history.push(linkUrl)}>
            <div
                className="background-img"
                style={{backgroundImage: `url("${imageUrl}")`}}
            >
                
            </div>
            <div className="menu-item-content">
                <h1 className="title">{title}</h1>
                <p>SHOP NOW</p>
            </div>
        </div>
    )
}



export default withRouter(MenuItem);