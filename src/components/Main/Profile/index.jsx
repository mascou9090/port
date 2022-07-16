import React from 'react'
import { ProfileS } from './style'
import perfil from '../../../asserts/perfil.png'

export const Profile = () => {
  return (
    <ProfileS>
      <div>
        <h4>Olá</h4>
        <p>Seja bem vindo ao meu portfolio.</p>
        <p>Lançar aqui um 'Hello world' para me libertar da maldição.</p>
      </div>
      <div>
        <img src={perfil} alt="imagem de perfil"/>
      </div>
    </ProfileS>
  )
}

/**<h4>Desenvolvedor Front End</h4>
        <p>Formado em Analise e desenvolvimento de sistemas.</p>
        <p>Apaixonado em tecnologia e claro em codigos.</p>
        <p>Em constante evolução, para tras nem para pegar empulso.</p> */