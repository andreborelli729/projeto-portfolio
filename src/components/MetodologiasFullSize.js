import React from 'react';
import responsivo from '../assets/responsivo.png';
import ideia from '../assets/ideia.png' ;
import lista from '../assets/lista.png';

function MetodologiasFullSize(){
    return(
        <section className="metodologiasFullSize" id="metodologias">
            <h3 className="metodologiasTitleFullSize">Melhores resultados</h3>
            <div className="metodologiasGridFullSize">
        <figure className="metodologiasFigureFullSize1">
        <img src={responsivo} alt="Imagem simbolizando um site responsivo" className="metodologiaImgFullSize"></img>
<figcaption className="metodologiasFigCaptionFullSize">

<h5 className="habilidadeTitleFullSize">Site Responsivo</h5>
<p className="habilidadesParagraphFullSize">Meus sites são dinâmicos, tendo todos versões adaptáveis para Celular, Tablet e PC.</p>
</figcaption>


            </figure>
            <figure className="metodologiasFigureFullSize2">
        <img src={ideia} alt="Imagem simbolizando o uso de componentes dinâmicos" className="metodologiaImgFullSize"></img>
<figcaption className="metodologiasFigCaptionFullSize">

<h5 className="habilidadeTitleFullSize">Componentes Dinâmicos</h5>
<p className="habilidadesParagraphFullSize">Sessões que interagem com o usuário, tornando o projeto mais interessante e chamativo.</p>
</figcaption>


            </figure>
            <figure className="metodologiasFigureFullSize3">
        <img src={lista} alt="Imagem simbolizando o uso de boas práticas" className="metodologiaImgFullSize"></img>
<figcaption className="metodologiasFigCaptionFullSize">

<h5 className="habilidadeTitleFullSize">Boas Práticas</h5>
<p className="habilidadesParagraphFullSize">Meus projetos utilizam das linguagens mais modernas, através de metodologias coerentes ao caso, código organizado, com boa sintaxe e limpo.</p>
</figcaption>


            </figure>

                </div>
            </section>
    );
}

export default MetodologiasFullSize;