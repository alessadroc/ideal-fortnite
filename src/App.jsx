import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import WeaponClasses from "./WeaponClasses.jsx"
import AllWeapons from "./AllWeapons.jsx"
import AllConsumables from "./AllConsumables.jsx"
import LootPool from "./LootPool.jsx"

function App() {
  return (
    <>
      <Header></Header>
      <WeaponClasses></WeaponClasses>
      <AllWeapons></AllWeapons>
      <AllConsumables></AllConsumables>
      <LootPool></LootPool>
      <Footer></Footer>
    </>
  )
}

export default App
