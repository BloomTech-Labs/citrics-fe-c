import React from 'react';
import NavBar from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default () => (
  <>
    <IsMobile>
      <NavBar styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <NavBar styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <NavBar styles={desktopStyles} />
    </IsDesktop>
  </>
);
