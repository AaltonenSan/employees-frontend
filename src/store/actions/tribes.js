import { instance } from "../../index";
import {
  loadTribes,
  loadTribesFailure,
  loadTribesSuccess,
} from "../slices/tribesSlice";

export function fetchTribes() {
  return async (dispatch, getState) => {
    // use redux store as cache and don't make api call if employees already exist
    const { tribes } = getState();
    if (tribes.list.length > 0) return;

    dispatch(loadTribes());

    try {
      const response = await instance.get("/tribes");
      dispatch(loadTribesSuccess(response.data));
    } catch (error) {
      dispatch(loadTribesFailure());
    }
  };
}
