import {SET_APP_MOUNTED} from './constants';
import {SetAppMountedActions, SetAppMountedState} from './types';

const initialState: SetAppMountedState = {
  isMounted: false,
};

const reducer = (
  state = initialState,
  action: SetAppMountedActions,
): SetAppMountedState => {
  switch (action.type) {
    case SET_APP_MOUNTED:
      return {
        isMounted: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
