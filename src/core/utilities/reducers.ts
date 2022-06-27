import {CombinedState, combineReducers, Reducer} from 'redux';
import checkTokenReducer from '../services/appService/checkToken/reducer';
import {CheckTokenState} from '../services/appService/checkToken/types';
import setApiErrorReducer from '../services/appService/setApiError/reducer';
import {SetApiErrorState} from '../services/appService/setApiError/types';
import setAppMountedReducer from '../services/appService/setAppMounted/reducer';
import {SetAppMountedState} from '../services/appService/setAppMounted/types';
import setMeReducer from '../services/appService/setMe/reducer';
import {SetMeState} from '../services/appService/setMe/types';
import setPathnameReducer from '../services/appService/setPathname/reducer';
import {SetPathnameState} from '../services/appService/setPathname/types';
import setRemoteConfigReducer from '../services/firebaseService/setRemoteConfig/reducer';
import {SetRemoteConfigState} from '../services/firebaseService/setRemoteConfig/types';

export interface IStore {
  // APP
  checkToken: CheckTokenState;
  setApiError: SetApiErrorState;
  setAppMounted: SetAppMountedState;
  setMe: SetMeState;
  setPathname: SetPathnameState;
  setRemoteConfig: SetRemoteConfigState;
}

export const rootReducer: Reducer<CombinedState<IStore>> = combineReducers({
  // APP
  checkToken: checkTokenReducer,
  setApiError: setApiErrorReducer,
  setAppMounted: setAppMountedReducer,
  setMe: setMeReducer,
  setPathname: setPathnameReducer,
  setRemoteConfig: setRemoteConfigReducer,
});
