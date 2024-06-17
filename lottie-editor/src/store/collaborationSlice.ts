import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CollaborationState {
  animation: any;
}

const initialState: CollaborationState = {
  animation: null,
};

const collaborationSlice = createSlice({
  name: 'collaboration',
  initialState,
  reducers: {
    updateAnimation(state, action: PayloadAction<any>) {
      state.animation = action.payload;
    },
  },
});

export const { updateAnimation } = collaborationSlice.actions;
export default collaborationSlice.reducer;
