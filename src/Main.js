import Card from './Card.js';

function Main() {
    return (
        <div className="main">
            <div className="flex" >
                <Card contenue="1"/>
                <Card contenue="2"/>
                <Card contenue="3"/>
            </div>
            <div className="flex" >
                <Card contenue="4"/>
                <Card contenue="5"/>
                <Card contenue="6"/>
            </div>
        </div>
    );
  }
  
  export default Main;