module.exports = {
  // breakpoints
  '@mobile': ~'only screen and (max-width: 480px)',
  '@tablet': ~'only screen and (min-width: 481px) and (max-width: 1024px)',
  '@desktop': ~'only screen and (min-width: 1025px)',

  '@f-micro': '12px',
  '@f-tiny': '14px',
  '@f-small': '16px',
  '@f-medium': '20px',
  '@f-large': '24px',
  '@f-xlarge': '38px',

  // colors ///////////////////////////////
  '@c-white': '#FFFFFF',
  '@c-bg-light': '#132634',
  '@c-bg': '#19292D',
  '@c-bg-dark': '#1B242C',
  '@c-gray-light': '#F2F2F2',
  '@c-gray': '#E0E0E0',
  '@c-gray-dark': '#BDBDBD',
  '@c-lightning': '#FE006E',
  '@c-magenta-light': '#FF00A8',
  '@c-magenta': '#F759AB',
  '@c-primary-light': '#BDFF00',
  '@c-primary': '-webkit-linear-gradient(90deg, #00FF66 0%, #BDFF00 100%)',
  '@c-primary-vert':
    '-webkit-linear-gradient(180deg, #BDFF00 0%, #00FF66 100%)',
  '@c-primary-dark': '#00FF66',
  '@c-primary-darker': '#10521A',
  '@c-sky-light': '#00FFF0',
  '@c-sky': '-webkit-linear-gradient(90deg, #006DFF 0%, #00FFF0 100%)',
  '@c-sky-dark': '#006DFF',
  '@c-tangerine-light': '#FFF500',
  '@c-tangerine': '-webkit-linear-gradient(90deg, #FF7A00 0%, #FFF500 100%)',
  '@c-tangerine-dark': '#FF7A00',

  '@c-subtle-panel-gradient':
    '-webkit-linear-gradient(90deg, #1B242C 0%, #142F33 100%)',
  '@c-panel-gradient':
    '-webkit-linear-gradient(0deg, #133034 0%, #1B242C 100%)',
  // styles ///////////////////////////////

  // border radius
  '@sty-border-radius-tiny': '10px',
  '@sty-border-radius-small': '20px',
  '@sty-border-radius-medium': '30px',
  '@sty-border-radius-large': '40px',

  // ':'filter     ( drop shadow )
  '@sty-elevation3': 'drop-shadow(0px 4px 12px #00000020)',
  '@sty-elevation2': 'drop-shadow(0px 4px 12px #00000015)',
  '@sty-elevation1': 'drop-shadow(0px 2px 8px #00000010)',
};
