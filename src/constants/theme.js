import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#B1060F',
  purple_primary: '#7E1C55',
  Dark_blue: '#28166F',
  white_stroke: '#000000',
  text: '#121212',
  unactive_text: '#969595',
  dark: '169AEE',
  white: '#ffffff',
  black: '#000000',
};
export const SIZES = {
  // global sizes
  base: 8,
  font: 14,
  radius: 12,
  padding: 24,

  // font sizes
  largeTitle: 40,
  h1: 32,
  h2: 24,
  h3: 20,
  body1: 18,
  body2: 16,
  body3: 14,
  body4: 12,
  button: 16,
  // app dimensions
  width,
  height,
};

export const FONTS = {
  largeTitle: {fontFamily: 'Roboto Black 900', fontSize: SIZES.largeTitle},
  h1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h1,
    lineHeight: 36,
    fontWeight: '700',
  },
  h2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h2,
    lineHeight: 28,
    fontWeight: '700',
  },
  h3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.h3,
    lineHeight: 23,
    fontWeight: '700',
  },
  body1: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body1,
    lineHeight: 22,
    fontWeight: '400',
  },
  body2: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body2,
    lineHeight: 20,
    fontWeight: '400',
  },
  body3: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body3,
    lineHeight: 17.6,
    fontWeight: '400',
  },
  body4: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.body4,
    lineHeight: 15,
    fontWeight: '400',
  },
  button: {
    fontFamily: 'Roboto-Regular',
    fontSize: SIZES.button,
    lineHeight: 16,
  },
};

const appTheme = {COLORS, SIZES, FONTS};

export default appTheme;
