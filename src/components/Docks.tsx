"use client";
import React from "react";
import Dock from "../blocks/Components/Dock/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

const items = [
  {
    icon: <VscHome size={18} color="white" />,
    label: "Home",
    onClick: () => alert("Home!"),
  },
  {
    icon: <VscArchive size={18} color="white" />,
    label: "Archive",
    onClick: () => alert("Archive!"),
  },
  {
    icon: <VscAccount size={18} color="white" />,
    label: "Profile",
    onClick: () => alert("Profile!"),
  },
  {
    icon: <VscSettingsGear size={18} color="white" />,
    label: "Settings",
    onClick: () => alert("Settings!"),
  },
];

const Docks = () => {
  return (
    <div className="bg-black">
      <Dock
        items={items}
        panelHeight={68}
        baseItemSize={50}
        magnification={70}
      />
    </div>
  );
};

export default Docks;
