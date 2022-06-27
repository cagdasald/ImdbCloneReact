import {SET_REMOTE_CONFIG_FINISHED, SET_REMOTE_CONFIG_START} from './constants';

export type SetRemoteConfigStartAction = {
  type: typeof SET_REMOTE_CONFIG_START;
};
export type SetRemoteConfigFinishedAction = {
  type: typeof SET_REMOTE_CONFIG_FINISHED;
  payload: boolean;
};

export type SetRemoteConfigActions = (
  SetRemoteConfigStartAction |
  SetRemoteConfigFinishedAction
  );

export type SetRemoteConfigState = {
  loading: boolean;
  data: boolean;
};
