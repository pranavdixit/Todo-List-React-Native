import {cat} from '../reducers/ICatsReducer';

export const ADD_CAT: string = 'HOME/ADD_CAT';
export const REMOVE_CAT: string = 'HOME/REMOVE_CAT';
export const EDIT_CAT: string = 'HOME/EDIT_CAT';

export const addCat = (payload: cat) => ({type: ADD_CAT, payload: payload});
export const removeCat = (payload: string) => ({
  type: REMOVE_CAT,
  payload: payload,
});
export const editCat = (payload: cat) => ({
  type: EDIT_CAT,
  payload: payload,
});
