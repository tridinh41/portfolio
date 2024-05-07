import { OrbitControls, RenderTexture, Text, PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import styled from "styled-components"

const Container = styled.div`
    height: 100vh;
    width: 100%;
    scroll-snap-align: center;
`

const Torus = () => {
    return (
        <Container>
            <Canvas>
                <OrbitControls enableZoom={false}/>
                <ambientLight intensity={1}/>
                <directionalLight position={[3,2,1]}/>
                <mesh>
                    <boxGeometry args={[2, 2, 2]}/>
                    <meshStandardMaterial>
                        <RenderTexture attach="map">
                        <PerspectiveCamera makeDefault position={[0, 0, 5]} />
                        <color attach="background" args={["#dc9dcd"]} />
                        <Text ref={textRef} fontSize={3} color="#555">
                            hello
                        </Text>
                        </RenderTexture>
                    </meshStandardMaterial>
                </mesh>
            </Canvas>
        </Container>
    )
}

export default Torus