<script setup lang="ts">
import { useAnimations, useGLTF } from "@tresjs/cientos";

const { scene: model, animations } = await useGLTF("/nyanya/wave.glb");
model.position.set(0, 4, 0)

const { actions } = useAnimations(animations, model);

const currentAction = ref(actions.Wave);

currentAction.value.play()
</script>

<template>
  <primitive :object="model" />
</template>
