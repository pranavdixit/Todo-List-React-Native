export interface ICatListItems {
  name: string;
  breed: string;
  description: string;
  onPressEdit?: () => void;
  onPressRemove?: () => void;
}
