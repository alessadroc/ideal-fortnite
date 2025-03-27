import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import AllWeapons from "./AllWeapons.jsx"
import LootPool from "./LootPool.jsx"
import Popup from "./Popup.jsx"
import Item from "./Item.jsx"
import {useState} from 'react';

{/*Experimenting with popup*/}

function App() {

  const [popupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!popupVisible);
  }

  return (
    <div className="app-container">
      <Header></Header>
      <AllWeapons></AllWeapons>
      <LootPool></LootPool>
      <Item source="./assets/assaultRifle.png" onClick={togglePopup}></Item>
      <Popup trigger={popupVisible} closePopup={togglePopup}><p>Popup Success!</p></Popup>
      <Footer></Footer>
    </div>
  )
}

export default App;
