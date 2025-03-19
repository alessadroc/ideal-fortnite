import React from "react";

// Dynamically import all images from assets
const imageContext = import.meta.glob("./assets/*.png", { eager: true });

const lootImages = {};

// Process each imported image
Object.entries(imageContext).forEach(([path, module]) => {
  const imageName = path.replace("./assets/", "").replace(".png", ""); // Extract filename
  lootImages[imageName] = module.default; // Assign image path
});

function LootPool({ assaultRifle, shotgun, submachineGun, sniper, pistol, consumable, exotic, movement, showImages }) {
  return (
    <>
      {showImages && (
        <div>
          {[...assaultRifle, ...shotgun, ...submachineGun, ...sniper, ...pistol, ...consumable, ...exotic, ...movement]
            .filter((weapon) => weapon !== "none") // Remove "none" selections
            .map((weapon, index) => (
              <img key={index} src={lootImages[weapon]} alt={weapon} />
            ))}
        </div>
      )}
    </>
  );
}

export default LootPool;
