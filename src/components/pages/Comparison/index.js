import React from 'react';
import ComparisonPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <ComparisonPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <ComparisonPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <ComparisonPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
