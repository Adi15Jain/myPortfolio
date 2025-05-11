import * as THREE from "three";

const HeroLights = () => (
    <>
        {/* Lamp's light */}
        <spotLight
            position={[2, 5, 6]}
            angle={0.15}
            penumbra={0.2}
            intensity={100}
            color="#f1f1f1" // soft white light
        />
        {/* Bluish overhead lamp */}
        <spotLight
            position={[4, 5, 4]}
            angle={0.3}
            penumbra={0.5}
            intensity={40}
            color="#a0d7e7" // soft blue
        />
        {/* Purplish side fill */}
        <spotLight
            position={[-3, 5, 5]}
            angle={0.4}
            penumbra={1}
            intensity={60}
            color="#b49ac0" // soft lavender purple
        />
        {/* Area light for soft moody fill */}
        <primitive
            object={new THREE.RectAreaLight("#c8a0d1", 8, 3, 2)} // light lavender
            position={[1, 3, 4]}
            rotation={[-Math.PI / 4, Math.PI / 4, 0]}
            intensity={15}
        />
        {/* Subtle point light for atmospheric tone */}
        <pointLight position={[0, 1, 0]} intensity={10} color="#c0a8d7" />{" "}
        {/* very soft purple */}
        <pointLight position={[1, 2, -2]} intensity={10} color="#a0b9f4" />{" "}
        {/* light blue */}
    </>
);

export default HeroLights;
