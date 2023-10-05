import { Container } from './styles'
import { AiOutlineMail, AiOutlineWhatsApp, AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai'

import React, { useRef } from 'react';
import emailjs from 'emailjs-com'


export function Contact(){
    const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

        emailjs.sendForm('service_kgsmez6', 'template_mgkogx8', form.current, 'EnGYB3fRdV3gh0wC5')
        
        e.target.reset()
    };    

    return(
        <Container>
            <section id="contact">
                <h2>Contact Me</h2>

                <div className="contact_container">
                    <div className="contact_option">
                        <div className='contact_card'>
                            <AiOutlineMail/>
                            <h4>Email</h4>
                        </div>
                        <h5>fabriciolnm@gmail.com</h5>
                    </div>
                    <div className="contact_option">
                        <div className='contact_card'>
                            <AiOutlineWhatsApp/>
                            <h4>Whatsapp</h4>
                        </div>
                        <h5>+55(12)98131-6241</h5>
                    </div>
                </div>

                
                <form className='form_container' ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your name' required/>
                    <input type="email" name='email' placeholder='Your email' required/>
                    <textarea name="message" rows="7" placeholder='Your message'></textarea>
                    <button type='submit' className='btn'>Send message</button>
                </form>


                <div className='footer'>
                    <a href='https://www.linkedin.com/in/fabriciolnm' target='blank'>
                        <AiOutlineLinkedin/>
                    </a>
                    <a href='https://github.com/fabriciolnm' target='blank'>
                        <AiOutlineGithub/>
                    </a>
                    <h5>Rights reserved - 2023 - Fabricio Morais</h5>
                </div> 
                
            </section>
        </Container>
    )
}       