import React from 'react';
import LoadingComponent from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <LoadingComponent props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <LoadingComponent styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <LoadingComponent styles={desktopStyles} />
    </IsDesktop>
  </>
);
