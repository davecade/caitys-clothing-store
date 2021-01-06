import React, { Fragment } from 'react'
import './collection-preview.styles.scss'

const CollectionPreview = ({title, items}) => {
    return (
        <Fragment>
            <div className="collection-preview">
                <h1 className='title'>{title}</h1>
                <div className="collection-items">
                    {
                        items.map((item, index)=> (
                            <div className="collection-item">
                                <img src={item.imageUrl} alt=""/>
                                <div className="item-name">{item.name}</div>
                            </div>
                        ))
                    }
                </div>

            </div>

        </Fragment>

    )
}

export default CollectionPreview;