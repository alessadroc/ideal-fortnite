import Popup from './Popup.jsx'
import React, { useState } from 'react'

function Item({source}) { 
    const [showPopup, setShowPopup] = useState(false)

    return (
        <>
            <img 
                src={source}
                width={150}
                height={150}
                alt="Item"
                onClick={() => setShowPopup(true)}
            />
            <Popup trigger={showPopup} closePopup={() => setShowPopup(false)}>
                <h2>Edit Availabilities</h2>
            </Popup>
        </>
    );
}

export default Item;