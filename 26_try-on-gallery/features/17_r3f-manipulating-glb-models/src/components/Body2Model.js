import React, { useLayoutEffect }from 'react';
import { useGLTF } from '@react-three/drei';
import body2 from '../models/body2.gltf';

export const Body2Model = ({currentColor, currentTexture, colorMap, normalMap, roughnessMap, metalnessMap}) => {
  const { scene, nodes, materials } = useGLTF(body2);

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