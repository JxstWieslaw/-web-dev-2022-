import { useRef } from 'react';
import { Stage, useTexture } from '@react-three/drei'
import { RightHand2Model } from '../components/RightHand2Model';
import { LeftHand2Model } from '../components/LeftHand2Model';
import { Body2Model } from '../components/Body2Model';

export const Scene = ({currentColor, currentTexture}) => {
  const [colorMap, normalMap, roughnessMap, metalnessMap] = useTexture(currentTexture);

  return (
    <Stage adjustCamera intensity={1}>
      <mesh>
        <RightHand2Model
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap} 
          currentColor={currentColor}
          currentTexture={currentTexture} />
      </mesh>
      <mesh >
        <LeftHand2Model
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap} 
          currentColor={currentColor}
          currentTexture={currentTexture} />
      </mesh>
      <mesh >
        <Body2Model 
          map={colorMap}
          normalMap={normalMap}
          roughnessMap={roughnessMap}
          metalnessMap={metalnessMap} 
          currentColor={currentColor}
          currentTexture={currentTexture} />
      </mesh>
    </Stage>
  )
}