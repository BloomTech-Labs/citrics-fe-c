import React from 'react';
import PlotlyCard from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default props => (
  <>
    <IsMobile>
      <PlotlyCard props={props} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <PlotlyCard props={props} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <PlotlyCard props={props} display={'desktop'} />
    </IsDesktop>
  </>
);
