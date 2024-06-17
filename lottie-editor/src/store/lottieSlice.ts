import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Layer {
  id: number;
  name: string;
}

interface LottieState {
  animationData: any;
  speed: number;
  color: string;
  scale: number;
  layers: Layer[];
}

const initialState: LottieState = {
  animationData: null,
  speed: 1,
  color: '#000000',
  scale: 1,
  layers: [],
};

const lottieSlice = createSlice({
  name: 'lottie',
  initialState,
  reducers: {
    setAnimationData(state, action: PayloadAction<any>) {
      const clonedData = JSON.parse(JSON.stringify(action.payload)); // Deep clone
      state.animationData = clonedData;
    },
    setSpeed(state, action: PayloadAction<number>) {
      state.speed = action.payload;
    },
    setColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    setScale(state, action: PayloadAction<number>) {
      state.scale = action.payload;
    },
    removeLayer(state, action: PayloadAction<number>) {
      state.layers = state.layers.filter(layer => layer.id !== action.payload);
    },
  },
});

export const { setAnimationData, setSpeed, setColor, setScale, removeLayer } = lottieSlice.actions;
export default lottieSlice.reducer;
