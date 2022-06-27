import {SET_REMOTE_CONFIG_FINISHED, SET_REMOTE_CONFIG_START} from './constants';
import {SetRemoteConfigActions, SetRemoteConfigState} from './types';

const initialState: SetRemoteConfigState = {
  loading: false,
  data: false,
};

const reducer = (
  state = initialState,
  action: SetRemoteConfigActions,
): SetRemoteConfigState => {
  switch (action.type) {
    case SET_REMOTE_CONFIG_START:
      return {
        ...initialState,
        loading: true,
      };
    case SET_REMOTE_CONFIG_FINISHED:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
