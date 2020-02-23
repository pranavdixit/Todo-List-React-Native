import {colors} from './../../assets/colors';
import {StyleSheet, PixelRatio} from 'react-native';

export const catDetailStyles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    backgroundColor: colors.white,
  },
  typography: {
    height: PixelRatio.get() * 30,
    margin: PixelRatio.get() * 10,
  },
  submit: {
    width: '100%',
    height: PixelRatio.get() * 30,
  },
});
