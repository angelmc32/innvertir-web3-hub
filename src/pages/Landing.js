import React, { Fragment } from "react";
import styled from "styled-components";
import { ReactComponent as ReactLogo } from "../assets/512-original-logo.svg";
import heroImg from "../assets/step-into-web3.png";
import supportImg from "../assets/ready-to-explore.png";
import learnImg from "../assets/card-images/cognitive-learn.png";
import connectImg from "../assets/card-images/world-connect-community.png";
import earnImg from "../assets/card-images/gamification-earn-rewards.png";
import minnvuImg1 from "../assets/discover-minnvus/minnvu-card-1.png";
import minnvuImg2 from "../assets/discover-minnvus/minnvu-card-2.png";
import minnvuImg3 from "../assets/discover-minnvus/minnvu-card-3.png";
import minnvuImg4 from "../assets/discover-minnvus/minnvu-card-4.png";

const Landing = () => {
  return (
    <Fragment>
      <HeroContainer>
        <div className="hero-copy-container">
          <h1>
            Aprende jugando y
            <br /> descubre Web3 ganando
          </h1>
          <div className="button-container">
            <button className="uk-button uk-button-white uk-button-large">
              ¡Quiero aprender!{" "}
              <div className="btn-logo-container">
                <ReactLogo />
              </div>
            </button>
          </div>
        </div>
      </HeroContainer>
      <MinnvuContainer>
        <div className="header-container">
          <h2>¡Obtén tu Minnvu para esta aventura!</h2>
        </div>
        <div className="img-container">
          <div className="minnvu-img-container">
            <div className="minnvu-img-wrapper">
              <img
                src={minnvuImg1}
                alt="Discover a new dimension with new creatures."
              />
            </div>
            <div className="minnvu-img-wrapper">
              <img
                src={minnvuImg2}
                alt="Discover a new dimension with new creatures."
              />
            </div>
            <div className="minnvu-img-wrapper">
              <img
                src={minnvuImg3}
                alt="Discover a new dimension with new creatures."
              />
            </div>
            <div className="minnvu-img-wrapper">
              <img
                src={minnvuImg4}
                alt="Discover a new dimension with new creatures."
              />
            </div>
          </div>
        </div>
        <div className="copy-container">
          <p>
            Los Minnvus son criaturas digitales que habitan la dimensión de
            Web3. Sabemos muy poco de ellos. ¡Obtén el tuyo y ayúdanos a
            descubrir sus secretos!
          </p>
          <div className="button-container">
            <button className="uk-button uk-button-primary uk-button-large">
              ¡Obtener Minnvu!
            </button>
          </div>
        </div>
      </MinnvuContainer>
      <BenefitsContainer>
        <div className="header-container">
          <h2>
            Empieza a explorar y aprender, totalmente{" "}
            <span className="text-bold">gratis</span>.
          </h2>
        </div>
        <div
          className="benefits-cards-container"
          uk-height-match="target: > div > .uk-card"
        >
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={learnImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title">Diviértete aprendiendo</h3>
                <p>
                  Juega y explora las aplicaciones Web3. Aprenderás de manera
                  práctica, y tendrás recursos adicionales para reforzar.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={connectImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title">Conecta con amigos y comparte</h3>
                <p>
                  ¡Interacciones sociales en Web3! Conoce a otros exploradores,
                  comparte aventuras y compite por recompensas.
                </p>
              </div>
            </div>
          </div>
          <div className="card-container">
            <div className="uk-card uk-card-default uk-card-body">
              <div className="card-img-wrapper">
                <img src={earnImg} alt="Learn while you are playing." />
              </div>
              <div className="card-text-wrapper">
                <h3 className="uk-card-title">Genera valor por tus acciones</h3>
                <p>
                  Descubre cómo generar ingresos por tu contenido y tus
                  interacciones. Explora proyectos para invertir, de manera
                  segura.
                </p>
              </div>
            </div>
          </div>
        </div>
      </BenefitsContainer>
      <SupportContainer>
        <div className="support-container">
          <div className="support-header-container">
            <h2>
              Estás entrando a una nueva dimensión, donde tú tienes el control.
            </h2>
          </div>
          <div className="support-img-container">
            <div className="support-img-wrapper">
              <img src={supportImg} alt="Logo" />
            </div>
          </div>
          <div className="support-copy-container">
            <p>
              Te acompañamos durante el camino. Con nosotros, descubrirás nuevas
              aplicaciones y empezar a interactuar con el futuro del internet.
            </p>
            <p>Te damos la bienvenida a Web3</p>
            <div className="button-container">
              <button className="uk-button uk-button-primary uk-button-large">
                ¡Quiero explorar!
              </button>
            </div>
          </div>
        </div>
      </SupportContainer>
      <FooterContainer>
        <div className="text-container">Innvertir © 2023</div>
        <div className="social-icons">
          <a href="https://www.lensfrens.xyz/innvertir.lens">Lens 🌱</a>
          <a href="https://twitter.com/innvertir" uk-icon="twitter"></a>
          <a
            href="https://www.instagram.com/innvertir/"
            uk-icon="instagram"
          ></a>
          <a href="https://www.youtube.com/@innvertir" uk-icon="youtube"></a>
        </div>
      </FooterContainer>
    </Fragment>
  );
};

const HeroContainer = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;

  background-image: linear-gradient(
      to bottom,
      rgba(31, 0, 69, 0.975),
      rgba(46, 19, 89, 0.5)
    ),
    url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div.hero-copy-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 60px 0 120px 0;
    text-align: center;
    h1 {
      color: #fafafa;
    }

    div.button-container {
      display: flex;
      justify-content: center;
    }

    button.uk-button.uk-button-large {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
      padding: 0 20px;
      div.btn-logo-container > svg {
        max-height: 1.85rem;
        max-width: 48px;
      }
    }
  }

  @media screen and (min-width: 768px) {
    align-items: center;
    div.hero-copy-container {
      width: 50%;
      text-align: center;
      margin-top: 80px;
    }
    div.hero-copy-container > div.button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    div.hero-copy-container > div.button-container > button {
      font-size: 1.15rem;
    }
  }
  @media screen and (min-width: 1280px) {
    align-items: center;
    div.hero-copy-container {
      width: 50%;
      text-align: center;
      margin-top: 40px;
    }
    div.hero-copy-container > h1 {
      font-size: 3rem;
    }
    div.hero-copy-container > div.button-container {
      width: 100%;
      display: flex;
      justify-content: center;
      margin-top: 40px;
    }
    div.hero-copy-container > div.button-container > button {
      font-size: 1.15rem;
    }
  }
`;

const MinnvuContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;
  div.header-container,
  div.img-container {
    width: 90%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
  div.header-container > h2 {
    margin-top: 15%;
    color: #4e2097;
  }
  div.img-container > div.minnvu-img-container {
    width: 100%;
    text-align: center;
    margin-bottom: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    * {
      margin-bottom: 10px;
    }
  }
  div.img-container > div.minnvu-img-container > div.minnvu-img-wrapper {
    width: 45%;
  }
  div.img-container > div.minnvu-img-container > div.minnvu-img-wrapper > img {
    border-radius: 5%;
    width: 100%;
  }
  div.copy-container {
    width: 90%;
    p {
      text-align: center;
      font-size: 1.1rem;
    }
  }
  div.copy-container > div.button-container {
    display: flex;
    justify-content: center;
    font-size: 1.1rem;

    button.uk-button.uk-button-large {
      font-size: 1.1rem;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    div.header-container > h2 {
      margin-top: 10%;
    }
    div.img-container > div.minnvu-img-container {
      width: 90%;
    }
    div.img-container > div.minnvu-img-container > div.minnvu-img-wrapper {
      width: 45%;
    }
  }
  @media screen and (min-width: 960px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
    grid-auto-rows: 1fr;
    padding-left: 25px;
    padding-right: 25px;

    div.header-container {
      grid-area: 1 / 1 / 2 / 2;
      height: 100%;
      display: flex;
      align-items: end;
      text-align: center;
      h2 {
        margin-bottom: 40px;
      }
    }
    div.img-container {
      grid-area: 1 / 2 / 3 / 3;
      height: 100%;
      display: flex;
      align-items: center;
    }
    div.copy-container {
      grid-area: 2 / 1 / 3 / 2;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: top;
      align-items: center;
    }

    div.header-container > h2 {
      margin-top: 5%;
    }
    div.img-container > div.minnvu-img-container {
      width: 100%;
    }
    div.img-container > div.minnvu-img-container > div.minnvu-img-wrapper {
      width: 45%;
    }
  }
`;

const BenefitsContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  background-color: #1f0045;

  div.header-container {
    width: 100%;
    margin-top: 40px;
    text-align: center;
    padding: 0 10px;
    h2 {
      color: #f8f8f8;
    }
    h2 > span.text-bold {
      color: #f36058;
      font-weight: bold;
    }
  }

  div.benefits-cards-container {
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-bottom: 60px;
  }

  div.benefits-cards-container > div.card-container {
    width: 100%;
    margin-bottom: 20px;
  }

  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body {
    text-align: center;
    border-radius: 10px;
    border: 2px solid #2e1359;
    p {
      margin: 0;
    }
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper {
    display: flex;
    flex-direction: column;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper
    > h3 {
    margin-top: 20px;
    color: #4e2097;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-text-wrapper
    > p {
    color: #333;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-img-wrapper {
    display: flex;
    justify-content: center;
  }
  div.benefits-cards-container
    > div.card-container
    > div.uk-card.uk-card-default.uk-card-body
    > div.card-img-wrapper
    > img {
    max-width: 25%;
  }

  @media screen and (min-width: 768px) {
    div.header-container {
      margin: 60px 0 20px 0;
    }
    div.benefits-cards-container
      > div
      > div.uk-card.uk-card-default.uk-card-body {
      border: 2px solid red;
    }

    div.benefits-cards-container
      > div.card-container
      > div.uk-card.uk-card-default.uk-card-body
      > div.card-img-wrapper
      > img {
      max-width: 15%;
    }
  }
  @media screen and (min-width: 960px) {
    div.header-container {
      margin: 60px 0 0px 0;
    }
    div.benefits-cards-container {
      width: 90%;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }

    div.benefits-cards-container > div.card-container {
      width: 30%;
      margin-bottom: 40px;
      height: 1;
    }

    div.benefits-cards-container
      > div.card-container
      > div.uk-card.uk-card-default.uk-card-body
      > div.card-img-wrapper
      > img {
      max-width: 40%;
    }
  }
`;

const SupportContainer = styled.section`
  width: 100vw;
  min-height: calc(100vh - 64px);
  display: flex;
  flex-direction: column;
  align-items: center;

  div.support-container {
    margin-top: 5%;
    width: 90%;
  }
  div.support-container > div.support-header-container {
    text-align: center;
    width: 95%;
  }

  div.support-container > div.support-header-container > h2 {
    color: #4e2097;
    margin-bottom: 20px;
  }

  div.support-container > div.support-img-container {
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
  }
  div.support-container
    > div.support-img-container
    > div.support-img-wrapper
    > img {
    border-radius: 5%;
    width: 100%;
  }
  div.support-container > div.support-copy-container > p {
    text-align: center;
    font-size: 1.1rem;
  }
  div.support-container > div.support-copy-container > div.button-container {
    display: flex;
    justify-content: center;
    font-size: 1.1rem;

    button.uk-button.uk-button-large {
      font-size: 1.1rem;
      margin-bottom: 40px;
    }
  }

  @media screen and (min-width: 768px) {
    min-height: auto;
    div.support-container {
      margin-top: 5%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    .support-header-container {
      width: 100%;
      margin-bottom: 20px;
    }
    div.support-container > div.support-img-container {
      width: 50%;
    }
    div.support-container > div.support-copy-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }
    div.support-container > div.support-img-container {
      margin-bottom: 0;
    }
  }
  @media screen and (min-width: 1280px) {
    height: calc(100vh - 64px);
    div.support-container {
      width: 80%;
    }
    div.support-container
      > div.support-img-container
      > div.support-img-wrapper
      > img {
      border-radius: 5%;
      width: 80%;
    }
    div.support-container {
      margin-top: 5%;
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 40px;
    }
    div.support-header-container {
      width: 100%;
      margin-bottom: 20px;
    }
    div.support-container > div.support-img-container {
      width: 50%;
      margin-bottom: 0;
    }
    div.support-container > div.support-copy-container {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        width: 80%;
        margin-top: 0;
        font-size: 1.25rem;
      }
    }
  }
`;

const FooterContainer = styled.section`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  background-color: #1f0045;
  color: #f8f8f8;
  a {
    color: #f8f8f8;
  }
  .text-container,
  .social-icons {
    width: 50%;
    display: flex;
  }
  .text-container {
    justify-content: start;
  }

  .social-icons {
    justify-content: space-around;
  }

  @media screen and (min-width: 768px) {
    .social-icons {
      justify-content: end;
    }
    .social-icons > * {
      margin-right: 20px;
      display: flex;
      align-items: center;
    }
  }
`;

export default Landing;
