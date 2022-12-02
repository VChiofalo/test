import Menu from './Menu.js';

function HeaderFooter(props) {
    return (
        <>
            <div className="flex">
                <Menu/><p>{props.contenue}</p>
            </div>
        </>
    );
  }
  
  export default HeaderFooter;