import {SET_APP_MOUNTED} from './constants';

export type SetAppMountedAction = {
  type: typeof SET_APP_MOUNTED;
  payload: boolean;
};

export type SetAppMountedActions = (
  SetAppMountedAction
  );

export type SetAppMountedState = {
  isMounted: boolean;
};
