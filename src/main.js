import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

const canvas = document.querySelector("#c");
const WIDTH = 800;
const HEIGHT = 800;

// Scene setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, WIDTH / HEIGHT, 0.1, 5);
camera.position.z = 2;
const renderer = new THREE.WebGLRenderer({ antialias: true, canvas });
renderer.setSize(WIDTH, HEIGHT);

const controls = new OrbitControls(camera, renderer.domElement);

// Create a sphere
const loader = new THREE.TextureLoader();
const geometry = new THREE.SphereGeometry(1, 32, 32);
const material = new THREE.MeshStandardMaterial({
  map: loader.load("./src/8k_earth_daymap.jpg"),
});
const globe = new THREE.Mesh(geometry, material);
scene.add(globe);

const light = new THREE.AmbientLight(0x404040, 10);
scene.add(light);

// Animation
function animate() {
  requestAnimationFrame(animate);
  globe.rotation.y += 0.003;
  renderer.render(scene, camera);
}
animate();
