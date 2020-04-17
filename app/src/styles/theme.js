const sizes = {
  XXS: '0.25',
  XS: '0.5',
  S: '0.75',
  M: '1',
  L: '1.25',
  XL: '1.5',
  XXL: '2',
  XXXL: '3',
};

export const SCREEN = {
  MOBILE: '@media screen and (max-width: 767px)',
  LANDSCAPE: '@media screen and (min-width: 500px) and (max-height: 500px)',
  TABLET: '@media screen and (max-width: 999px) and (min-width:768px)',
  MOBILE_AND_TABLET: '@media screen and (max-width: 1179px)',
  DESKTOP: '@media screen and (min-width: 1000px)',
};

const properUnit = (values, unit) => {
  const properSizes = { ...values };
  for (let key in properSizes) {
    properSizes[key] = `${properSizes[key]}${unit}`;
  }
  return properSizes;
};

export default {
  color: {
    green: '#87A879',
    pink: '#CF8854',
    lightPink: '#F3E7C1',
    gray: '#4f4e4e',
    brown: '#725043',
    lightBrown: '#aca488',
    white: '#ffffff',
    red: '#e94242',
  },
  font: properUnit(sizes, 'em'),
  spacing: properUnit(sizes, 'rem'),
};
