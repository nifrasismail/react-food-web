import React from 'react';

import HeaderCardButton from './HeaderCartButton'

import classes from './Header.module.css';

import mealImage from '../../assets/meals.jpeg';

const Header = props => {
    return <>
        <header className={classes.header}>
            <h1>Food Order Web</h1>
            <HeaderCardButton />
        </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="Delicious Food Table"/>
        </div>
    </>
}

export default Header;