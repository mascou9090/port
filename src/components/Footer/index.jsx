import React from 'react'
import { FooterS } from './style';

export const Footer = () => {
  const date = new Date().getFullYear(); 
  return (
    <FooterS id="FOOTER"> &copy; {date} Marcondes F Pinheiro </FooterS>
  )
}
