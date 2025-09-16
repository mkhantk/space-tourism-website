import { createSlice } from "@reduxjs/toolkit";

const varticalSlice = createSlice({
  name: "varticalNav",
  initialState: false,
  reducers: {
    updateVartical: (state) => !state,
    closeVartical: (state) => false,
  },
});

export const { updateVartical, closeVartical } = varticalSlice.actions;
export default varticalSlice.reducer;
