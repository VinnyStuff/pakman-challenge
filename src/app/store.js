import { configureStore } from '@reduxjs/toolkit';
import themeReducer from '../features/theme/themeSlice'
import newClientFormsReducer from '../features/newClientForms/newClientFormsSlice'

export default configureStore({
  reducer: {
    theme: themeReducer,
    newClientForms: newClientFormsReducer,
  },
});
