import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { updateAnimation } from '../store/collaborationSlice';

const RealTimeCollaboration: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:4001');

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      dispatch(updateAnimation(data));
    };

    return () => {
      ws.close();
    };
  }, [dispatch]);

  return <div className="text-green-600 font-semibold">Real-Time Collaboration Enabled</div>;
};

export default RealTimeCollaboration;
