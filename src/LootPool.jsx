import React from 'react';

/* Image Imports */

// ARs
import assaultRifleImg from './assets/assaultRifle.png';
import burstARImg from './assets/burstAR.png';
import heavyARImg from './assets/heavyAR.png';
import supressedARImg from './assets/supressedAR.png';
import holoTwisterImg from './assets/holoTwister.png';
import strikerClassicImg from './assets/strikerBurstClassic.png';
import strikerBurstReworkImg from './assets/strikerBurstRework.png';

// Shotties
import pumpShotgunImg from './assets/pumpShotgun.png';
import tacticalShotgunImg from './assets/tacticalShotgun.png';
import combatShotgunImg from './assets/combatShotgun.png';
import chargeShotgunImg from './assets/chargeShotgun.png';
import leverActionShotgunImg from './assets/leverActionShotgun.png';
import havocShotgunImg from './assets/havocShotgun.png';
import sentinelShotgunImg from './assets/sentinelShotgun.png';

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
import mammothPistolImg from "./assets/mammothPistol.png";

// Consumables
import shieldPotionImg from './assets/shieldPotion.png';
import slurpJuiceImg from './assets/slurpJuice.png';
import medkitImg from './assets/medkit.png';
import bandagesImg from './assets/bandage.png';
import smallShieldImg from './assets/smallShield.png';
import waterSpriteImg from './assets/waterSprite.png';
import chugSplashImg from './assets/chugSplash.png';
// Exotics
import heistedBreacherShotgunImg from './assets/heistedBreacher.png';
import chiliChugSplashImg from './assets/chiliChugSplash.png'
import heistedAccelerantShotgunImg from './assets/heistedAccelerantShotgun.png'

// Image import and/or URL mapping
const lootImages = {
  assaultRifle: assaultRifleImg,
  burstAssaultRifle: burstARImg,
  heavyAssaultRifle: heavyARImg,
  supressedAssaultRifle: supressedARImg,
  holoTwister: holoTwisterImg,
  strikerBurstClassic: strikerClassicImg,
  strikerBurstRework: strikerBurstReworkImg,

  pumpShotgun: pumpShotgunImg,
  tacticalShotgun: tacticalShotgunImg,
  combatShotgun: combatShotgunImg,
  chargeShotgun: chargeShotgunImg,
  leverActionShotgun: leverActionShotgunImg,
  sentinelShotgun: sentinelShotgunImg,
  havocShotgun: havocShotgunImg,

  tacticalSMG: tacticalSMGImg,
  combatSMG: combatSMGImg,
  submachineGun: smgImg,
  supressedSMG: supressedSMGImg,
  stingerSMG: stingerSMGImg,

  boltAction: boltActionSniperRifleImg,
  huntingRifle: huntingRifleImg,
  heavySniper: heavySniperImg,
  semiAutoSniper: semiAutoSniperImg,

  pistol: pistolImg,
  handCannon: handCannonImg,
  supressedPistol: supressedPistolImg,
  mammothPistol: mammothPistolImg,

  shieldPotion: shieldPotionImg,
  slurpJuice: slurpJuiceImg,
  medkit: medkitImg,
  bandages: bandagesImg,
  smallShield: smallShieldImg,
  waterSprite: waterSpriteImg,
  chugSplash: chugSplashImg,

  heistedBreacherShotgun: heistedBreacherShotgunImg,
  chiliChugSplash: chiliChugSplashImg,
  heistedAccelerantShotgun: heistedAccelerantShotgunImg,

  none: null, //# very important for handling null values
};

function LootPool({ assaultRifle, shotgun, submachineGun, sniper, pistol, consumable, exotic, showImages }) {
  return (
    <>
      {showImages && (
        <div>
          {/* Conditionally render images for each selected weapon */}
          {[...assaultRifle, ...shotgun, ...submachineGun, ...sniper, ...pistol, ...exotic, ...consumable].map((weapon, index) =>
            weapon !== "none" ? <img key={index} src={lootImages[weapon]} alt={weapon} /> : null
          )}
        </div>
      )}
    </>
  );
}

export default LootPool;
