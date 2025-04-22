<template>
  <div class="overflow-x-hidden relative">
    <div
      class="left-0 absolute top-0 w-10 h-full bg-background mask-r-from-0.5 z-20"
    />
    <div
      class="right-0 absolute top-0 w-10 h-full bg-background mask-l-from-0.5 z-20"
    />
    <div class="marquee">
      <NuxtImg
        v-for="item of items"
        :key="item"
        :src="item"
        class="h-20 w-fit rounded-md"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  items: string[];
}>();
</script>

<style scoped></style>
