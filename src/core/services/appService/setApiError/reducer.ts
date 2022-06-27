import {SET_API_ERROR} from './constants';
import {SetApiErrorActions, SetApiErrorState} from './types';

const initialState: SetApiErrorState = {
  error: undefined,
};

const reducer = (
  state = initialState,
  action: SetApiErrorActions,
): SetApiErrorState => {
  switch (action.type) {
    case SET_API_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
