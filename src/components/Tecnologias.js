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

function Tecnologias() {
    return(
<>
<section className="tecnologiasMobile" id="tecnologias">
<div className="tecnologiasContainerMobile">
    <h2 className="tecnologiasFigCaptionMobile">Técnologias</h2>
<figure className="tecnologiasFigure">
    <img src={react} alt="icone react" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile1">React</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={bootstrap} alt="icone Bootstrap" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile3">Bootstrap</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={node} alt="icone node" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile4">Node</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={wordpress} alt="icone wordpress" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile2">Wordpress</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={html} alt="icone HTML" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile5">HTML</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={css} alt="icone CSS 3" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile6">CSS 3</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={github} alt="icone Github" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile7">Github</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={tailwind} alt="icone tailwind" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile8">Tailwind</figcaption>
</figure>
<figure className="tecnologiasFigure">
    <img src={javascript} alt="icone javascript" className="tecnologiasImgMobile"></img>
    <figcaption className="tecnologiasFigCaptionMobile9">JavaScript</figcaption>
</figure>



</div>
</section>
</>

    );
}


export default Tecnologias;