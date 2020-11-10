import React from 'react';
import c from './nav.module.css';


const Nav = (props) => {
    return (
        <div className={c.nav}>
            <div className={c.nav_menu}>
            <img className={c.logo_menu} src="./images/logo.png" alt="логотип"/>
            <div className={c.nav_adnin}>
                <div className={c.admin}>A</div>
                <div className={c.user}>U</div>
            </div>
            <div className={c.bar_menu}>
                <div className={c.line}></div>
                <div className={c.line}></div>
                <div className={c.line}></div>
            </div>
            </div>
        </div>

    )
} 

export default Nav