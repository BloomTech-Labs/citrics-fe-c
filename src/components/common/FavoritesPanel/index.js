import React from 'react';
import FavoritesPanel from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <FavoritesPanel display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <FavoritesPanel display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <FavoritesPanel display={'desktop'} />
    </IsDesktop>
  </>
);
