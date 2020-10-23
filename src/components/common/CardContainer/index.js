import React from 'react';
import CardContainer from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';
import { useLocation } from 'react-router-dom';

export default ({ Card }) =>
  useLocation().pathname != '/' ? (
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
  ) : (
    <div />
  );
