import React from 'react';
import emailjs from '@emailjs/browser';
import {MdEmail} from 'react-icons/md';
import { BsFillPersonCheckFill} from 'react-icons/bs';
import {ImWhatsapp} from 'react-icons/im';
import { GiConversation } from "react-icons/gi";
import { MdOutlineMessage } from "react-icons/md";
import { useState, useRef } from 'react';









    function Formulario(){
       
        const[name , setName] = useState('');
        const[email, setEmail] = useState('');
        const[subject , setSubject] = useState('');
        const[whatsapp, setWhatsapp] = useState('');
        const[message, setMessage] = useState('');

        const sendEmail = (e) => {
            e.preventDefault();
        
            emailjs
              .sendForm('gmail-portfolio', 'template_42ww0tb', e.target, {
                publicKey: 'vIFnFTNkgsZ3hX8Y6',
              })
              .then(
                () => {
                  console.log('SUCCESS!');
                },
                (error) => {
                  console.log('FAILED...', error.text);
                },
              );
        
            }
        


        return(
        <>
        <section className="form" id="formulario">
            <form onSubmit={sendEmail} className="formMobile">
            <label htmlFor='name' className='label'>< BsFillPersonCheckFill/>Nome Completo</label>
            <input
        type="text"
        id='name'
        className='placeholder'
        placeholder="Digite seu nome..."
        value={name}
        name='name'  onChange={(e) => {
            setName(e.target.value);
          }}
        />
 <label htmlFor='whatsapp' className='label'><ImWhatsapp/>Whatsapp</label>
        
        <input
          type="text"
          className='placeholder'
          placeholder="Digite seu Whatsapp..."
          name='whatsapp'
          id='whatsapp'
          value={whatsapp}
          onChange={(e) => {
            setWhatsapp(e.target.value);
          }}/>
            <label htmlFor="email" className='label' id='email-label'><MdEmail/>E-mail </label>
          <input
          id='email'
            
            type= "email"
            className='placeholder'
            name='email'
            placeholder="Digite seu e-mail..."
            value={email}
             
            onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
               <label htmlFor="subject" className='label' id='email-label'><GiConversation/>Assunto </label>
          <input
          id='subject'
          value={subject}

            type= "text"
            className='placeholder'
            name='subject'
            placeholder="Digite o assunto..."
            onChange={(e) => {
                setSubject(e.target.value);
              }}
            />
<label htmlFor="message" className='label' id='email-label'><MdOutlineMessage />Mensagem</label>

          <input
          id='message'
          value={message}

            type= "text"
            className='placeholder'
            name='message'
            placeholder="Digite a mensagem..."
            onChange={(e) => {
                setMessage(e.target.value);
              }}
            />

            <button className="formBtn">Enviar</button>
            </form>

        </section>
        </>);
    }

    export default Formulario;