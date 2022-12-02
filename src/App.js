import './App.css';
import Main from './Main';
import HeaderFooter from './HeaderFooter';

function testClic() {
  alert('ok');
}

function App() {
  return (
    <div className="App">
      <HeaderFooter contenue=" du header" testClic={testClic}/>
      <Main/>
      <HeaderFooter contenue=" du footer"/>
    </div>
  );
}

export default App;
