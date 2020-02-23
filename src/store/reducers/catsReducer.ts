import {EDIT_CAT} from './../actions/catsAction';
import {ICatsReducer, cat} from './ICatsReducer';
import {ADD_CAT, REMOVE_CAT} from '../actions/catsAction';
import {_} from 'lodash';

const initialState: ICatsReducer = {
  cats: [],
};

export default function catsReducer(
  state = initialState,
  action: {type: string; payload: any},
) {
  const newState: ICatsReducer = _.cloneDeep(state);
  const {payload} = action;
  switch (action.type) {
    case ADD_CAT:
      payload.id = String(Math.round(new Date().getTime() / 1000));
      newState.cats.push(payload as cat);
      return newState;
    case REMOVE_CAT:
      const arr: cat[] = newState.cats.filter(value => {
        return value.id !== payload;
      });
      console.log(arr);
      newState.cats = arr;
      return newState;
    case EDIT_CAT:
      const arrCats: cat[] = newState.cats.map(value => {
        if (value.id === payload.id) {
          return payload;
        }
        return value;
      });
      newState.cats = arrCats;
      return newState;
    default:
      return state;
  }
}
