import {SET_PATHNAME} from './constants';

export type SetPathnameAction = {
  type: typeof SET_PATHNAME;
  payload: string;
};

export type SetPathnameActions = (
  SetPathnameAction
  );

export type SetPathnameState = {
  pathname: string;
};
