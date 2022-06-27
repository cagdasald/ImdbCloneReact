import {SET_ME} from './constants';
import {MeDto} from '../../../models/dtos/me.dto';

export type SetMeAction = {
  type: typeof SET_ME;
  payload?: MeDto;
};

export type SetMeActions = (
  SetMeAction
  )

export type SetMeState = {
  me?: MeDto;
}
