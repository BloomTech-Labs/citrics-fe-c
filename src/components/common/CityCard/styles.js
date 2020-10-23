import { AlignCenterOutlined } from '@ant-design/icons';
import { isMobile, isTablet, isDesktop } from '../../../utils/helpers';
// this is a styles function
// requires 'display' arg (string)
// optional  'theme' arg (if you need to access redux state)

export default (display, theme, city) => ({
  //put your styles in this object
  outerCollapse: outerCollapse(display, theme, city),
  outerPanel: outerPanel(display, theme, city),
  innerPanel: innerPanel(display, theme, city),
  cityCardImg: cityCardImg(display, theme, city),
  unorderedList: unorderedList(display, theme, city),
});

const outerCollapse = (display, theme, city) => {
  // this is our base css object
  const css = {
    width: '100%',
    marginTop: '8px',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        overflowX: 'hidden',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        overflowX: 'hidden',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const outerPanel = (display, theme, city) => {
  // this is our base css object
  const css = {
    border: `solid ${city.color} 2px`,
    borderRadius: 30,
    marginTop: '.25rem',
    overflow: 'hidden',
  };
  // spread the css const to pass in what you want to change
  return isMobile(display)
    ? //mobile css
      {
        ...css,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    : isTablet(display)
    ? //tablet css (spread this bad boy and pass in what you want to change)
      {
        ...css,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
      }
    : //desktop (spread this bad boy and pass in what you want to change)
      { ...css };
};

const cityCardImg = (display, theme, city) => {
  // this is our base css object
  const css = {
    background: `url(${city.wikiimgurl})`,
    borderRadius: `0px 0px 30px 30px`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: 'auto',
    height: 192,
    overflowY: 'scroll',
    direction: 'rtl',
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

const innerPanel = (display, theme, city) => {
  // this is our base css object
  const css = {
    background: theme.bgDark + '98',
    borderRadius: '30px, 0px, 30px, 30px',
    border: 'unset',
    width: '75%',
    marginTop: '.25rem',
    //height: '300px'
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

const unorderedList = (display, theme, city) => {
  // this is our base css object
  const css = {
    textAlign: 'right',
    listStylePosition: 'inside',
    listStyleType: 'none',
    margin: '0, 8px',
    color: theme.white,
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
