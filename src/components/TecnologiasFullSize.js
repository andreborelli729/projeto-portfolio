import React from 'react';
import github from '../assets/github.png';
import css from '../assets/css.png';
import html from '../assets/html.png';
import javascript from '../assets/javascript.png';
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import node from '../assets/node.png';
import bootstrap from '../assets/bootstrap.png';
import wordpress from '../assets/wordpress.png';

function TecnologiasFullSize(){
    return(

        <section className="tecnologiasFullSize">
                <h2 className="tecnologiasTitleFullSize">Técnologias</h2>
                <div className="tecnologiasGridFullSize">
                <figure className="tecnologiasFigureFullSize1">
    <img src={react} alt="icone react" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize1">React</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize2">
    <img src={bootstrap} alt="icone Bootstrap" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize3">Bootstrap</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize3">
    <img src={node} className="tecnologiasImgFullSize" alt="imagem referente ao Node JS"></img>
    <figcaption className="tecnologiasFigCaptionFullSize4">Node</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize4">
    <img src={wordpress} alt="icone wordpress" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize2">Wordpress</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize5">
    <img src={html} alt="icone HTML" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize5">HTML</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize6">
    <img src={css} alt="icone CSS 3" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize6">CSS 3</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize7">
    <img src={github} alt="icone Github" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize7">Github</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize8">

    <img src={tailwind} alt="icone tailwind" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize8">Tailwind</figcaption>
</figure>
<figure className="tecnologiasFigureFullSize9">
    <img src={javascript} alt="icone javascript" className="tecnologiasImgFullSize"></img>
    <figcaption className="tecnologiasFigCaptionFullSize9">JavaScript</figcaption>
</figure>


                </div>



        </section>
    );
}

export default TecnologiasFullSize;