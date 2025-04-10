<template>
  <nav
    class="w-full h-14 bg-primary global-p flex justify-between items-center text-foreground"
  >
    <p class="font-extrabold text-xl">Camboloan</p>
    <!-- <NuxtImg src="/image/logo.png" class="w-40" /> -->
    <ul class="flex gap-10">
      <li
        v-for="item in navItems"
        :key="item.title"
        :class="
          cn(
            'text-foreground/70 font-semibold hover:text-foreground transition-colors',
            isActiveRoute(item.url) && 'scale-110 text-foreground'
          )
        "
      >
        <a :href="item.url">
          {{ item.title }}
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
const navItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Calculator",
    url: "/calculator",
  },
  {
    title: "Table",
    url: "/table",
  },
  {
    title: "About",
    url: "/about",
  },
];
</script>

<style scoped></style>
