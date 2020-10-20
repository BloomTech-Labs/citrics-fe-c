import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';
// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  //put your styles in this object
  card: card(display, theme),
});

// below here we are just styling each jsx element (mobile, tablet, and desktop resolutions)
const card = (display, theme) => {
  // this is our base css object
  const css = {
    width: '100%',
    margin: '1% 0',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        width: 'auto',
        marginTop: '12px',
        marginLeft: '12px',
        marginRight: '12px',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        marginLeft: '12px',
        marginRight: '12px',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};
