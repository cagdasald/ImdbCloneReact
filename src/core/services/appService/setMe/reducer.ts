import {SET_ME} from "./constants";
import {SetMeActions, SetMeState} from "./types";

const initialState: SetMeState = {
  me: undefined,
}

const reducer = (
  state = initialState,
  action: SetMeActions,
): SetMeState => {
  switch (action.type) {
    case SET_ME:
      return {
        me: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
