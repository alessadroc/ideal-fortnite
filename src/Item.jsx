import Popup from './Popup.jsx'
import React, { useState } from 'react'

function Item({source}) { 
    const [showPopup, setShowPopup] = useState(false);
    const [rarities, setRarities] = useState([
        {id: 1, label: "Common", checked: true},
        {id: 2, label: "Uncommon", checked: true},
        {id: 3, label: "Rare", checked: true},
        {id: 4, label: "Epic", checked: true},
        {id: 5, label: "Legendary", checked: true},
    ]);
    const toggleRarity = (id) => {
        setRarities((prev) =>
            prev.map((item) =>
                item.id === id ? { ...item, checked: !item.checked } : item
            )
        );
    };

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
                <div style={{ fontFamily: 'Burbank, sans-serif', fontSize: '15px' }}>
                    <h2>Edit Rarities</h2>
                    <form>
                        {rarities.map((item) => (
                            <div key={item.id}>
                                <label>
                                    <input
                                        type="checkbox"
                                        checked={item.checked}
                                        onChange={() => toggleRarity(item.id)}
                                    />
                                    {item.label}
                                </label>
                            </div>
                        ))}
                    </form>
                </div>
            </Popup>
        </>
    );
}

export default Item;