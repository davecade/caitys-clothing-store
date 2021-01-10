import React, { Fragment } from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({id, name, price, imageUrl}) => (
    <Fragment>
        <div className="collection-item">
            <img src={imageUrl} alt=""/>
            <div className="item-details">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    </Fragment>
)

export default CollectionItem