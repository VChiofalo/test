import './App.css';
import Main from './Main';
import HeaderFooter from './HeaderFooter';
import { useState } from 'react';

function App() {

  // Variable d'état
  const [compteur, setCompteur] = useState(0);

  let newCompteur = compteur + 1;

  function testClic() {
    setCompteur(newCompteur);
  }

  return (
    <div className="App">
      Compteur : {compteur}
      <HeaderFooter contenue=" du header"/>
      <Main testClic={testClic}/>
      <HeaderFooter contenue=" du footer"/>
    </div>
  );
}

export default App;
