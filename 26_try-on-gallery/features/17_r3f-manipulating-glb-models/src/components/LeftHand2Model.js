import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';
import lefthand2 from '../models/left_hand2.gltf';

export const LeftHand2Model = ({currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap}) => {
  const { scene, nodes, materials } = useGLTF(lefthand2);

  useLayoutEffect(() => {
    Object.assign(materials.Material, { 
      metalnessMap: metalnessMap,
      normalMap: normalMap,
      roughnessMap: roughnessMap,
      map: colorMap,
      color: currentColor})
  }, [scene, nodes, materials, currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap]);

  return <primitive object={scene} />
};