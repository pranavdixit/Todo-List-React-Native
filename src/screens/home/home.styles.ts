import {StyleSheet, PixelRatio} from 'react-native';

export const homeStyles = StyleSheet.create({
  homeList: {
    height: '100%',
  },
  container: {
    display: 'flex',
    flex: 1,
  },
  addButton: {
    height: PixelRatio.get() * 30,
    alignContent: 'center',
  },
});
