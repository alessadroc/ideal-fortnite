import React from "react";
import Item from "./Item.jsx"

// Dynamically import all images from assets
const imageContext = import.meta.glob("./assets/*.png", { eager: true });

const lootImages = {};

// Process each imported image, giving its assigned name
Object.entries(imageContext).forEach(([path, module]) => {
  const imageName = path.replace("./assets/", "").replace(".png", ""); // Extract filename
  lootImages[imageName] = module.default; // Assign the image path
});

function LootPool({ 
  assaultRifle, 
  shotgun, 
  submachineGun, 
  sniper, 
  pistol, 
  consumable, 
  exotic, 
  movement, 
  showImages }) {
    return (
    <>
      {showImages && (
        <div>
          {[...assaultRifle, ...shotgun, ...submachineGun, ...sniper, ...pistol, ...consumable, ...exotic, ...movement]
            .filter((weapon) => weapon !== "none") // Remove "none" selections
            .map((weapon, index) => (
              <Item key={index} source={lootImages[weapon]} onClick={() => onItemClick?.(weapon)}/>
            ))}
        </div>
      )}
    </>
  );
}

export default LootPool;
