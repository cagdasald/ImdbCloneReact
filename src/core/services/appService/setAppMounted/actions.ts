import {Dispatch} from 'redux';
import {SET_APP_MOUNTED} from './constants';
import {SetAppMountedAction} from './types';

const setAppMountedAction = (payload: boolean): SetAppMountedAction => {
  return {
    type: SET_APP_MOUNTED,
    payload: payload,
  };
};

export const setAppMounted = (isMounted: boolean) => async (dispatch: Dispatch) => {
  dispatch(setAppMountedAction(isMounted));
};
