import { render } from '@testing-library/react';
import React from 'react';
import c from './footer.module.css';


const Footer = (props) => {
    return (
        <footer>
            <div className={c.phone}>
                <p>+37529 348-92-29</p>
                <p>+37529 348-92-29</p>
            </div>
            <div className={c.card}>
                <img src="" alt=""/>
                <img src="" alt=""/>
                <img src="" alt=""/>
            </div>
            <div className={c.network}>
                <p>Fasebook</p>
                <p>Instagram</p>
            </div>
        </footer>

 
    




    )
} 

export default Footer