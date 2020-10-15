import React from 'react';
import List from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <List props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <List styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <List styles={desktopStyles} />
    </IsDesktop>
  </>
);
