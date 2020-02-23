import * as React from 'react';
import {ICatListItems} from './ICatListItems';
import {catListItemStyle} from './catListItem.style';
import {View} from 'react-native';
import {Title, Subheading, Text, Button} from 'react-native-paper';
import {colors} from '../../assets/colors';

export const CatListItem = (props: ICatListItems) => {
  const {name, breed, description, onPressEdit, onPressRemove} = props;

  return (
    <View style={catListItemStyle.container}>
      <Title style={catListItemStyle.typography}>Name: {name}</Title>
      <Subheading style={catListItemStyle.typography}>
        Breed: {breed}
      </Subheading>
      <Text style={catListItemStyle.typography}>
        Description: {description}
      </Text>
      <View style={catListItemStyle.horizontalContainer}>
        {onPressEdit && (
          <Button icon="create" mode="outlined" onPress={() => onPressEdit()}>
            Edit
          </Button>
        )}
        {onPressRemove && (
          <Button
            icon="delete"
            mode="outlined"
            color={colors.error}
            onPress={() => onPressRemove()}>
            Remove
          </Button>
        )}
      </View>
    </View>
  );
};
