import {Dispatch} from 'redux';
import {MeDto} from '../../../models/dtos/me.dto';
import {LocalStorage} from '../../../utilities/localStorage';
import {SET_ME} from './constants';
import {SetMeAction} from './types';

export const setMeAction = (payload?: MeDto): SetMeAction => {
  return {
    type: SET_ME,
    payload: payload,
  };
};

export const setMe = (me?: MeDto) => async (
  dispatch: Dispatch,
) => {
  if (!me) {
    LocalStorage.remove(LocalStorage.token);
  }
  dispatch(setMeAction(me));
};
