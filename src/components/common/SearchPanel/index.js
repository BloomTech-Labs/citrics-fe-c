import React from 'react';
import SearchPanel from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <SearchPanel props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <SearchPanel styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <SearchPanel styles={desktopStyles} />
    </IsDesktop>
  </>
);
