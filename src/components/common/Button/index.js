import React from 'react';
import Button from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <Button props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <Button styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <Button styles={desktopStyles} />
    </IsDesktop>
  </>
);
