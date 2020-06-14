import React from 'react';

/* Styles */
import { HeaderStyled } from "./styles";

/* Components */
import { Logo } from '../Logo'

export const Header = () => {
   return (
      <HeaderStyled to="/">
         <header>
            <Logo />
         </header>
      </HeaderStyled>
   )
}