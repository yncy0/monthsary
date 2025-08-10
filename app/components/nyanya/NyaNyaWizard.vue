<script setup>
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

let camera, scene, renderer;

let ambientLight, directionalLight;

const container = useTemplateRef("container") 

onMounted(async () => {
  await nextTick();
  init();
});

useResizeObserver(container, () => {
  if (container.value) onWindowResize();
});

function init() {
  if (!container.value) return;

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    container.value.clientWidth / container.value.clientHeight,
    0.1,
    100,
  );

  camera.position.set(0, 3, 7);

  ambientLight = new THREE.AmbientLight(0xffffff, 1);
  directionalLight = new THREE.DirectionalLight(0xffffff, 2);

  directionalLight.position.set(0, 5, 5);

  scene.add(camera, ambientLight, directionalLight);

  renderer = new THREE.WebGLRenderer({ alpha: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.value.clientWidth, container.value.clientHeight);

  container.value.appendChild(renderer.domElement);

  loadModel();
}

function loadModel() {
  const gltfLoader = new GLTFLoader();
  const url = "/nyanya/orange-wizard.glb";

  gltfLoader.load(url, function (gltf) {
    const model = gltf.scene;
    scene.add(model);

    model.rotation.set(degreesToRadians(10), degreesToRadians(-17), degreesToRadians(0))

    renderer.setAnimationLoop(animate);
  });
}

function animate() {
  renderer.render(scene, camera);
}

function onWindowResize() {
  if (!container.value) return;

  camera.aspect = container.value.clientWidth / container.value.clientHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(container.value.clientWidth, container.value.clientHeight);
}
</script>

<template>
  <div ref="container" class="w-full lg:w-1/2 max-w-screen h-[480px] lg:h-dvh relative border-2 border-transparent" />
</template>
