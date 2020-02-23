import {cat} from '../../store/reducers/ICatsReducer';

export interface ICatDetails {
  name?: string;
  breed?: string;
  description?: string;
  edit: boolean;
  navigation: any;
  route: any;
  addCat: (data: cat) => void;
  editCat: (data: cat) => void;
}
