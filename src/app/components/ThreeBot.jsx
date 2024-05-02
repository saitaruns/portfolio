"use client";

import React, { useEffect, useRef } from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";

useGLTF.preload("/robot_playground.glb");

const ThreeBot = () => {
  const group = useRef(null);
  const ref = useRef(null);

  // const { viewport } = useThree();
  const { scene, animations } = useGLTF("/robot_playground.glb");

  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
      action.play();
    });
  }, [actions]);

  // useFrame(({ pointer }) => {
  //   const x = pointer.x;
  //   const y = pointer.y;
  //   ref.current.position.set(x, y, 0);
  //   ref.current.rotation.set(-y, x, 0);
  // });

  return (
    <group ref={group}>
      <primitive object={scene} ref={ref} />
    </group>
  );
};

export default ThreeBot;
