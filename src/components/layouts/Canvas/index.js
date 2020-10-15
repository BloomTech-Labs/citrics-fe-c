import React from 'react';
import Canvas from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default ({ Main, Side }) => (
  <>
    <IsMobile>
      <Canvas Main={Main} Side={Side} styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <Canvas Main={Main} Side={Side} styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <Canvas Main={Main} Side={Side} styles={desktopStyles} />
    </IsDesktop>
  </>
);
