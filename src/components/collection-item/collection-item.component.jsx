import React, { Fragment } from 'react'
import './collection-item.styles.scss'

const CollectionItem = ({items}) => (
    <Fragment>
        <div className="collection-item">
            <img src={item.imageUrl} alt=""/>
            <div className="item-details">
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        </div>
    </Fragment>
)

export default CollectionItem