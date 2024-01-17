<script setup>
import { ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute(0)

const props = defineProps({
  iconString: String,
  iconSize: Number,
  pageUrl: String,
  name: String
})
const { iconString, iconSize, pageUrl, name } = toRefs(props)

let icon = ref(null)
let textIsHover = ref(false)

watchEffect(() => {
  if (route.path == pageUrl.value) {
    icon.value = iconString.value + '-active'
    textIsHover.value = true
  } else {
    icon.value = iconString.value + '-inactive'
    textIsHover.value = false
  }
})

const isHover = () => {
  if (icon.value === iconString.value + '-active') return

  if (icon.value === iconString.value + '-inactive') {
    icon.value = iconString.value + '-inactive-hover'
    textIsHover.value = true
  } else if (icon.value === iconString.value + '-inactive-hover') {
    icon.value = iconString.value + '-inactive'
    textIsHover.value = false
  }
}
</script>

<template>
  <li
    class="flex h-11 items-center justify-start cursor-pointer"
    @mouseenter="isHover()"
    @mouseleave="isHover()"
  >
    <div :class="`overflow-hidden `">
      <img :width="iconSize" :src="`/images/icons/${icon}.png`" />
    </div>
    <div
      :class="textIsHover ? 'text-white ' : 'text-gray-400'"
      class="font-semibold text-[14px] ml-4 mt-0.5"
    >
      <span :class="route.path == pageUrl ? 'text-white' : ''">
        {{ name }}
      </span>
    </div>
  </li>
</template>

<style lang="scss" scoped></style>
