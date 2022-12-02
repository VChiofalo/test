import Card from './Card.js';

function Main(props) {
    return (
        <div className="main">
            <div className="flex" >
                <Card contenue="1" testClic={props.testClic}/>
                <Card contenue="2" testClic={props.testClic}/>
                <Card contenue="3" testClic={props.testClic}/>
            </div>
            <div className="flex" >
                <Card contenue="4" testClic={props.testClic}/>
                <Card contenue="5" testClic={props.testClic}/>
                <Card contenue="6" testClic={props.testClic}/>
            </div>
        </div>
    );
  }
  
  export default Main;