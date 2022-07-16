import React from "react";
import { Link } from "react-router-dom";
import { HeaderS } from "./style";

export const Header = () => {
  return (
    <HeaderS>
      <h3 id="HOME">Marcondes F Pinheiro</h3>
      <ul>
        <li>
          <a href="#HOME">Home</a>
        </li>
        <li>
          <a href="#SOBRE">Sobre</a>
        </li>
        <li>
          <a href="#FOOTER">Soft-Skills</a>
        </li>
        <li>
          <a href="#CONTATO">Contato</a>
        </li>
      </ul>
    </HeaderS>
  );
};

//https://avatars.githubusercontent.com/u/104319336?v=4
//<li><a href="#HOME">Home</a></li>
