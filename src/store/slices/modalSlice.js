import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modal",
  initialState: {
    show: false,
    update: false,
    updateEmployeeId: null,
    employee: {
      name: "",
      position: "",
      tribe: "",
    },
  },
  reducers: {
    showModalReducer: (state) => {
      state.show = true;
      state.update = false;
      state.employee = {
        name: "",
        position: "",
        tribe: "",
      };
    },
    showModalUpdateReducer: (state, action) => {
      state.show = true;
      state.update = true;
      state.updateEmployeeId = action.payload.id;
      state.employee = {
        name: action.payload.name,
        position: action.payload.title,
        tribe: action.payload.tribe.id,
      };
    },
    closeModalReducer: (state) => {
      state.show = false;
    },
  },
});

export const { showModalReducer, showModalUpdateReducer, closeModalReducer } =
  modalSlice.actions;
export default modalSlice.reducer;
