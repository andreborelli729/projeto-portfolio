import React from 'react';
import responsivo from '../assets/responsivo.png';
import ideia from '../assets/ideia.png' ;
import lista from '../assets/lista.png';

function Metodologias() {
    return(
        <>
        <section className="metodologiasMobile" id="metodologias">
            <div className="metodologiasContainerMobile">
        <h3 className="metodologiasTitleMobile">Melhores resultados</h3>
        <figure><img src={responsivo} alt="Imagem simbolizando um site responsivo" className="metodologiaImgMobile"></img></figure>
<figcaption>
    <h5 className="habilidadeTitle">Site Responsivo</h5>
    <p className="habilidadesParagraph">Meus sites são dinâmicos, tendo todos versões adaptáveis para Celular, Tablet e PC.</p>
</figcaption>
<figure><img src={ideia} alt="Imagem simbolizando o uso de componentes dinâmicos" className="metodologiaImgMobile"></img></figure>
<figcaption>
    <h5 className="habilidadeTitle">Componentes Dinâmicos</h5>
    <p className="habilidadesParagraph">Sessões que interagem com o usuário, tornando o projeto mais interessante e chamativo</p>
</figcaption>
<figure><img src={lista} alt="Imagem simbolizando o uso de boas práticas" className="metodologiaImgMobile"></img></figure>
<figcaption>
    <h5 className="habilidadeTitle">Boas Práticas</h5>
    <p className="habilidadesParagraph">Meus projetos utilizam das linguagens mais modernas, através de metodologias coerentes ao caso, código organizado, com boa sintaxe e limpo.</p>
</figcaption>
</div>
        </section>
        </>
    );
}

export default Metodologias;