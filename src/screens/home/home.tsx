import * as React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import {homeStyles} from './home.styles';
import {iHomeProps} from './iHome';
import CatListItem from '../../components/CatListItems';
import {connect} from 'react-redux';
import IStore from '../../store/IStore';
import {removeCat} from '../../store/actions/catsAction';
import {Button} from 'react-native-paper';

const home = (props: iHomeProps) => {
  const {cats, navigation, removeCat} = props;
  return (
    <SafeAreaView style={homeStyles.container}>
      <Button
        contentStyle={homeStyles.addButton}
        icon="plus"
        mode="contained"
        onPress={() => {
          navigation.navigate('detail', {edit: false});
        }}>
        Add new Cat
      </Button>
      <FlatList
        style={homeStyles.homeList}
        data={cats}
        renderItem={({item}): any => (
          <CatListItem
            name={item.name}
            breed={item.breed}
            description={item.description}
            onPressEdit={() => {
              navigation.navigate('detail', {
                edit: true,
                name: item.name,
                breed: item.breed,
                description: item.description,
                id: item.id,
              });
            }}
            onPressRemove={() => {
              item.id && removeCat(item.id);
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
