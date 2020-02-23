import {EDIT_CAT} from './../actions/catsAction';
import {ICatsReducer, cat} from './ICatsReducer';
import {ADD_CAT, REMOVE_CAT} from '../actions/catsAction';

const initialState: ICatsReducer = {
  cats: [],
};

export default function catsReducer(
  state = initialState,
  action: {type: string; payload: any},
) {
  const newState: ICatsReducer = {...initialState};
  const {payload} = action;
  switch (action.type) {
    case ADD_CAT:
      newState.cats.push(payload as cat);
      return newState;
    case REMOVE_CAT:
      const arr: cat[] = newState.cats.filter(value => {
        if (value.id !== (payload as string)) {
          return value;
        }
      });
      newState.cats = arr;
      return newState;
    case EDIT_CAT:
      const arrCats: cat[] = newState.cats.filter(value => {
        if (value.id === (payload as string)) {
          payload.id = value.id;
          return payload;
        }
      });
      newState.cats = arrCats;
      return newState;
    default:
      return state;
  }
}
