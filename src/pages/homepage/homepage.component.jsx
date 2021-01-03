import React from 'react';
import './homepage.styles.scss';


const Homepage = () => (
    <div className="homepage">
        <div className="homepage-menu">
            <div className="menu-item">
                <div className="menu-item-content">
                    <h4>HATS</h4>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-item-content">
                    <h4>JACKETS</h4>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item">
                <div className="menu-item-content">
                    <h4>SNEAKERS</h4>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item large">
                <div className="menu-item-content">
                    <h4>WOMENS</h4>
                    <p>SHOP NOW</p>
                </div>
            </div>
            <div className="menu-item large">
                <div className="menu-item-content">
                    <h4>MENS</h4>
                    <p>SHOP NOW</p>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;