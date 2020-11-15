import React from "react";
import c from "./form.module.css";

const Form = (props) => {
  return (
    <div className={c.form_wrapper}>
      <div className={c.form}>
        <form  action="contact-form.php" method="post">
       
          <input
            type="text"
            name="name"
            className={c.input_name}
            placeholder="Имя"
            required 
          />
         
          <input
            type="text"
            name="company"
            className={c.input_company}
          />
          
          <input
            type="email"
            name="email"
            className={c.input_mail}
            placeholder="Е-mail"
            required 
          />
          
          <input
            type="tel"
            name="tel"
            className={c.input_phone}
            placeholder="Введите номер телефона"
            required 
          />
          
          <textarea
            type="text"
            name="message"
            className={c.input_message}
            placeholder="Сообщение"
          ></textarea>
           <input name="bezspama" type="text" style="display:none" value="" />
          <button className={c.input_btn}>Submit</button>
        </form>
        <div className={c.contacts_text}>
          <h4>Eaque unde quam neque</h4>
          <p>Unde quibusdam sunt soluta eius corrupti</p>
        </div>
      </div>
    </div>
  );
};

export default Form;
