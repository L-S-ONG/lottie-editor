import { configureStore } from '@reduxjs/toolkit';
import lottieReducer from './lottieSlice';
import collaborationReducer from './collaborationSlice';

export const store = configureStore({
  reducer: {
    lottie: lottieReducer,
    collaboration: collaborationReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
