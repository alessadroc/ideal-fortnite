// This code is not being used

function AllConsumables() {
    return (
    <>
        <table>
            <tr>
                <td>Shields</td>
                <td>
                    <select name="shields" id="shieldDropdown">
                        <option value="none">None</option>
                        <option value="smallShieldPotion">Small Shield Potion</option>
                        <option value="shieldPotion">Shield Potion</option>
                        <option value="slurpJuice">Slurp Juice</option>
                        <option value="chugJug">Chug Jug</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>Health</td>
                <td>
                    <select name="health" id="healthDropdown">
                        <option value="none">None</option>
                        <option value="bandage">Bandage</option>
                        <option value="medkit">Medkit</option>
                        <option value="guzzle">GuzzleJuice</option>
                    </select>
                </td>
            </tr>
        </table>
    </>
    )
}

export default AllConsumables;