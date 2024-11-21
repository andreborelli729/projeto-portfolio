import React from 'react';
import siteOlimipadas from '../assets/siteolimpiadas.png';
import siteMetalium from '../assets/sitemetalium.png';
import siteOffspring from '../assets/siteoffspring.png';
import siteKellySlater from '../assets/sitekellyslater.png';

function Projetos() {
    return(

        <>
        <section className="projetosMobile" id="projetos">
            <h2 className="projetosTitle">Meus Projetos</h2>
            <a href="https://guiageralolimpiadas.netlify.app/"><figure><img src={siteOlimipadas} className="projetosImg"></img><figcaption className="projetosFigcaption">Guia Geral das Olímpiadas</figcaption></figure></a>
            <a href="https://examplemadebyandreborelli.netlify.app/"><figure><img src={siteMetalium} className="projetosImg"></img><figcaption className="projetosFigcaption">Metalium</figcaption></figure></a>
            <a href="https://offspringtour.netlify.app/"><figure><img src={siteOffspring} className="projetosImg"></img><figcaption className="projetosFigcaption">Offspring Tour</figcaption></figure></a>
            <a href="https://kellyslaterwavecompanyexample.netlify.app/"><figure><img src={siteKellySlater} className="projetosImg"></img><figcaption className="projetosFigcaption">Kelly Slater Surf Co (Trabalhando nele atualmente...)</figcaption></figure></a>

        </section>
        </>
    );
}

export default Projetos;