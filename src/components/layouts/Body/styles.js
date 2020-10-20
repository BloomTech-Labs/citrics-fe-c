import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';

// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  split: split(display, theme),
  rightContent: rightContent(display, theme),
  rightContentContainer: rightContentContainer(display, theme),
  noSider: noSider(display, theme),
  noSiderContainer: noSiderContainer(display, theme),
});

const split = (display, theme) => {
  // this is our base css object
  const css = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const rightContent = (display, theme) => {
  // this is our base css object

  const css = {
    display: 'flex',
    flexDirection: 'row-reverse',
    width: '100vw',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const rightContentContainer = (display, theme) => {
  // this is our base css object

  const css = {
    height: 'calc(100vh)',
    width: 'calc(100vw - 576px)',
    marginLeft: 'calc(100vw - 100% + 558px)', // had to do this funky stuff cuz the scroll bar
    paddingTop: '80px',
    paddingRight: '24px',
    paddingLeft: '24px',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const noSider = (display, theme) => {
  // this is our base css object

  const css = {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 48 0 48',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        //padding: '12 48 12 12',
        padding: '0 0 0 0',
        //marginLeft: 'calc((100vw - 100%))',
        //overflowY: 'scroll',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        padding: '12 48 12 12',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const noSiderContainer = (display, theme) => {
  // this is our base css object

  const css = {
    width: 'calc( 100vw - calc( 100vw - 100% ) )',
    paddingTop: '2.5%',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        padding: '12 48 12 12',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};
