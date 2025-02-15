import * as types from "./types";

export const toggleSorted = (state: types.AppState) => {
  return {
    ...state,
    isSorted: !state.isSorted,
  };
};
export const setRegion: types.BaseContract<string> = (state, action) => {
  return {
    ...state,
    region: action.payload,
  };
};
export const removeRegion = (state: types.AppState) => {
  return {
    ...state,
    region: "",
  };
};
