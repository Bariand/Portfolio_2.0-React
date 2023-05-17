import React, { useState } from "react";
import CogwheelIcon from "./Images/CogwheelIcon.jsx";
import BrazilIcon from "./Images/brazilIcon.svg";
import UkIcon from "./Images/uKIcon.svg";

const Navbar = (props) => {
  const [DropDown, SetDropDown] = useState(0);

  const HandleDropDown = () => {
    if (DropDown === 0) {
      return SetDropDown(1);
    } else {
      return SetDropDown(0);
    }
  };

  return (
    <div className="navbar-div">
      <nav>
        <div className="intra-navbar-div left-menu">
          <a className="navbar-link" href="#section-header">
            <p className="pt-br">{props.Language === 0 ? "Início" : "Home"}</p>
          </a>
          <a className="navbar-link" href="#about-me">
            <p className="pt-br">{props.Language === 0 ? "Sobre" : "About"}</p>
          </a>
          <a className="navbar-link" href="#projects">
            <p className="pt-br">{props.Language === 0 ? "Projetos" : "Projects"}</p>
          </a>
        </div>
        <div className="intra-navbar-div right-menu dropdown cog-menu">
          <span id="cog-span">
            <a className="navbar-link cog-link" onClick={HandleDropDown}>
              <CogwheelIcon alt="ícone de uma roda dentada que abre o menu com propriedades da página" className={DropDown === 0 ? "cog-img stop" : "cog-img rotate"} />
            </a>
          </span>
          <div className={DropDown === 0 ? "dropdown-content" : "dropdown-content show-dropdown"} id="cog-dropdown">
            <div className="form-check form-switch">
              <div className="switch-span">
                <label
                  className="form-check-label"
                  htmlFor="flex-switch-check1"
                >
                  <p className="pt-br">
                    {props.Language === 0 ? "-CRT Linhas-" : "-CRT Scanlines-"}
                  </p>
                </label>
              </div>
              <div className="switch-span">
                <p className="switch-text">0</p>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={true}
                  id="flex-switch-check1"
                  onChange={() => {}}
                />
                <p className="switch-text">I</p>
              </div>
            </div>

            <div className="form-check form-switch">
              <div className="switch-span">
                <label
                  className="form-check-label"
                  htmlFor="flex-switch-check2"
                >
                  <p className="pt-br">
                    {props.Language === 0 ? "-CRT Efeito-" : "-CRT FX-"}
                  </p>
                </label>
              </div>
              <div className="switch-span">
                <p className="switch-text">0</p>
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="flex-switch-check2"
                  onChange={() => {}}
                />
                <p className="switch-text">I</p>
              </div>
            </div>

            <div className="form-check form-switch">
              <div className="switch-span">
                <label
                  className="form-check-label"
                  htmlFor="flex-switch-check3"
                >
                  <p className="pt-br">
                    {props.Language === 0 ? "-Linguagem-" : "-Language-"}
                  </p>
                </label>
              </div>
              <div className="switch-span">
                <img
                  className="switch-text"
                  src={BrazilIcon}
                  alt="Ícone representando a bandeira do Brasil."
                />
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={false}
                  id="flex-switch-check3"
                  onChange={props.HandleLanguage}
                />
                <img
                  className="switch-text"
                  src={UkIcon}
                  alt="Ícone representando a bandeira do Reino Unido."
                />
              </div>
            </div>

            <div className="form-check form-switch">
              <div className="switch-span">
                <label
                  className="form-check-label"
                  htmlFor="flex-switch-check4"
                >
                  <p className="pt-br">-Tech-</p>
                </label>
              </div>
              <div className="switch-span">
                <p className="switch-text">0</p>
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={true}
                  id="flex-switch-check4"
                  onChange={() => {}}
                />
                <p className="switch-text">I</p>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
