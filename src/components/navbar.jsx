import React, { Component } from 'react';

//stateles functional component

const NavBar = ({totalCounter}) => {
    return ( 
    <nav class="navbar navbar-light bg-light">
        <span class="navbar-brand mb-0 h1">
            Navbar <span className="badge badge-pill badge-secondary">{totalCounter}</span>
        </span>
    </nav> 
    );
}


export default NavBar;