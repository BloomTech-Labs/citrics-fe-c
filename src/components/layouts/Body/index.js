import React from 'react';
import Body from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default ({ Main, Side }) => (
  <>
    <IsMobile>
      <Body Main={Main} Side={Side} styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <Body Main={Main} Side={Side} styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <Body Main={Main} Side={Side} styles={desktopStyles} />
    </IsDesktop>
  </>
);
