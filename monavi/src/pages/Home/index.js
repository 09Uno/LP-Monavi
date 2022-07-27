import "./index.css"
import Box from "../../components/box";
import { useState } from "react";
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './carossel.css'
import Botao from "../../components/button";
import SegmentosBox from "../../components/segmentosBox";

const handleDragStart = (e) => e.preventDefault();



const items = [

  <Box
    tituloItem1={"Logotipo principal"}
    descricaoItem1={'É a representação gráfica da marca funcionando como assinatura principal da empresa.'}
    tituloItem2={'Logotipo alternativo'}
    descricaoItem2={'è uma variação da sua logo principal, usando os mesmos elementos em outra disposição'}
    onDragStart={handleDragStart} role="presentation" />,

  <Box
    tituloItem1={"Submarca"}
    descricaoItem1={'è uma varoação da sua logo no formato circular'}
    tituloItem2={'Ícone'}
    descricaoItem2={'Elemento, desenho ou sigla que representa a marca'}
    onDragStart={handleDragStart} role="presentation" />,


];

const items2 = [


  <Box
    tituloItem1={""}
    descricaoItem1={''}
    tituloItem2={''}
    descricaoItem2={''}
    onDragStart={handleDragStart} role="presentation" />,

  <Box
    tituloItem1={"Submarca"}
    descricaoItem1={'è uma varoação da sua logo no formato circular'}
    tituloItem2={'Ícone'}
    descricaoItem2={'Elemento, desenho ou sigla que representa a marca'}
    onDragStart={handleDragStart} role="presentation" />,


];
const items3 = [

  <Box
    tituloItem1={"Pattern"}
    descricaoItem1={'É um padrão criado a partir do ícone ou característica da sua indentidade.'}
    tituloItem2={'Paleta de cores'}
    descricaoItem2={'Código das cores utilizadas para uso digital ou impressão.'}
    onDragStart={handleDragStart} role="presentation" />,

  <Box
    tituloItem1={"Tipografia"}
    descricaoItem1={'Nome das fontes utilizadas no projeto'}
    tituloItem2={'Apresentação do projeto'}
    descricaoItem2={'Criamos uma apresentação com o conceito, imagens ilustrativas (mockups e construção do projeto, assim poderá ver </br> como sua marca irá se comportar aplicada.'}
    onDragStart={handleDragStart} role="presentation" />,


];




function Home() {

  return (


    <body class="principal">
      <div class="bannerPrincipal">
        <div class="bannerApresentacao">
          <div class="logoBanner">
            <img src="#" />
          </div>
          <p class="textoBanner">
            Estamos vivendo uma nova era e nada melhor do que revolucionar a forma como sua marca é reconhecida no mercado.

          </p>

          <Botao clidren={'Saiba o que fazemos'} />

        </div>
      </div>

      <div class="videos">
        a

      </div>

      <div class="plus">

        <div class="logoPlus">

          <br />
          <span class="logoPlus1">O que está incluso no plano</span>
          <span class="logoPlus2">IDENTIDADE DE VISUAL PLUS</span>
        </div>
        <div class="conteudoPlus">

          <AliceCarousel
            mouseTracking items={items}
            autoPlay={false}
            disableDotsControls={false}
            default
            disableButtonsControls={true}
            autoPlayStrategy={'none'}
            animationDuration={8000}
            autoPlayInterval={10000}
            infinite
          />
          <AliceCarousel
            mouseTracking items={items2}
            autoPlay={false}
            disableDotsControls={false}
            default
            disableButtonsControls={true}
            autoPlayStrategy={'none'}
            animationDuration={8000}
            autoPlayInterval={11000}
            infinite
          />
          <AliceCarousel
            mouseTracking items={items3}
            autoPlay={false}
            disableDotsControls={false}
            default
            disableButtonsControls={true}
            autoPlayStrategy={'none'}
            animationDuration={8000}
            autoPlayInterval={12000}
            infinite
          />

          <div className="antiPlagio">
            <text className="textoAntiPlagio">indentidade Visual Completa </text>
            <text className="textoAntiPlagio">e com registro antiplágio!</text>
            <Botao clidren={'Fale Conosco'} />
          </div>



        </div>

        <div class="separador">

        </div>
        <div class="manualDaMarca">
          <div className="manualText">
            <text className="titleManual">Manual Da Marca</text>
            <text className="manualTextP">O manual vem com todas as informações e arquivos correspondentes a sua indentidade Visual!</text>
          </div>
        </div>

        <div class="pagamento">

          <div class="caixaPagamento">
            <text className="titlePagamento">Não vai querer perder essa oportunidade incrível né?</text>
            <br />
            <p className="valorPagamento">R$ 1661,00</p>
            <p className="por">Por:</p>
            <p className="valorLong"><span className="valorShort">R$</span>876<span className="valorShort">,00</span></p>
            <p className="desconto">5% off no pix</p>
            <p className="desconto">ou 10x sem juros no cartão de crédito</p>
            <p className="desconto">Parcelas de R$87,00</p>

            <Botao clidren={'Fale com consultor'} />

            <div className="por">Formas de pagamento</div>
            <div className="icones"> </div>

          </div >



        </div>
        <div className="segmentos">

          <div className="segmentosContainer">

            <spam className="segmentosTitle">segmentos em que já atuamos:</spam>

            <div className="areaSegmentos">
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />
              <SegmentosBox />


            </div>

        </div>




        </div>
      </div>

    </body>
  )
}

export default Home;