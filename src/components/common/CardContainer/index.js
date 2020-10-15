import React from 'react';
import CardContainer from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ Card }) => (
  <>
    <IsMobile>
      <CardContainer Card={Card} styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <CardContainer Card={Card} styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <CardContainer Card={Card} styles={desktopStyles} />
    </IsDesktop>
  </>
);
