import React, { useState } from 'react';
import LootPool from './LootPool.jsx';

const weaponCategories = [
    { name: "assaultRifle", label: "Assault Rifles", options: ["assaultRifle", "supressedAssaultRifle", "heavyAssaultRifle", "burstAssaultRifle", "holoTwister", "strikerBurstClassic", "strikerBurstRework"] },
    { name: "shotgun", label: "Shotguns", options: ["pumpShotgun", "tacticalShotgun", "combatShotgun", "chargeShotgun", "leverActionShotgun", "havocShotgun", "sentinelShotgun"] },
    { name: "submachineGun", label: "Submachine Guns", options: ["submachineGun", "tacticalSMG", "supressedSMG", "stingerSMG", "combatSMG"] },
    { name: "sniper", label: "Snipers", options: ["huntingRifle", "boltAction", "heavySniper", "semiAutoSniper"] },
    { name: "pistol", label: "Pistols", options: ["pistol", "supressedPistol", "handCannon", "mammothPistol"] },
    { name: "consumable", label: "Consumables", options: ["shieldPotion", "slurpJuice", "medkit", "bandages", "smallShield", "waterSprite", "chugSplash"] },
    { name: "exotic", label: "Exotics", options: ["chiliChugSplash", "heistedBreacherShotgun"] },
];

function AllWeapons() {
    const [loot, setLoot] = useState({
        assaultRifle: ["none"],
        shotgun: ["none"],
        submachineGun: ["none"],
        sniper: ["none"],
        pistol: ["none"],
        consumable: ["none"],
        exotic: ["none"],
    });

    const [showImages, setShowImages] = useState(false);
    const [lootPoolCreated, setLootPoolCreated] = useState(false);

    // Handle change for a specific dropdown in a category
    const handleChange = (e, category, index) => {
        const { value } = e.target;
        setLoot((prevLoot) => {
            const updatedCategorySelections = [...prevLoot[category]];
            updatedCategorySelections[index] = value;
            return { ...prevLoot, [category]: updatedCategorySelections };
        });
    };

    // Add a new dropdown for a category
    const handleAddDropdown = (category) => {
        setLoot((prevLoot) => ({
            ...prevLoot,
            [category]: [...prevLoot[category], "none"], // Add a new empty selection
        }));
    };

    // Check if at least one selection is made
    const hasSelections = () => Object.values(loot).some((selections) => selections.some((value) => value !== "none"));

    // Handle showing the loot pool
    const handleShowClick = () => {
        if (hasSelections()) {
            setShowImages(true);
            setLootPoolCreated(true);
        } else {
            alert("Please select at least one item before creating the loot pool.");
        }
    };

    // Handle clearing the loot pool
    const handleRemoveClick = () => {
        setLoot({
            assaultRifle: ["none"],
            shotgun: ["none"],
            submachineGun: ["none"],
            sniper: ["none"],
            pistol: ["none"],
            consumable: ["none"],
            exotic: ["none"],
        });
        setShowImages(false);
        setLootPoolCreated(false);
    };

    return (
        <div className="card">
            <table>
                <tbody>
                    {weaponCategories.map(({ name, label, options }) => (
                        <tr key={name}>
                            <td>{label}</td>
                            <td>
                                {loot[name].map((selectedOption, index) => {
                                    // Filter out already selected options in this category
                                    const availableOptions = options.filter((option) => !loot[name].includes(option) || option === selectedOption);

                                    return (
                                        <select key={index} name={name} value={selectedOption} onChange={(e) => handleChange(e, name, index)}>
                                            <option value="none">None</option>
                                            {availableOptions.map((option) => (
                                                <option key={option} value={option}>
                                                    {option
                                                        .replace(/([A-Z])/g, " $1") // String processes keys into values e.g. submachineGun = Submachine Gun
                                                        .replace("S M G", "SMG") // Fix in the case of gun abbreviations
                                                        .replace(/^./, (str) => str.toUpperCase())} {/* Capitalize first letter */}
                                                </option>
                                            ))}
                                        </select>
                                    );
                                })}
                            </td>
                            <td>
                                <button className="tableBtn" onClick={() => handleAddDropdown(name)}>+</button>
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

            {/* Show Clear button only if loot pool is created and selections exist */}
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