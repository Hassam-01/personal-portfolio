import "./App.css";
import Navbar from "./components/navbar";
import LandingPage from "./pages/landingPage";
import bg from "./assets/background.svg";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import car from "./assets/cartoon_car.glb";
import Projects from "./pages/projects";
function App() {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75, // view angle
    window.innerWidth / window.innerHeight, // aspect ratio (portion of screen)
    0.1, // near clipping plane (nearest distance from camera)
    1000
  ); // far clipping plane (farthest distance from camera)
  camera.position.z = 13;
  const renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("container3D")?.appendChild(renderer.domElement);
  const loader = new GLTFLoader();
  let carObj: THREE.Group | undefined;
  loader.load(
    car,
    function (gltf) {
      carObj = gltf.scene;
      scene.add(carObj);
      carObj.position.y = -6;
      carObj.position.x = -12;
      // carObj.position.y = 1;
      carObj.rotation.y = 3;
      // carObj.rotation.z = -0.75;
      // carObj.rotation.x = 1.0;

      carObj.scale.set(1.5, 1.5, 1.5);
    },
    undefined,
    function (error) {
      console.error(error);
    }
  );

  //! lighting
  const light = new THREE.AmbientLight(0xffffff, 1.3);
  scene.add(light);
  const topLight = new THREE.DirectionalLight(0xffffff, 1);
  topLight.position.set(500, 500, 500);
  scene.add(topLight);

  // ! REDNDER
  const reRender = () => {
    requestAnimationFrame(reRender);
    renderer.render(scene, camera);
  };
  reRender();

  // ! path
  // const pathPoints = [
  //   new THREE.Vector3(0,-50, 0),
  //   new THREE.Vector3(2, 0, 1),
  //   new THREE.Vector3(4, 0, 0),
  //   new THREE.Vector3(6, 0, -1),
  //   new THREE.Vector3(8, 0, 0),
  //   new THREE.Vector3(10, 0, 2),
  //   new THREE.Vector3(12, 0, 0),
  //   new THREE.Vector3(14, 0, -2),
  //   new THREE.Vector3(16, 0, 0),
  // ];
  // const path = new THREE.CatmullRomCurve3(pathPoints);
  



  // let t = 0;

  // function animateCar() {
  //   t += 0.001;
  //   if (t > 1) t = 0;

  //   if (carObj) {
  //     const position = path.getPointAt(t);
  //     const tangent = path.getTangentAt(t).normalize();


  //     carObj.position.copy(position);

  //     const axis = new THREE.Vector3(0, 1, 0);
  //     const up = new THREE.Vector3(0, 0, 1);
  //     const quaternion = new THREE.Quaternion();
  //     quaternion.setFromUnitVectors(new THREE.Vector3(1, 0, 0), tangent);
  //     carObj.quaternion.copy(quaternion);
  //     carObj.rotation.z = Math.PI/15;
  //   }

  //   renderer.render(scene, camera);
  //   requestAnimationFrame(animateCar);
  // }
  // animateCar();

  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return (
    <div className="relative">
      {/* Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900 opacity-90 -z-10"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Ensure it spans the entire height initially
        }}
      ></div>

      {/* Sections */}
      <Navbar />

      <LandingPage />
      <section className="h-screen flex items-center justify-center text-white">
        <Projects/>
      </section>
      <section className="h-screen flex items-center justify-center text-white">
        <h1>More Content Here</h1>
      </section>
    </div>
  );
}

export default App;
