import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
// import { Suspense } from "react";
import { WalkMan } from "./Man";

function Three() {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        // background: `linear-gradient(to bottom, rgba(26, 32, 44, 0.9), black, rgba(26, 32, 44, 0.9)), url(${bg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* <Suspense fallback={null}> */}
        <PerspectiveCamera makeDefault position={[0, 1, 5]} />
        <OrbitControls />
        <WalkMan />
        <directionalLight intensity={0.5} />
        <ambientLight intensity={0.5} />
      {/* </Suspense> */}
    </Canvas>
  );
}

export default Three;
