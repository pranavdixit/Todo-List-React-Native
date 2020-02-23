import {colors} from '../../assets/colors';
import {StyleSheet, PixelRatio} from 'react-native';

export const catListItemStyle = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    alignItems: 'flex-start',
    backgroundColor: colors.white,
    paddingTop: PixelRatio.get() * 10,
  },
  horizontalContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: colors.silver,
    width: '100%',
    padding: PixelRatio.get() * 5,
  },
  typography: {
    marginBottom: PixelRatio.get() * 10,
    paddingLeft: PixelRatio.get() * 5,
  },
});
