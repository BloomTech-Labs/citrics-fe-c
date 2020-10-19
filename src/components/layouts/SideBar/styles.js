import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';

// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  sider: sider(display, theme),
  siderContainer: siderContainer(display, theme),
});

// below here we are just styling each jsx element (mobile, tablet, and desktop resolutions)
const sider = (display, theme) => {
  // this is our base css object

  const css = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: theme.bgDark,
    minHeight: '100vh',
    maxHeight: '100vh',
    top: 0,
    position: 'fixed',
    width: '544',
    zIndex: 99,
    overflowY: 'scroll',
    filter: theme.elevation2,
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

const siderContainer = (display, theme) => {
  // this is our base css object

  const css = {
    padding: '24px',
    paddingTop: '104px',
    display: 'inline-block',
    justifyContent: 'center',
    minHeight: '100vh',
    maxHeight: '100vh',
    width: '520px',
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
