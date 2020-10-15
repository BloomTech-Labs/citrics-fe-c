import React from 'react';
import PlotlyCard from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default props => (
  <>
    <IsMobile>
      <PlotlyCard props={props} styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <PlotlyCard props={props} styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <PlotlyCard props={props} styles={desktopStyles} />
    </IsDesktop>
  </>
);
