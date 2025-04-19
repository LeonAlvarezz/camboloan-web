<template>
  <section class="flex flex-col gap-10 py-20">
    <h1 class="text-2xl font-bold capitalize text-center">Available Bank</h1>
    <Marquee :items="bankImages" />
  </section>
</template>

<script setup lang="ts">
const bankImages = [
  "/image/bank/philip.png",
  "/image/bank/ppc.png",
  "/image/bank/ac.png",
  "/image/bank/aeon.png",
  "/image/bank/kb-prasac.png",
  "/image/bank/shinhan.png",
  "/image/bank/canadia.png",
  "/image/bank/philip.png",
  "/image/bank/ppc.png",
  "/image/bank/ac.png",
  "/image/bank/aeon.png",
  "/image/bank/kb-prasac.png",
  "/image/bank/shinhan.png",
  "/image/bank/canadia.png",
];
</script>

<style scoped></style>
