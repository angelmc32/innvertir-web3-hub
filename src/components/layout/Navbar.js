import React, { useRef } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import logo from "../../assets/512-red-logo.svg";

const ROUTES = [
  ["Juega", "/jugar"],
  ["Aprende", "/aprender"],
  ["Explora", "/explorar"],
];

const Navbar = () => {
  const navMenuRef = useRef();

  const navMenuToggle = () => {
    navMenuRef.current.classList.toggle("nav-menu-active");
  };

  return (
    <StyledNav className="uk-navbar uk-navbar-container" uk-navbar="true">
      <div className="uk-navbar-left">
        <NavLink to="/" className="uk-flex uk-flex-middle">
          <div className="uk-navbar-item uk-logo uk-flex uk-flex-middle uk-margin-small-right">
            <img
              data-src={logo}
              width="32"
              height="32"
              alt=""
              data-uk-img=""
              uk-image="true"
            />
          </div>
          innvertir
        </NavLink>
      </div>
      <div className="uk-navbar-right">
        <Hamburger onClick={navMenuToggle} onKeyDown={navMenuToggle}>
          <span />
          <span />
          <span className="uk-margin-remove" />
        </Hamburger>
        <Menu ref={navMenuRef} id="nav-menu" className="uk-navbar-nav">
          {ROUTES.map((route, index) => (
            <li key={index} onClick={navMenuToggle}>
              <NavLink to={route[1]}>{route[0]}</NavLink>
            </li>
          ))}
          <li onClick={navMenuToggle}>
            <NavLink to="/auth/ingresar">
              <button className="uk-button uk-button-primary">Entrar</button>
            </NavLink>
          </li>
        </Menu>
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  background-color: #1f0045 !important;
  max-height: 64px;
  max-width: 100%;

  div > ul > li > a,
  div > a {
    text-transform: none;
    color: #fff;
  }

  .uk-navbar-item,
  .uk-navbar-nav > li > a,
  .uk-navbar-nav > li > div,
  .uk-navbar-toggle {
    min-height: 64px !important;
  }

  div.uk-navbar-left {
    margin-left: 7.5%;
    gap: 10px !important;
  }

  div.uk-navbar-left > a,
  div.uk-navbar-left > a:hover,
  div.uk-navbar-left > a:active,
  div.uk-navbar-left > a:visited,
  a:focus {
    text-decoration: none;
  }

  div.uk-navbar-right > ul > li > a:hover {
    color: #ed1c24;
  }

  div.uk-navbar-right {
    margin-right: 7.5%;
  }

  div.uk-navbar-right > div > p {
    display: none;
  }

  button.uk-button.uk-button-text {
    color: #fff !important;
  }

  button.uk-button.uk-button-text:hover {
    color: #ed1c24 !important;
  }

  button.uk-button.uk-button-text::before {
    color: #ed1c24 !important;
    border-bottom: 1px solid #ed1c24;
  }

  @media screen and (max-width: 767px) {
    #nav-menu,
    #account-menu {
      position: absolute;
      height: calc(100vh - 64px);
      top: 64px;
      background-color: #29005c;
      border-left: #1f0045 solid 5px;
      margin: 0 !important;
      transform: translateX(100%);
      transition: transform 0.5s ease-in;
      right: 0px;
      z-index: 100;
      display: flex;
      flex-direction: column;
      width: 50%;
      gap: 0;
    }

    #nav-menu > * {
      background-color: #29005c;
      height: 64px;
    }

    #nav-menu > *:not(:last-child) {
      border-bottom: 0.5px #fafafa solid;
    }

    .nav-menu-active {
      transform: translateX(0%) !important;
    }
  }

  @media screen and (min-width: 768px) {
    div.uk-navbar-left {
      margin-left: 5%;
    }
    div.uk-navbar-right {
      margin-right: 5%;
    }
  }

  @media screen and (min-width: 1366px) {
    div.uk-navbar-left {
      margin-left: 2.5%;
    }
    div.uk-navbar-right {
      margin-right: 2.5%;
    }

    div.uk-navbar-right > div > p {
      display: block;
      margin-left: 10px;
    }
  }
`;

const Hamburger = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  span {
    height: 3px;
    width: 25px;
    background: #f8f8f8;
    margin-bottom: 6px;
    border-radius: 500px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Menu = styled.ul`
  @media (max-width: 767px) {
    flex-direction: column;
    width: 100%;
    height: 100%;
    li:not(:last-child) {
      box-shadow: 0px 24px 3px -24px #2e1359;
    }
  }
  @media (min-width: 768px) {
    display: flex;
    justify-content: flex-end;
  }
`;

export default Navbar;
