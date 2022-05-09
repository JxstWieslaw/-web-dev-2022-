import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function RightHand2Model() {
  const result = useLoader(GLTFLoader, '/right_hand2.glb')
  // You don't need to check for the presence of the result, when we're here
  // the result is guaranteed to be present since useLoader suspends the component
  return <primitive scale={3}
         position={[0, -2, 0]} object={result.scene} name="right-hand2"/>
}

