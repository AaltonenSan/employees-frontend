import {
  closeModalReducer,
  showModalReducer,
  showModalUpdateReducer,
} from "../slices/modalSlice";

export function showModal() {
  return (dispatch) => {
    dispatch(showModalReducer());
  };
}

export function showModalUpdate(employee) {
  return (dispatch) => {
    dispatch(showModalUpdateReducer(employee));
  };
}

export function closeModal() {
  return (dispatch) => {
    dispatch(closeModalReducer());
  };
}
