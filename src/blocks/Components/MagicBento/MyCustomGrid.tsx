'use client';
import React from 'react';
import MagicBento from './MagicBento';
import { 
  Box1Component, 
  Box2Component, 
  Box3Component, 
  Box4Component, 
  Box5Component, 
  Box6Component 
} from './CustomBoxes';

const MyCustomGrid = () => {
  const customCards = [
    {
      id: 'box-1',
      color: '#060010',
      useCustomContent: true,
      className: 'analytics-box',
      customContent: <Box1Component />
    },
    {
      id: 'box-2',
      color: '#1a0b2e',
      useCustomContent: true,
      className: 'dashboard-box',
      customContent: <Box2Component />
    },
    {
      id: 'box-3',
      color: '#2d1b3d',
      useCustomContent: true,
      className: 'todo-box',
      customContent: <Box3Component />
    },
    {
      id: 'box-4',
      color: '#0f051a',
      useCustomContent: true,
      className: 'profile-box',
      customContent: <Box4Component />
    },
    {
      id: 'box-5',
      color: '#162447',
      useCustomContent: true,
      className: 'weather-box',
      customContent: <Box5Component />
    },
    {
      id: 'box-6',
      color: '#4a0e4e',
      useCustomContent: true,
      className: 'music-box',
      customContent: <Box6Component />
    }
  ];

  return (
    <div className="my-custom-grid">
      <MagicBento
        cards={customCards}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableTilt={true}
        clickEffect={true}
        enableMagnetism={true}
        glowColor="132, 0, 255"
      />
    </div>
  );
};

export default MyCustomGrid;
