<script setup>
import { toRefs, ref } from 'vue'
import { RouterLink } from 'vue-router'

const props = defineProps({
  image: String,
  title: String,
  subTitle: String
})
const { image, title, subTitle } = toRefs(props)

const isImageLoaded = ref(false)
</script>

<template>
  <RouterLink v-show="isImageLoaded" to="library">
    <div class="bg-[#111111] p-4 rounded-md m-2 hover:bg-[#252525] cursor-pointer">
      <img class="rounded-md max-w-[223px]" :src="image" alt="" @load="isImageLoaded = true" />
      <div class="text-white pt-4 font-semibold text-[17px]">{{ title }}</div>
      <div class="text-gray-400 pt-1 pb-3 text-[14px]">{{ subTitle }}</div>
    </div>
  </RouterLink>
</template>
