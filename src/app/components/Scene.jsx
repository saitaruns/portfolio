"use client";

import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";
import ThreeBot from "./ThreeBot";
import { cn } from "../../../utils/cn";

const Scene = ({ className }) => {
  return (
    <Canvas className={cn(className)}>
      <directionalLight position={[-5, -5, 5]} intensity={1} />
      <Suspense fallback={null}>
        <ThreeBot />
      </Suspense>
    </Canvas>
  );
};

export default Scene;
