import { render } from '@testing-library/react';
import React from 'react';
import c from './contacts.module.css';
import Nav from '../Nav/nav'
import Form from '../Form/form';
import Footer from '../Footer/footer';

const Contacts = (props) => {
    return (
        <div className={c.contacts}>
            <Nav />
            <section className={c.section_big}>
                <img className={c.section_big_img} src="https://via.placeholder.com/850x744" alt=""/>
            <h3>Контакты</h3>
            </section>
            <Form />
            <section class="section_mini">
                <img class="section_big_mini" src="https://via.placeholder.com/650x540" alt=""/>
            </section>
            <Footer />
  
        </div>

       
    )
} 

export default Contacts