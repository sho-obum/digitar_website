"use client";
import React from "react";
import MagicBento from "../blocks/Components/MagicBento/MagicBento";
import { 
  Box1Component, 
  Box2Component, 
  Box3Component, 
  Box4Component, 
  Box5Component, 
  Box6Component 
} from "../blocks/Components/MagicBento/CustomBoxes";

const Bento = () => {
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
    <div className="bg-black text-white">
      <div className="container flex items-center justify-center">
        <MagicBento
          cards={customCards}
          textAutoHide={true}
          enableStars={true}
          enableSpotlight={true}
          enableBorderGlow={true}
          enableTilt={true}
          enableMagnetism={true}
          clickEffect={true}
          spotlightRadius={300}
          particleCount={12}
          glowColor="132, 0, 255"
        />
      </div>
    </div>
  );
};

export default Bento;
