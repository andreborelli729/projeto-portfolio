import React from 'react';
import logo2 from '../assets/logo2.png';


function Footer() {
    return(

        <>
        <section className="footer">
            <p className="footerParagraph">André Borelli Web Developer © 2020 - 2024 Todos os direitos reservados </p>
       <img src={logo2} alt="logo do André Borelli Engenheiro Front End" className="footerLogo"></img>
        </section>
        </>
    );
}

export default Footer;