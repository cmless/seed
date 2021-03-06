export const transitionDuration = 300;

export const fonts = {
  text: { type: 'Google', name: 'Roboto', weights: [400, 700] },
};

export const css = {
  transitionDuration: `${transitionDuration}ms`,
  transitionEasing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  transitionElastic: 'cubic-bezier(0.33, 3, 0.66, 0)',

  fontText: `${fonts.text.name}, sans-serif`,

  neutralLightest: '#ffffff',
  neutralLighter: '#f2f1f0',
  neutralLight: '#f0efed',
  neutralMain: '#dedbd9',
  neutralDark: '#cfc7c2',
  neutralDarker: '#9c9089',
  neutralDarkest: '#2b2623',

  primary: '#100738',
  primaryContrast: '#ffffff',

  success: '#2ecc71',
  warning: '#f1c40f',
  danger: '#e74c3c',
  info: '#3498db',
};
