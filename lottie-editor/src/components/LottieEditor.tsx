import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import { setAnimationData, setSpeed, setColor, setScale } from '../store/lottieSlice';

const LottieEditor: React.FC = () => {
  const dispatch = useDispatch();
  const { animationData, speed, color, scale } = useSelector((state: RootState) => state.lottie);

  useEffect(() => {
    if (animationData) {
      console.log('Animation Data before load:', animationData);

      // Ensure the animationData is extensible
      const extensibleData = JSON.parse(JSON.stringify(animationData));
      if (!Object.isExtensible(extensibleData)) {
        console.error('Animation Data is not extensible');
        return;
      }

      const anim = lottie.loadAnimation({
        container: document.getElementById('lottie-container')!,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: extensibleData,
      });

      anim.setSpeed(speed);
      anim.setDirection(scale > 0 ? 1 : -1);
      // Apply color transformation logic if needed

      return () => {
        anim.destroy(); // Clean up animation instance
      };
    }
  }, [animationData, speed, color, scale]);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result;
        if (result) {
          try {
            const parsedData = JSON.parse(result as string);
            console.log('Parsed Animation Data:', parsedData);
            const clonedData = JSON.parse(JSON.stringify(parsedData)); // Deep clone
            dispatch(setAnimationData(clonedData));
          } catch (error) {
            console.error('Failed to parse or dispatch animation data', error);
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input type="file" accept=".json" onChange={handleFileUpload} className="mb-4 p-2 border border-gray-300 rounded w-full" />
      <div id="lottie-container" className="w-full h-64 bg-gray-200 mb-4 rounded"></div>
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

export default LottieEditor;
