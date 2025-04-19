<template>
  <div class="overflow-x-hidden">
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
