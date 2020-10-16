import React from 'react';
import Body from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default ({ Main, Side }) => (
  <>
    <IsMobile>
      <Body Main={Main} Side={Side} display={'mobile'} />
    </IsMobile>

    <IsTablet>
      <Body Main={Main} Side={Side} display={'tablet'} />
    </IsTablet>

    <IsDesktop>
      <Body Main={Main} Side={Side} display={'desktop'} />
    </IsDesktop>
  </>
);
