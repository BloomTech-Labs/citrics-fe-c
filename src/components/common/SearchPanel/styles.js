import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';
// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  //put your styles in this object
  container: container(display, theme),
  style2: style2(display, theme),
});

// below here we are just styling each jsx element (mobile, tablet, and desktop resolutions)
const container = (display, theme) => {
  // this is our base css object
  const css = {
    width: '100%',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        marginTop: -12,
        marginLeft: 0,
        zIndex: '50',
        width: '100vw',
        padding: '12px',
        borderRadius: '0px 0px 30px 30px',
        backgroundImage: theme.panelGradient,
        position: '-webkit-sticky',
        position: 'sticky',
        top: '0px',
        filter: theme.elevation3,
        marginBottom: '40px',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        marginTop: -12,
        marginLeft: 0,
        zIndex: '50',
        width: '100vw',
        padding: '12px',
        borderRadius: '0px 0px 30px 30px',
        backgroundImage: theme.panelGradient,
        position: '-webkit-sticky',
        position: 'sticky',
        top: '0px',
        filter: theme.elevation3,
        marginBottom: '40px',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const style2 = (display, theme) => {
  const css = {
    //color: theme.primary,
    //backgroundColor: theme.bg,
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
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};
