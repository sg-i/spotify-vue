<script setup>
import { ref, toRefs } from 'vue'
import { RouterLink } from 'vue-router'
import uniqolor from 'uniqolor'

let randColor = ref('')
randColor.value = uniqolor.random()
const props = defineProps({
  image: String,
  category: String
})
const { image, category } = toRefs(props)
</script>

<template>
  <RouterLink to="library">
    <div
      v-if="randColor.color"
      :style="`background-color: ${randColor.color};`"
      class="group contrast-[2] brightness-[0.87] rounded-xl aspect-square relative overflow-hidden"
    >
      <div class="text-white pt-3 pl-4 font-semibold text-[23px]">
        {{ category }}
      </div>
      <img
        class="absolute contrast-[0.55] -z-30 -right-3 group-hover:-right-0 bottom-0 max-w-[75%] rotate-[25deg] group-hover:max-w-full group-hover:rotate-[0deg] transition-max-w transition-rotate duration-200 ease-in-out"
        :src="image || ''"
      />

      <!-- <img
        class="absolute top-0 object-cover contrast-[0.55] -z-30 h-full w-full"
        :src="image || ''"
      /> -->
    </div>
  </RouterLink>
</template>
