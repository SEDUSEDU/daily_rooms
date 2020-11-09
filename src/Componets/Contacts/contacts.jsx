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
                <img className={c.section_big_img} src="images/big_contacts.jpg" alt="img"/>
            <h3>Контакты</h3>
            </section>
            <Form />
            <section className={c.section_mini}>
                <img className={c.section_mini_img} src="images/mini_contacts.jpg" alt="img"/>
            </section>
            <div className={c.chat}>
                <div className={c.title}>Отправьте нам сообщение</div>
                <textarea type="text" className="chat_message" id=""></textarea>

            </div>
            <Footer />
  
        </div>

       
    )
} 

export default Contacts