import React from 'react'

const CollectionPreview = ({title, items}) => {
    return (
        items.map((item, index)=> (
            <div>
                <div>{item.name}</div>
                <img src={item.imageUrl} alt=""/>
            </div>
        ))
    )
}

export default CollectionPreview;