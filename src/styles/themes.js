const theme = {
  micro: '12px',
  tiny: '14px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '38px',

  // colors ///////////////////////////////
  white: '#FFFFFF',
  bgLight: '#132634',
  bg: '#19292D',
  bgDark: '#1B242C',
  grayLight: '#F2F2F2',
  gray: '#E0E0E0',
  grayDark: '#BDBDBD',
  magentaLight: '#FF00A8',
  magenta: '-webkit-linear-gradient(90deg, #EC0039 0%, #FF00A8 100%)',
  magentaDark: '#EC0039',
  primaryLight: '#BDFF00',
  primary: '-webkit-linear-gradient(90deg, #00FF66 0%, #BDFF00 100%)',
  primaryVert: '-webkit-linear-gradient(180deg, #BDFF00 0%, #00FF66 100%)',
  primaryDark: '#00FF66',
  primaryDarker: '#10521A',
  skyLight: '#00FFF0',
  sky: '-webkit-linear-gradient(90deg, #006DFF 0%, #00FFF0 100%)',
  skyDark: '#006DFF',
  tangerineLight: '#FFF500',
  tangerine: '-webkit-linear-gradient(90deg, #FF7A00 0%, #FFF500 100%)',
  tangerineDark: '#FF7A00',

  subtlePanelGradient:
    '-webkit-linear-gradient(360deg, #1B242C 0%, #142F33 100%)',
  panelGradient: '-webkit-linear-gradient(90deg, #133034 0%, #1B242C 100%)',

  // styles ///////////////////////////////

  // border radius
  borderRadiusTiny: '10px',
  borderRadiusSmall: '20px',
  borderRadiusMedium: '30px',
  borderRadiusLarge: '40px',
  // :filter     ( drop shadow )
  elevation3: 'drop-shadow(0px 4px 12px #00000020)',
  elevation2: 'drop-shadow(0px 4px 12px #00000015)',
  elevation1: 'drop-shadow(0px 2px 8px #00000010)',
};

const legacy = {
  micro: '12px',
  tiny: '14px',
  small: '16px',
  medium: '20px',
  large: '24px',
  xlarge: '38px',

  // colors ///////////////////////////////
  white: '#FFFFFF',
  bgLight: '#204225',
  bg: '#17271E',
  bgDark: '#15221C',
  grayLight: '#F2F2F2',
  gray: '#E0E0E0',
  grayDark: '#BDBDBD',
  lightning: '#FE006E',
  magenta: '#F759AB',
  primaryLight: '#9AE883',
  primary: '#4AC85D',
  primaryDark: '#248232',
  primaryDarker: '#10521A',
  sky: '#2F80ED',
  tangerine: '#FFBF00',

  // styles ///////////////////////////////

  // border radius
  borderRadiusTiny: '10px',
  borderRadiusSmall: '20px',
  borderRadiusMedium: '30px',
  borderRadiusLarge: '40px',
  // :filter     ( drop shadow )
  elevation2: 'drop-shadow(0px 4px 12px rgba(0; 0; 0; 0.15))',
  elevation1: 'drop-shadow(0px 2px 8px rgba(0; 0; 0; 0.15))',
};

const themes = {
  light: theme,
  dark: theme,
};

const legacyThemes = {
  light: legacy,
  dark: legacy,
};

export default themes;
