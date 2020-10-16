import React from 'react';
import NavBar from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default () => (
  <>
    <IsMobile>
      <NavBar display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <NavBar display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <NavBar display={'desktop'} />
    </IsDesktop>
  </>
);
