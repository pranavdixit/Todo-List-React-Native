import * as React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TextInput, Button} from 'react-native-paper';
import {ICatDetails} from './ICardDetails';
import {catDetailStyles} from './catDetails.styles';
import {addCat, editCat} from '../../store/actions/catsAction';
import {connect} from 'react-redux';
import {cat} from '../../store/reducers/ICatsReducer';

const CatDetails = (props: ICatDetails) => {
  const {route, navigation, editCat, addCat} = props;
  const {name, breed, description, edit, id} = route.params;
  const [localName, setLocalName] = React.useState('');
  const [localBreed, setLocalBreed] = React.useState('');
  const [localDescription, setLocalDescription] = React.useState('');

  React.useEffect(() => {
    name && setLocalName(name);
    breed && setLocalBreed(breed);
    description && setLocalDescription(description);
  }, []);

  const submit = () => {
    if (!validate()) {
      return;
    }
    const newCat: cat = {
      id: id,
      name: localName,
      breed: localBreed,
      description: localDescription,
    };
    if (edit) {
      editCat(newCat);
    } else {
      addCat(newCat);
    }
    navigation.pop();
  };

  const validate = (): boolean => {
    if (
      localName.length > 0 &&
      localBreed.length > 0 &&
      localDescription.length > 0
    ) {
      return true;
    }
    return false;
  };

  return (
    <SafeAreaView style={catDetailStyles.container}>
      <TextInput
        style={catDetailStyles.typography}
        label="Name"
        value={localName}
        mode="outlined"
        onChangeText={setLocalName}
      />
      <TextInput
        style={catDetailStyles.typography}
        label="Breed"
        value={localBreed}
        mode="outlined"
        onChangeText={setLocalBreed}
      />
      <TextInput
        style={catDetailStyles.typography}
        label="Description"
        value={localDescription}
        onChangeText={setLocalDescription}
        mode="outlined"
      />
      <Button
        contentStyle={catDetailStyles.submit}
        mode="contained"
        onPress={submit}
        disabled={!validate()}>
        Submit
      </Button>
    </SafeAreaView>
  );
};

const mapStateToProps = () => ({});
const mapDispatchToProps = (dispatch: any) => ({
  addCat: (data: cat) => dispatch(addCat(data)),
  editCat: (data: cat) => dispatch(editCat(data)),
});

// eslint-disable-next-line prettier/prettier
export default connect(mapStateToProps, mapDispatchToProps)(CatDetails);
