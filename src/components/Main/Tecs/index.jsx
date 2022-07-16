import React, { useState } from "react";
import { TecS } from "./style";
import CSSpng from "../../../asserts/CSSpng.png";
import html from "../../../asserts/html.png";
import js from "../../../asserts/js.png";
import react from "../../../asserts/react.png";
import styled from "../../../asserts/styled.png";
import TS from "../../../asserts/TS.png";

export const Tecs = () => {
  const [legends, setLegends] = useState("");
  const [acept, setAcept] = useState(false);

  const tecs = [{
    id:1,
    imgem: CSSpng,
    desc: 'Tenho experiencia com CSS e seus derivados, como animações e pseudo elementos.'
  }, {
    id:2,
    imgem: html,
    desc: 'Conheço toda a semântica necessaria para trabalhar com a DOM'
  }, {
    id:3,
    imgem: js,
    desc: 'Experiência com a logica avançada e os metodos providos da tecnologia'
  }, {
    id: 4,
    imgem: react,
    desc: ''
  }, {
    id: 5,
    imgem: styled,
    desc: ''
  }, {
    id: 6,
    imgem: TS,
    desc: ''
  }]

  const handleClick = () => {
    setAcept(true);
  };

  return (
    <TecS>
      {tecs?.map((item) => {
        return (
          <ul>
            <li key={item.id}><img src={item.imgem} alt="Imagens de tecnologias"/></li>
          </ul>
        )
      })}
  
      <div>{acept && <p>{legends}</p>}</div>
    </TecS>
  );
};
