// src/App.tsx
import React from 'react';
import LottieEditor from './components/LottieEditor';
import RealTimeCollaboration from './components/RealTimeCollaboration';
import ChatBox from './components/ChatBox';
import LayerManager from './components/LayerManager';
import PropertyEditor from './components/PropertyEditor';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">Lottie Animation Editor</h1>
      <div className="grid grid-cols-3 gap-4 w-full max-w-6xl">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-lg space-y-4">
          <RealTimeCollaboration />
          <LottieEditor />
        </div>
        <div className="col-span-1 space-y-4">
          <LayerManager />
          <PropertyEditor />
          <ChatBox />
        </div>
      </div>
    </div>
  );
};

export default App;
