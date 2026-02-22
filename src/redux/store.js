import { configureStore } from "@reduxjs/toolkit"
import pasteReducer from "./pasteSlice"
import authReducer from "./authSlice";
import themeReducer from './themeSlice'

export const store = configureStore({
  reducer: {
    paste: pasteReducer,
    theme: themeReducer,
      auth: authReducer,
  }
})
