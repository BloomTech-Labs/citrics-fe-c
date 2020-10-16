import React from 'react';
import SideBar from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default ({ Components }) => (
  <>
    <IsMobile>
      <SideBar Components={Components} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <SideBar Components={Components} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <SideBar Components={Components} display={'desktop'} />
    </IsDesktop>
  </>
);
