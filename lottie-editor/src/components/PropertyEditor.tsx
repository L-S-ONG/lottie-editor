import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setSpeed, setColor, setScale } from '../store/lottieSlice';

const PropertyEditor: React.FC = () => {
  const dispatch = useDispatch();
  const { speed, color, scale } = useSelector((state: RootState) => state.lottie);

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Property Editor</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Speed:</label>
          <input type="number" value={speed} onChange={(e) => dispatch(setSpeed(Number(e.target.value)))} className="p-2 border border-gray-300 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Color:</label>
          <input type="color" value={color} onChange={(e) => dispatch(setColor(e.target.value))} className="p-2 border border-gray-300 rounded w-full" />
        </div>
        <div>
          <label className="block text-sm font-medium">Scale:</label>
          <input type="number" value={scale} onChange={(e) => dispatch(setScale(Number(e.target.value)))} className="p-2 border border-gray-300 rounded w-full" />
        </div>
      </div>
    </div>
  );
};

export default PropertyEditor;
