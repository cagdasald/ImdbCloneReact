import {CHECK_TOKEN_FAIL, CHECK_TOKEN_RESET, CHECK_TOKEN_START, CHECK_TOKEN_SUCCESS,} from './constants';
import {CheckTokenActions, CheckTokenState} from './types';

const initialState: CheckTokenState = {
  loading: false,
  data: undefined,
  error: undefined,
};

const reducer = (
  state = initialState,
  action: CheckTokenActions,
): CheckTokenState => {
  switch (action.type) {
    case CHECK_TOKEN_START:
      return {
        ...initialState,
        loading: true,
      };
    case CHECK_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case CHECK_TOKEN_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case CHECK_TOKEN_RESET:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};

export default reducer;
