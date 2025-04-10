<template>
  <div
    class="relative max-h-[calc(100dvh-3.5rem)] min-h-full w-full overflow-hidden basis-1/2"
  >
    <!-- Top gradient overlay -->
    <div
      class="absolute top-0 left-0 w-full h-[300px] bg-gradient-to-b from-background to-transparent z-10"
    />

    <!-- Carousel container -->
    <!-- Items container with translation -->
    <div
      ref="heroWrapper"
      :class="
        cn(
          'relative overflow-hidden grid grid-cols-1 gap-4',
          enableTransition && 'transition-all duration-300 ease-in-out'
        )
      "
      :style="{
        transform: `translateY(${translateY}px`,
      }"
    >
      <HeroItem
        v-for="(bank, index) in [...bankRef, ...bankRef]"
        :key="index"
        :bank="bank"
        :class="{ 'transition-all duration-300 ease-in-out': enableTransition }"
        :style="{
          transform:
            activeIndex === index % (bankRef.length * 2)
              ? `scale(1.0)`
              : 'scale(0.95)',
        }"
      />
    </div>

    <!-- Bottom gradient overlay -->
    <div
      class="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-background to-transparent z-10"
    />
  </div>
</template>

<script setup lang="ts">
import type { Bank } from "~/types/bank.type";

const banks: Bank[] = [
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "KB Prac Bank",
    image: "/image/bank/ppc.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "Philip Bank",
    image: "/image/bank/ppc.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "Aeon Bank",
    image: "/image/bank/aeon.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "Aceleda Bank",
    image: "/image/bank/ac.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "PPC Bank",
    image: "/image/bank/ppc.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "Shinhan Bank",
    image: "/image/bank/ppc.png",
  },
  {
    carLoan: 10,
    homeLoan: 6.99,
    name: "Canadia Bank",
    image: "/image/bank/ppc.png",
  },
];
const bankRef = ref<Bank[]>(banks);
const heroWrapper = ref<HTMLElement | null>(null);
const enableTransition = ref(true);

console.log("bankRef.length:", bankRef.value.length);

const middle = Math.floor(banks.length / 2);
const activeIndex = ref(middle);
let intervalId: number;

const translateY = computed(() => {
  const gap = 16;
  const itemHeight = 96;
  const wrapperheight = heroWrapper.value?.offsetHeight || 0;
  console.log("wrapperheight:", wrapperheight);

  return (
    -(activeIndex.value * (itemHeight + gap)) +
    ((wrapperheight - 768) / 2 - itemHeight / 2)
  );
});

const nextItem = () => {
  enableTransition.value = true;
  activeIndex.value = (activeIndex.value + 1) % (banks.length * 2);

  if (activeIndex.value === middle + banks.length) {
    enableTransition.value = true;

    // Delay to allow the transition to finish before resetting instantly
    setTimeout(() => {
      enableTransition.value = false;
      activeIndex.value = middle;
    }, 300);
  }
};

const startAutoScroll = () => {
  intervalId = window.setInterval(nextItem, 1500);
};

onMounted(() => {
  startAutoScroll();
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
});
</script>
