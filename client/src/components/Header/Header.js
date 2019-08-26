import React from 'react';
import classes from './Header.module.css';
import Navbar from 'react-bulma-components/lib/components/navbar';
import Heading from 'react-bulma-components/lib/components/heading';

function Header() {
    let classNames = ["navbar is-info", classes.header].join(" ");

    return <Navbar className={classNames}>
            <div className="content has-text-centered mx-auto">
                <Heading renderAs="h1">To-Do app</Heading>
            </div>
           </Navbar>;
}

export default Header;