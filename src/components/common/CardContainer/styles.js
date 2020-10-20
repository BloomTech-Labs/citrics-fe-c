import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';
// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)
export default (display, theme) => ({
  //put your styles in this object
  plotlyCardContainer: plotlyCardContainer(display, theme),
  cityCardContainer: cityCardContainer(display, theme),
  //searchResultContainer: searchResultContainer(display, theme),
});

// below here we are just styling each jsx element (mobile, tablet, and desktop resolutions)
const plotlyCardContainer = (display, theme) => {
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

const cityCardContainer = (display, theme) => {
  // this is our base css object
  const css = {
    width: '100%',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        // comented out for presentation
        //display: 'flex',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //flexWrap: 'nowrap',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        // comented out for presentation
        //display: 'flex',
        //flexDirection: 'row',
        //justifyContent: 'space-between',
        //flexWrap: 'nowrap',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};
