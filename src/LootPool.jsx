import React from 'react';
import assaultRifleImg from './assets/assaultRifle.png';
import pumpShotgunImg from './assets/pumpShotgun.png';
import tacticalShotgunImg from './assets/tacticalShotgun.png';
import combatShotgunImg from './assets/combatShotgun.png';

// Image import or URL mapping
const lootImages = {
  assaultRifle: assaultRifleImg,
  pumpShotgun: pumpShotgunImg,
  tacticalShotgun: tacticalShotgunImg,
  combatShotgun: combatShotgunImg,
  none: null,
};

function LootPool({
  assaultRifle,
  shotgun,
  submachineGun,
  sniper,
  pistol,
  showImages,
}) {
  return (
    <>
      {showImages && (
        <div>
          {/* Conditionally render images based on selected values */}
          {assaultRifle !== "none" && <img src={lootImages[assaultRifle]} alt="Assault Rifle" />}
          {shotgun !== "none" && <img src={lootImages[shotgun]} alt="Shotgun" />}
          {submachineGun !== "none" && <img src={lootImages[submachineGun]} alt="Submachine Gun" />}
          {sniper !== "none" && <img src={lootImages[sniper]} alt="Sniper" />}
          {pistol !== "none" && <img src={lootImages[pistol]} alt="Pistol" />}
        </div>
      )}
    </>
  );
}

export default LootPool;
