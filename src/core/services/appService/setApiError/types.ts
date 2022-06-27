import {ErrorDto} from '../../../models/dtos/error.dto';
import {SET_API_ERROR} from './constants';

export type SetApiErrorAction = {
  type: typeof SET_API_ERROR;
  payload?: ErrorDto;
};

export type SetApiErrorActions = (
  SetApiErrorAction
  );

export type SetApiErrorState = {
  error?: ErrorDto;
};
