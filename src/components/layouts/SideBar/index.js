import React from 'react';
import SideBar from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default ({ Components }) => (
  <>
    <IsMobile>
      <SideBar Components={Components} styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <SideBar Components={Components} styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <SideBar Components={Components} styles={desktopStyles} />
    </IsDesktop>
  </>
);
