import React from 'react';
import banner from '../assets/banner.jpg';
import logo2 from '../assets/logo2.png';

function Banner(){
    return(
        <>
        <section className="banner" id="banner" style={{ backgroundImage: `url(${banner})` }}>
            <img src={logo2} alt="foto de André Borelli" className="bannerImg"></img>

            <p className="bannerParagraph">Engenheiro Front-end formado em Gestão da Técnologia da Informação pela Puc-Campinas, cidadão brasileiro e português, com 4 anos de experiência em front-end, aberto para projetos como freelancer e também fazer parte da equipe de TI em uma empresa.</p>
            <a href="#projetos"><button className="bannerBtn">Meus Projetos</button></a>
        </section>

        </>
    );
}

export default Banner;