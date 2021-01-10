import React, { Fragment } from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item" >
        <img className="image" src={imageUrl} alt=""/>
        <div className="item-details">
            <p>{name}</p>
            <p>{price}</p>
        </div>
    </div>
)

export default CollectionItem