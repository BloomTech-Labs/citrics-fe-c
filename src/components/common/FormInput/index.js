import React from 'react';
import FormInput from './Component';
import { mobileStyles, tabletStyles, desktopStyles } from './styles';
import { IsMobile, IsTablet, IsDesktop } from '../../layouts/breakPoints';

export default () => (
  <>
    <IsMobile>
      <FormInput props styles={mobileStyles} />
    </IsMobile>

    <IsTablet>
      <FormInput styles={tabletStyles} />
    </IsTablet>

    <IsDesktop>
      <FormInput styles={desktopStyles} />
    </IsDesktop>
  </>
);
