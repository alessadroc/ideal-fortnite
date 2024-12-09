import React from 'react';

/* Image Imports */

// ARs
import assaultRifleImg from './assets/assaultRifle.png';

// Shotties
import pumpShotgunImg from './assets/pumpShotgun.png';
import tacticalShotgunImg from './assets/tacticalShotgun.png';
import combatShotgunImg from './assets/combatShotgun.png';

// SMGs
import tacticalSMGImg from './assets/tacticalSubmachinegun.png';
import combatSMGImg from './assets/combatSMG.png';

// Snipers
import boltActionSniperRifleImg from "./assets/boltActionSniperRifle.png";
import huntingRifleImg from "./assets/huntingRifle.png";

// Pistols
import pistolImg from "./assets/pistol.png"
import handCannonImg from "./assets/handCannon.png"

// Image import or URL mapping
const lootImages = {
  assaultRifle: assaultRifleImg,

  pumpShotgun: pumpShotgunImg,
  tacticalShotgun: tacticalShotgunImg,
  combatShotgun: combatShotgunImg,

  tacticalSMG: tacticalSMGImg,
  combatSMG: combatSMGImg,

  boltAction: boltActionSniperRifleImg,
  huntingRifle: huntingRifleImg,

  pistol: pistolImg,
  handCannon: handCannonImg,

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
