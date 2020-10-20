import React from 'react';
import CardContainer from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ Card }) => (
  <>
    <IsMobile>
      <CardContainer Card={Card} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <CardContainer Card={Card} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <CardContainer Card={Card} display={'desktop'} />
    </IsDesktop>
  </>
);
