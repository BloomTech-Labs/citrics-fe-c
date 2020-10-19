import React from 'react';
import CityCard from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default ({ city }) => (
  <>
    <IsMobile>
      <CityCard city={city} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <CityCard city={city} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <CityCard city={city} display={'desktop'} />
    </IsDesktop>
  </>
);
