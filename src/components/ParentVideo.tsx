// page.tsx
"use client";

import { useState, useEffect } from "react";
import { VideoHero } from "@/components/VideoHero";
import { MobileVideoHero } from "./MobVideoHero";

export default function ParentVideo() {
  return (
    <div>
      <div className="w-full">
        <div className="hidden md:block">
          <VideoHero />
        </div>
        <div className="block md:hidden">
          <MobileVideoHero />
        </div>
      </div>
    </div>
  );
}
