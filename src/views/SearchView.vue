<script setup>
import CategorySelect from '@/components/CategorySelect.vue'
const randomImageLink = `https://picsum.photos/300/300?random=`
</script>

<template>
  <div class="p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Browse all
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <CategorySelect category="Podcasts" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="Audiobooks" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="Made For You" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="New Releases" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="Chill Vibes" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="Explore Indie" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect
        category="Throwback Classics"
        :image="`${randomImageLink}+${Math.random()}`"
      />
      <CategorySelect category="Focus & Study" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect category="Party Hits" :image="`${randomImageLink}+${Math.random()}`" />
      <CategorySelect
        category="Wellness & Fitness"
        :image="`${randomImageLink}+${Math.random()}`"
      />
    </div>
  </div>
</template>
