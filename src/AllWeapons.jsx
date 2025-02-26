import React, { useState } from 'react';
import LootPool from './LootPool.jsx';

function AllWeapons() {
    const [assaultRifle, setAssaultRifle] = useState("none");
    const [shotgun, setShotgun] = useState("none");
    const [submachineGun, setSubmachineGun] = useState("none");
    const [sniper, setSniper] = useState("none");
    const [pistol, setPistol] = useState("none");
    const [consumable, setConsumable] = useState("none");
    const [showImages, setShowImages] = useState(false);

    // Update state based on dropdown selection
    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'assaultRifles') setAssaultRifle(value);
        if (name === 'shotguns') setShotgun(value);
        if (name === 'submachineGuns') setSubmachineGun(value);
        if (name === 'snipers') setSniper(value);
        if (name === 'pistols') setPistol(value);
        if (name === 'consumables') setConsumable(value);

    };

    // Handle showing the loot pool
    const handleShowClick = () => {
        if (hasSelections()) {
            setShowImages(true);
        } else {
            alert("Please select at least one item before creating the loot pool!");
            return;
        }
    };

    // Handle clearing of loot pool
    const handleRemoveClick = () => {
        setAssaultRifle("none");
        setShotgun("none");
        setSubmachineGun("none");
        setSniper("none");
        setPistol("none");
        setConsumable('none');
        setShowImages(false);
    };

    // Function that checks if a selection exists. returns booleans only
    const hasSelections = () => {
        return (
            assaultRifle !== "none" ||
            shotgun !== "none" ||
            submachineGun !== "none" ||
            sniper !== "none" ||
            pistol !== "none" ||
            consumable !== "none"
        );
    };

    return (
        <div class="card">
            <table>
                <tr>
                    <td>Assault Rifles</td>
                    <td>
                        <select name="assaultRifles" value={assaultRifle} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="assaultRifle">Assault Rifle</option>
                            <option value="supressedAssaultRifle">Supressed Assault Rifle</option>
                            <option value="heavyAssaultRifle">Heavy Assault Rifle</option>
                            <option value="burstAssaultRifle">Burst Assault Rifle</option>
                        </select>
                    </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Shotguns</td>
                    <td>
                        <select name="shotguns" value={shotgun} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="pumpShotgun">Pump Shotgun</option>
                            <option value="tacticalShotgun">Tactical Shotgun</option>
                            <option value="combatShotgun">Combat Shotgun</option>
                            <option value="chargeShotgun">Charge Shotgun</option>
                            <option value="leverActionShotgun">Lever-action Shotgun</option>
                        </select>
                    </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Submachine Guns</td>
                    <td>
                        <select name="submachineGuns" value={submachineGun} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="submachineGun">Submachine Gun</option>
                            <option value="tacticalSMG">Tactical Submachine Gun</option>
                            <option value="supressedSMG">Supressed Submachine Gun</option>
                            <option value="stingerSMG">Stinger SMG</option>
                            <option value="combatSMG">Combat SMG</option>
                        </select>
                    </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Snipers</td>
                    <td>
                        <select name="snipers" value={sniper} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="huntingRifle">Hunting Rifle</option>
                            <option value="boltAction">Bolt-Action Sniper Rifle</option>
                            <option value="heavySniper">Heavy Sniper Rifle</option>
                            <option value="semiAutoSniper">Semi-Auto Sniper</option>
                        </select>
                    </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Pistols</td>
                    <td>
                        <select name="pistols" value={pistol} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="pistol">Pistol</option>
                            <option value="supressedPistol">Supressed Pistol</option>
                            <option value="handCannon">Hand Cannon</option>
                        </select>
                    </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
                <tr>
                    <td>Consumables</td>
                        <td>
                            <select name="consumables" value={consumable} onChange={handleChange}>
                            <option value="none">None</option>
                            <option value="shieldPotion">Shield Potion</option>
                            <option value="slurpJuice">Slurp Juice</option>
                            <option value="medkit">Medkit</option>
                            <option value="bandages">Bandages</option>
                            </select>
                        </td>
                    <td>
                        <button class="tableBtn">+</button>
                    </td>
                </tr>
            </table>

            {/* Button to trigger the loot pool display */}
            <button class="bigBtn" onClick={handleShowClick}>Create Loot Pool!</button>

            {/* Pass the selected values to LootPool and show/hide images */}
            <LootPool
                assaultRifle={assaultRifle}
                shotgun={shotgun}
                submachineGun={submachineGun}
                sniper={sniper}
                pistol={pistol}
                consumable={consumable}
                showImages={showImages}
            />

            {hasSelections() && (
                <div>
                    <button class="bigBtn" onClick={handleRemoveClick}>Clear</button>
                </div>
            )}
        </div>
    );
}

export default AllWeapons;