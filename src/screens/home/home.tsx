import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {homeStyles} from './home.styles';
import {iHomeProps} from './iHome';
import CatListItem from '../../components/CatListItems';
import {connect} from 'react-redux';
import IStore from '../../store/IStore';
import {removeCat} from '../../store/actions/catsAction';

const home = (props: iHomeProps) => {
  const {cats} = props;
  return (
    <SafeAreaView style={homeStyles.container}>
      <FlatList
        style={homeStyles.homeList}
        data={cats}
        renderItem={({item}): any => (
          <CatListItem
            name="BOB"
            breed="cat"
            description="My fav cat"
            onPressEdit={() => {
              console.log('I am Pressed onPressEdit');
            }}
            onPressRemove={() => {
              console.log('I am Pressed onPressRemove');
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

const mapStateToProps = (state: IStore) => ({
  cats: state.cats,
});
const mapDispatchToProps = (dispatch: any) => ({
  removeCat: (id: string) => dispatch(removeCat(id)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(home);
