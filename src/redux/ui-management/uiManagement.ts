import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light"
type InitialStateType = { showSidebar: boolean; theme: ThemeType };

const initialState: InitialStateType = {
  showSidebar: false,
  theme : "light"
};

const uiManagerSlice = createSlice({
  name: "ui-manager",
  initialState,
  reducers: {
    setShowSidebar: (
      state: InitialStateType,
      action: PayloadAction<boolean>,
    ) => {
      state.showSidebar = action.payload;
    },
    toggleTheme : (state : InitialStateType) => {
      state.theme = state.theme === "light" ? "dark" : "light"
    }
  },
});

const uiManagerReduser = uiManagerSlice.reducer;
export default uiManagerReduser;

export const { setShowSidebar , toggleTheme} = uiManagerSlice.actions;
