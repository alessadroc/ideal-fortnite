import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import AllWeapons from "./AllWeapons.jsx"
import LootPool from "./LootPool.jsx"

function App() {
  return (
    <div className="app-container">
      <Header></Header>
      <AllWeapons></AllWeapons>
      <LootPool></LootPool>
      <Footer></Footer>
    </div>
  )
}

export default App;
