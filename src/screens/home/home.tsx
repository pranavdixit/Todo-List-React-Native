import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {homeStyles} from './home.styles';
import {iHomeProps} from './iHome';
import CatListItem from '../../components/CatListItems';

const home = (props: iHomeProps) => {
  return (
    <SafeAreaView style={homeStyles.container}>
      <FlatList
        style={homeStyles.homeList}
        data={[1, 2, 3, 4, 5]}
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

export default home;
