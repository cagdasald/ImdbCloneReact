import {Dispatch} from 'redux';
import {SET_REMOTE_CONFIG_FINISHED, SET_REMOTE_CONFIG_START} from './constants';
import {SetRemoteConfigFinishedAction, SetRemoteConfigStartAction} from './types';

const setRemoteConfigStartAction = (): SetRemoteConfigStartAction => {
  return {
    type: SET_REMOTE_CONFIG_START,
  };
};
const setRemoteConfigFinishedAction = (payload: boolean): SetRemoteConfigFinishedAction => {
  return {
    type: SET_REMOTE_CONFIG_FINISHED,
    payload: payload,
  };
};

export const setRemoteConfig = () => async (dispatch: Dispatch) => {
  try {
    dispatch(setRemoteConfigStartAction());
    // todo active or delete firebase
    // const firebaseService: FirebaseService = new FirebaseService();
    // await firebaseService.fetchAndActivateRemoteConfig();
    dispatch(setRemoteConfigFinishedAction(true));
  } catch (error) {
    dispatch(setRemoteConfigFinishedAction(false));
  }
};
