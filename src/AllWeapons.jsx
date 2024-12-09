

function AllWeapons() {
    return (
        <>
            <table>
                <tr>
                    <td>Assault Rifles</td>
                    <td>
                        <select name="assaultRifles" id="assaultRifles">
                            <option value="none">None</option>
                            <option value="assaultRifle">Assault Rifle</option>
                            <option value="supressedAssaultRifle">Supressed Assault Rifle</option>
                            <option value="heavyAssaultRifle">Heavy Assault Rifle</option>
                            <option value="burstAssaultRifle">Burst Assault Rifle</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Shotguns</td>
                    <td>
                        <select name="shotguns" id="shotgunDropdown">
                            <option value="none">None</option>
                            <option value="pumpShotgun">Pump Shotgun</option>
                            <option value="tacticalShotgun">Tactical Shotgun</option>
                            <option value="combatShotgun">Combat Shotgun</option>
                            <option value="chargeShotgun">Charge Shotgun</option>
                            <option value="leverActionShotgun">Lever-action Shotgun</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Submachine Guns</td>
                    <td>
                        <select name="submachineGuns" id="submachineDropdown">
                            <option value="none">None</option>
                            <option value="submachineGun">Submachine Gun</option>
                            <option value="tacticalSMG">Tactical Submachine Gun</option>
                            <option value="supressedSMG">Supressed Submachine Gun</option>
                            <option value="stingerSMG">Stinger SMG</option>
                            <option value="combatSMG">Combat SMG</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Snipers</td>
                    <td>
                        <select name="snipers" id="sniperDropdown">
                            <option value="none">None</option>
                            <option value="huntingRifle">Hunting Rifle</option>
                            <option value="boltAction">Bolt-Action Sniper Rifle</option>
                            <option value="heavySniper">Heavy Sniper Rifle</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <td>Pistols</td>
                    <td>
                        <select name="pistols" id="pistolDropdown">
                            <option value="none">None</option>
                            <option value="pistol">Pistol</option>
                            <option value="supressedPistol">Supressed Pistol</option>
                            <option value="handCannon">Hand Cannon</option>
                        </select>
                    </td>
                </tr>
            </table>
        </>
    );
}

export default AllWeapons;