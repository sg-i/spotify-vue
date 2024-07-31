<script setup>
import HomeCard from '@/components/HomeCard.vue'
const randomImageLink = `https://picsum.photos/300/300?random=`
</script>

<template>
  <div class="p-5 sm:p-8">
    <button type="button" class="text-white text-2xl font-semibold hover:underline cursor-pointer">
      Podcasts of the Week
    </button>

    <div class="py-1.5"></div>

    <div class="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6">
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Serene Sunset"
        subTitle="Nature's Beauty"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Tech Innovations"
        subTitle="Shaping Tomorrow"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Urban Explorations"
        subTitle="City Vibes"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Whispers of Wisdom"
        subTitle="Timeless Tales"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
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
        :image="`${randomImageLink}+${Math.random()}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
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
        :image="`${randomImageLink}+${Math.random()}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
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
        :image="`${randomImageLink}+${Math.random()}`"
        title="Digital Dreams"
        subTitle="Virtual Realities"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Whimsical Wonderland"
        subTitle="Fantasy Adventure"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Harmony in Chaos"
        subTitle="Balancing Act"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Ethereal Echoes"
        subTitle="Memories Unfolding"
      />
      <HomeCard
        :image="`${randomImageLink}+${Math.random()}`"
        title="Journey Beyond Stars"
        subTitle="Cosmic Odyssey"
      />
    </div>
  </div>
</template>
