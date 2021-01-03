import React from 'react';
import './homepage.styles.scss';


const Homepage = () => (
    <div className="homepage">
        <div className="homepage-menu">
            <div className="menu-item">
                <div className="menu-item-content">
                    <h1 className="title">HATS</h1>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-item-content">
                    <h1 className="title">JACKETS</h1>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-item-content">
                    <h1 className="title">SNEAKERS</h1>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item large">
                <div className="menu-item-content">
                    <h1 className="title">WOMENS</h1>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item large">
                <div className="menu-item-content">
                    <h1 className="title">MENS</h1>
                    <p>SHOP NOW</p>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;