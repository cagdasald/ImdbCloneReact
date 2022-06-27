import {ErrorDto} from '../../../models/dtos/error.dto';
import {CHECK_TOKEN_FAIL, CHECK_TOKEN_RESET, CHECK_TOKEN_START, CHECK_TOKEN_SUCCESS,} from './constants';

export type CheckTokenStartAction = {
  type: typeof CHECK_TOKEN_START;
};
export type CheckTokenSuccessAction = {
  type: typeof CHECK_TOKEN_SUCCESS;
  payload: boolean;
};
export type CheckTokenFailAction = {
  type: typeof CHECK_TOKEN_FAIL;
  error: ErrorDto;
};
export type CheckTokenResetAction = {
  type: typeof CHECK_TOKEN_RESET;
};

export type CheckTokenActions = (
  CheckTokenStartAction |
  CheckTokenSuccessAction |
  CheckTokenFailAction |
  CheckTokenResetAction
  );

export type CheckTokenState = {
  loading: boolean;
  data?: boolean;
  error?: ErrorDto;
};
