import * as React from 'react';

const itemRarities = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];

function Rarities() {
    return (
        <div>
            {itemRarities.map((rarity, index) => (
                <label key={index}>
                    <input type="checkbox" value={rarity} />
                    {rarity}
                </label>
            ))}
        </div>
    );
}

export default Rarities;