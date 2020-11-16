import React, { useState, useEffect } from 'react';
import NavBar from './Component';
import { IsMobile, IsTablet, IsDesktop } from '../breakPoints';

export default () => {
  return (
    <>
      <IsMobile>
        <NavBar display={'mobile'} />
      </IsMobile>

      <IsTablet>
        <NavBar display={'tablet'} />
      </IsTablet>

      <IsDesktop>
        <NavBar display={'desktop'} />
      </IsDesktop>
    </>
  );
};
