import React from 'react';

const Header = ({ buttons }) => {
    return ( 
        <div className="app__header">
            <div className="app__header_button-box">
                {buttons.map( button => 
                    <button key={button.label}
                            className={"app__header_button btn btn-" + button.type }
                            onClick={ () => button.action(button)}
                            >{button.label}</button>
                    )}
            </div>
        </div>
     );
}
 
export default Header;