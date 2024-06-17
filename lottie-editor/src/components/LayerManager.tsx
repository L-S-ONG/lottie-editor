import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { removeLayer } from '../store/lottieSlice';

const LayerManager: React.FC = () => {
  const dispatch = useDispatch();
  const layers = useSelector((state: RootState) => state.lottie.layers);

  const handleRemoveLayer = (layerId: number) => {
    dispatch(removeLayer(layerId));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">Layer Manager</h2>
      <ul className="space-y-2">
        {layers.map((layer) => (
          <li key={layer.id} className="flex justify-between items-center p-2 border border-gray-300 rounded">
            {layer.name}
            <button onClick={() => handleRemoveLayer(layer.id)} className="text-red-500 hover:text-red-700">Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LayerManager;