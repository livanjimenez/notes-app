import React from 'react';

function Header() {
    return (<h1 style={header}>Notes</h1>);
}

const header = {
    textAlign: 'center',
    fontSize: '4em',
    padding: '3% 3%',
    fontFamily: 'Beth Ellen, cursive',
    color: 'white',
};

export default Header;