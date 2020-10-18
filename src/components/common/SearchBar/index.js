import React from 'react';
import SearchBar from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <SearchBar styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <SearchBar styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <SearchBar styles={desktopStyles} />
    </IsDesktop>
  </>
);
