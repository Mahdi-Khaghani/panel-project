import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type ThemeType = "dark" | "light"
type InitialStateType = { showSidebar: boolean; theme: ThemeType };

const initialState: InitialStateType = {
  showSidebar: false,
  theme : localStorage.getItem("theme") as ThemeType || "light"
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
      const newthem = state.theme === "light" ? "dark" : "light"
      state.theme = newthem
      localStorage.setItem("theme",newthem)
    }
  },
});

const uiManagerReduser = uiManagerSlice.reducer;
export default uiManagerReduser;

export const { setShowSidebar , toggleTheme} = uiManagerSlice.actions;
