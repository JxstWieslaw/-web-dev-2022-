/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/shoe.glb')
  return (
    <group ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.L_shoes.geometry} material={materials.aiStandardSurface8} />
      <mesh geometry={nodes.R_shoes.geometry} material={materials.aiStandardSurface8} />
    </group>
  )
}

useGLTF.preload('/shoe.glb')