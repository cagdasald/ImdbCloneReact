import {Dispatch} from 'redux';
import {SET_PATHNAME} from './constants';
import {SetPathnameAction} from './types';

const setPathnameAction = (payload: string): SetPathnameAction => {
  return {
    type: SET_PATHNAME,
    payload: payload,
  };
};

export const setPathname = (pathname: string) => async (dispatch: Dispatch) => {
  dispatch(setPathnameAction(pathname));
};
