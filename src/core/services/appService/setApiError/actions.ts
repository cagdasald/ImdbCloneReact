import {Dispatch} from 'redux';
import {ErrorDto} from '../../../models/dtos/error.dto';
import {SET_API_ERROR} from './constants';
import {SetApiErrorAction} from './types';

const setApiErrorAction = (payload?: ErrorDto): SetApiErrorAction => {
  return {
    type: SET_API_ERROR,
    payload: payload,
  };
};

export const setApiError = (error?: ErrorDto) => async (dispatch: Dispatch) => {
  dispatch(setApiErrorAction(error));
};
