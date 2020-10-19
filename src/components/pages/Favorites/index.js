import React from 'react';
import FavoritesPage from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <FavoritesPage styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <FavoritesPage styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <FavoritesPage styles={desktopStyles} />
    </IsDesktop>
  </>
);
