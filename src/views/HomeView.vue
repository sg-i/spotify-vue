<script setup>
import HomeCard from '@/components/HomeCard.vue'
const randomImageLink = `https://loremflickr.com/300/300/abstract?lock=`
const N = 1000
</script>

<template>
  <div class="p-5 sm:p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Podcasts of the Week
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Serene Sunset"
        subTitle="Nature's Beauty"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Tech Innovations"
        subTitle="Shaping Tomorrow"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Urban Explorations"
        subTitle="City Vibes"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Whispers of Wisdom"
        subTitle="Timeless Tales"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Mystic Moonlight"
        subTitle="Night's Embrace"
      />
    </div>
  </div>
  <div class="p-5 sm:p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Recommended Radio
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Journey Beyond Stars"
        subTitle="Cosmic Odyssey"
      />
    </div>
  </div>
  <div class="p-5 sm:p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      You might like this
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Journey Beyond Stars"
        subTitle="Cosmic Odyssey"
      />
    </div>
  </div>
  <div class="p-5 sm:p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Can be cool
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}${Math.random() * N}`"
        title="Journey Beyond Stars"
        subTitle="Cosmic Odyssey"
      />
    </div>
  </div>
</template>
