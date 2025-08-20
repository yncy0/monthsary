<script setup>
import * as THREE from "three";

let scene, camera, light, renderer

onMounted(async () => {
  init()
  animate()
  document.body.onScroll = moveCamera;
});

function init() {
  scene = new THREE.Scene()
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
  camera.position.set(0, 0, 12)

  light = new THREE.AmbientLight(0xffffff, 1)

  scene.add(camera, light)

  const canvas = document.querySelector("#bg")
  renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true })
  renderer.setPixelRatio(window.devicePixelRatio)
  renderer.setSize(window.innerWidth, window.innerHeight)

  generateStars(scene)
}

function animate() {
  requestAnimationFrame(animate)

  renderer.render(scene, camera)
}

function moveCamera() {
  const t = document.getBoundingClientRect().top

  camera.position.y = t * 0.017
}
</script>

<template>
  <canvas id="bg" />
</template>

<style scoped>
canvas {
  top: 0;
  left: 0;
  position: fixed;
  z-index: -9999;
}
</style>
