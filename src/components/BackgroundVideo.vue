<script setup lang="ts">

import AssetsUtils from "@/utils/assetsUtils";
import {ref, watchEffect} from "vue";

const videoHorizontal = AssetsUtils.getAssetsFile('A款横版4K.mp4', 'video')
const videoVertical= AssetsUtils.getAssetsFile('A款竖版4K.mp4', 'video')

const isPC = ref(window.innerWidth >= 768)

window.addEventListener('resize', () => {
  isPC.value = window.innerWidth >= 768;
});

</script>

<template>
  <div class="video">
    <video
        :src="videoHorizontal"
        autoplay
        loop
        muted
        v-show="isPC"
    />
    <video
        :src="videoVertical"
        autoplay
        loop
        muted
        v-show="!isPC"
    />
  </div>
</template>

<style scoped lang="scss">
  .video{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -100;

    & video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      z-index: -99;
    }
  }
</style>