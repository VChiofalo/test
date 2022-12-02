function Card(props) {
    return (
        <p className="card" onClick={props.testClic}>Voici mes cartes {props.contenue}</p>
    );
  }
  
  export default Card;