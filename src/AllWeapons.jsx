import React, { useState } from 'react';
import LootPool from './LootPool.jsx';

const weaponCategories = [
    { name: "assaultRifle", label: "Assault Rifles", options: ["assaultRifle", "supressedAssaultRifle", "heavyAssaultRifle", "burstAssaultRifle"] },
    { name: "shotgun", label: "Shotguns", options: ["pumpShotgun", "tacticalShotgun", "combatShotgun", "chargeShotgun", "leverActionShotgun"] },
    { name: "submachineGun", label: "Submachine Guns", options: ["submachineGun", "tacticalSMG", "supressedSMG", "stingerSMG", "combatSMG"] },
    { name: "sniper", label: "Snipers", options: ["huntingRifle", "boltAction", "heavySniper", "semiAutoSniper"] },
    { name: "pistol", label: "Pistols", options: ["pistol", "supressedPistol", "handCannon"] },
    { name: "consumable", label: "Consumables", options: ["shieldPotion", "slurpJuice", "medkit", "bandages"] },
];

function AllWeapons() {
    const [loot, setLoot] = useState({
        assaultRifle: "none",
        shotgun: "none",
        submachineGun: "none",
        sniper: "none",
        pistol: "none",
        consumable: "none",
    });

    const [showImages, setShowImages] = useState(false);
    const [lootPoolCreated, setLootPoolCreated] = useState(false); // New state to track button click

    // Universal handler for state updates
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoot((prevLoot) => ({ ...prevLoot, [name]: value }));
    };

    // Check if any selection is made
    const hasSelections = () => Object.values(loot).some((value) => value !== "none");

    // Handle showing the loot pool
    const handleShowClick = () => {
        if (hasSelections()) {
            setShowImages(true);
            setLootPoolCreated(true); // Mark that the button was clicked
        } else {
            alert("Please select at least one item before creating the loot pool!");
        }
    };

    // Handle clearing the loot pool
    const handleRemoveClick = () => {
        setLoot({
            assaultRifle: "none",
            shotgun: "none",
            submachineGun: "none",
            sniper: "none",
            pistol: "none",
            consumable: "none",
        });
        setShowImages(false);
        setLootPoolCreated(false); // Reset when clearing
    };

    return (
        <div className="card">
            <table>
                <tbody>
                    {weaponCategories.map(({ name, label, options }) => (
                        <tr key={name}>
                            <td>{label}</td>
                            <td>
                                <select name={name} value={loot[name]} onChange={handleChange}>
                                    <option value="none">None</option>
                                    {options.map((option) => (
                                        <option key={option} value={option}>
                                            {option
                                                .replace(/([A-Z])/g, " $1") // Insert space before uppercase letters
                                                .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize first letter */}
                                        </option>
                                    ))}
                                </select>
                            </td>
                            <td>
                                <button className="tableBtn">+</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Button to trigger the loot pool display */}
            <button className="bigBtn" onClick={handleShowClick}>
                Create Loot Pool!
            </button>

            {/* Pass the selected values to LootPool and show/hide images */}
            <LootPool {...loot} showImages={showImages} />

            {/* Show Clear button **only** if loot pool has been created and there are selections */}
            {lootPoolCreated && hasSelections() && (
                <div>
                    <button className="bigBtn" onClick={handleRemoveClick}>
                        Clear
                    </button>
                </div>
            )}
        </div>
    );
}

export default AllWeapons;