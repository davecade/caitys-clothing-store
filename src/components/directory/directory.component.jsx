import React, { Component } from 'react';
import './directory.styles.scss'

class Directory extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sections: []
        }
    }

    
    render() {

        return (
            <div className="directory">
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
        )
    }
}

export default Directory;