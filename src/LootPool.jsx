import React from 'react';

/* Image Imports */

// ARs
import assaultRifleImg from './assets/assaultRifle.png';
import burstARImg from './assets/burstAR.png';
import heavyARImg from './assets/heavyAR.png';
import supressedARImg from './assets/supressedAR.png';

// Shotties
import pumpShotgunImg from './assets/pumpShotgun.png';
import tacticalShotgunImg from './assets/tacticalShotgun.png';
import combatShotgunImg from './assets/combatShotgun.png';
import chargeShotgunImg from './assets/chargeShotgun.png';
import leverActionShotgunImg from './assets/leverActionShotgun.png';

// SMGs
import tacticalSMGImg from './assets/tacticalSubmachinegun.png';
import combatSMGImg from './assets/combatSMG.png';
import supressedSMGImg from './assets/supressedSMG.png';
import stingerSMGImg from './assets/stingerSMG.png';
import smgImg from './assets/submachinegun.png';

// Snipers
import boltActionSniperRifleImg from "./assets/boltActionSniperRifle.png";
import huntingRifleImg from "./assets/huntingRifle.png";
import heavySniperImg from './assets/heavySniper.png';
import semiAutoSniperImg from './assets/semiAutoSniper.png'

// Pistols
import pistolImg from "./assets/pistol.png"
import handCannonImg from "./assets/handCannon.png"
import supressedPistolImg from "./assets/supressedPistol.png"

// Consumables
import shieldPotionImg from './assets/shieldPotion.png';
import slurpJuiceImg from './assets/slurpJuice.png';
import medkitImg from './assets/medkit.png';
import bandagesImg from './assets/bandage.png';

// Image import or URL mapping
const lootImages = {
  assaultRifle: assaultRifleImg,
  burstAssaultRifle: burstARImg,
  heavyAssaultRifle: heavyARImg,
  supressedAssaultRifle: supressedARImg,

  pumpShotgun: pumpShotgunImg,
  tacticalShotgun: tacticalShotgunImg,
  combatShotgun: combatShotgunImg,
  chargeShotgun: chargeShotgunImg,
  leverActionShotgun: leverActionShotgunImg,

  tacticalSMG: tacticalSMGImg,
  combatSMG: combatSMGImg,
  submachineGun: smgImg,
  supressedSMG: supressedSMGImg,
  stingerSMG: stingerSMGImg,

  boltAction: boltActionSniperRifleImg,
  huntingRifle: huntingRifleImg,
  semiAutoSniper: semiAutoSniperImg,

  pistol: pistolImg,
  handCannon: handCannonImg,
  supressedPistol: supressedPistolImg,

  shieldPotion: shieldPotionImg,
  slurpJuice: slurpJuiceImg,
  medkit: medkitImg,
  bandages: bandagesImg,

  none: null,
};

function LootPool({
  assaultRifle,
  shotgun,
  submachineGun,
  sniper,
  pistol,
  consumable,
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
          {consumable !== "none" && <img src={lootImages[consumable]} alt="Consumable" />}
        </div>
      )}
    </>
  );
}

export default LootPool;
