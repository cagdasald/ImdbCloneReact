import {SET_PATHNAME} from './constants';
import {SetPathnameActions, SetPathnameState} from './types';

const initialState: SetPathnameState = {
  pathname: window.location.pathname,
};

const reducer = (
  state = initialState,
  action: SetPathnameActions,
): SetPathnameState => {
  switch (action.type) {
    case SET_PATHNAME:
      return {
        pathname: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
