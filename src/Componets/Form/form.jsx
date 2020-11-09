import React from 'react';
import c from './form.module.css';


const Form = (props) => {
    return (
        <div className={c.form_wrapper}>
            <div className={c.form}>
                <form>
                    <input type="text" name="name" className={c.input_name} placeholder="Имя"/>
                    <input type="text" name="name" className={c.input_company} placeholder="Компания"/>
                    <input type="text" name="name" className={c.input_mail} placeholder="Е-mail"/>
                    <input type="text" name="name" className={c.input_phone} placeholder="Телефон"/>
                    <textarea type="text" name="name" className={c.input_message} placeholder="Сообщение"></textarea>
                    <button className={c.input_btn}>Submit</button>
                </form>
                <div className={c.contacts_text}>
                    <h4>Eaque unde quam neque</h4>
                    <p>Unde quibusdam sunt soluta eius corrupti</p>
                </div>
            </div>
            
        </div>

     
    )
} 

export default Form