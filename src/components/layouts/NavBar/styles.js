import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';

// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  header: header(display, theme),
  logo: logo(display, theme),
  menu: menu(display, theme),
  menuItem: menuItem(display, theme),
  menuIcon: menuIcon(display, theme),
  homeIcon: homeIcon(display),
});

// below here we are just styling each jsx element (mobile, tablet, and desktop resolutions)
const header = (display, theme) => {
  // this is our base css object
  const css = {
    display: 'flex',
    height: '80px',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: theme.bgDark,
    top: 0,
    position: 'fixed',
    width: '100vw',
    zIndex: 100,
    filter: theme.elevation3,
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        top: 'unset',
        bottom: 0,
        backgroundColor: 'unset',
        justifyContent: 'center',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        top: 'unset',
        bottom: 0,
        backgroundColor: 'unset',
        justifyContent: 'center',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const logo = (display, theme) => {
  const css = {
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    fontSize: '40px',
    lineHeight: '32px',
    fontFamily: 'Quicksand',
  };
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        display: 'none',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        display: 'none',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const menu = (display, theme) => {
  const css = {
    backgroundColor: 'unset',
    color: theme.primary,
  };
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        display: 'flex',
        justifyContent: 'space-between',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        display: 'flex',
        justifyContent: 'space-between',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const menuIcon = (display, theme) => {
  const css = {
    color: theme.primaryLight,
    backgroundColor: 'unset',
  };
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        color: theme.white,
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        color: theme.white,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const menuItem = (display, theme) => {
  const css = { color: theme.primary };
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.bgDark,
        height: 48,
        width: 48,
        margin: 16,
        borderRadius: theme.borderRadiusLarge,
        borderImageSource: 'linear-gradient(180deg, #8FFF00 0%, #50C461 100%)',
        border: `1px solid ${theme.primaryLight}`,
        //borderRadius: theme.borderRadius
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: theme.bgDark,
        height: 48,
        width: 48,
        margin: 16,
        borderRadius: theme.borderRadiusLarge,
        borderImageSource: 'linear-gradient(180deg, #8FFF00 0%, #50C461 100%)',
        border: `1px solid ${theme.primaryLight}`,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const homeIcon = (display, theme) =>
  isMobile(display) ? true : isTablet(display) ? true : false;
