import React from 'react';
import SearchPanel from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <SearchPanel display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <SearchPanel display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <SearchPanel display={'desktop'} />
    </IsDesktop>
  </>
);
