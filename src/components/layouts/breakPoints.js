import { layoutGenerator } from 'react-break';

// we are setting up what breakpoint resolutions we want in here
// more documentation here https://www.npmjs.com/package/react-break

const layout = layoutGenerator({
  mobile: 0,
  tablet: 481,
  //notebook: ???,
  desktop: 1025,
  //XL: ???
});

const IsMobile = layout.is('mobile');
const IsTablet = layout.is('tablet');
//const IsNotebook = layout.is("notebook");
const IsDesktop = layout.is('desktop');
//const IsXL = layout.is("XL");

export { IsMobile, IsTablet, IsDesktop };
