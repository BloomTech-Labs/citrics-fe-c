import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';
// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  //put your styles in this object
  container: container(display, theme),
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
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};
