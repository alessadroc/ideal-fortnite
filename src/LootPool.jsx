import React, {useState} from 'react';

function LootPool() {

    const [showImages, setShowImages] = useState(false);

    const handleShowClick = () => {
        setShowImages(true); // Set state to true to show images
    };

    const handleRemoveClick = () => {
        setShowImages(false); // Set state to FALSE to stop the show of images
    };

    return (
        <>
            <button onClick={handleShowClick}>Create Loot Pool!</button>

            {showImages && (
                <>
                    <div>
                        <img src="assaultRifle.png" alt="Assault Rifle" />
                        <img src="pumpShotgun.png" alt="Pump Shotgun" />
                    </div>
                    <div>
                        <table>
                            <tr>
                                <td>
                                    <button onClick={handleRemoveClick}>Clear</button>
                                </td>
                                <td>
                                    <button>Save Pool</button>
                                </td>
                            </tr>
                        </table>
                    </div>
                </>
            )}
        </>
    );
}

export default LootPool;