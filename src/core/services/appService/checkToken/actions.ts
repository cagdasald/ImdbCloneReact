import {Dispatch} from 'redux';
import {ErrorDto} from '../../../models/dtos/error.dto';
import {Errors} from "../../../utilities/errors";
import {LocalStorage} from '../../../utilities/localStorage';
import {setMeAction} from "../setMe/actions";
import {CHECK_TOKEN_FAIL, CHECK_TOKEN_RESET, CHECK_TOKEN_START, CHECK_TOKEN_SUCCESS} from './constants';
import {CheckTokenFailAction, CheckTokenResetAction, CheckTokenStartAction, CheckTokenSuccessAction} from './types';

const checkTokenStartAction = (): CheckTokenStartAction => {
  return {
    type: CHECK_TOKEN_START,
  };
};
const checkTokenSuccessAction = (payload: boolean): CheckTokenSuccessAction => {
  return {
    type: CHECK_TOKEN_SUCCESS,
    payload: payload,
  };
};
const checkTokenFailAction = (error: ErrorDto): CheckTokenFailAction => {
  return {
    type: CHECK_TOKEN_FAIL,
    error: error,
  };
};
const checkTokenResetAction = (): CheckTokenResetAction => {
  return {
    type: CHECK_TOKEN_RESET,
  };
};

export const checkToken = () => async (dispatch: Dispatch) => {
  try {
    dispatch(checkTokenStartAction());
    const token = LocalStorage.get(LocalStorage.token);
    if (token) {
      // todo setMe logic if token exist
      dispatch(setMeAction({username: 'Username'}));
    }
    dispatch(checkTokenSuccessAction(true));
  } catch (error) {
    dispatch(checkTokenFailAction(Errors.getErrorDtoFromApiError(error)));
  }
};

export const checkTokenReset = () => (dispatch: Dispatch) => {
  dispatch(checkTokenResetAction());
};
