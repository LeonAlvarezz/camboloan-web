<template>
  <footer
    class="bg-primary w-full min-h-20 py-10 global-p flex items-center gap-42"
  >
    <p class="font-extrabold text-xl text-foreground">Camboloan</p>
    <div class="flex justify-between w-full">
      <div>
        <h2 class="text-primary-subtitle">Sitemap</h2>
        <ul class="mt-2 text-white flex flex-col gap-1">
          <li v-for="item of navItems" :key="item.title">
            <NuxtLink :to="item.url">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="flex flex-col justify-between">
        <div>
          <h2 class="text-primary-subtitle">Get in Touch</h2>
          <ul class="mt-2 text-white flex flex-col gap-1">
            <li>
              <NuxtLink>hongnarethputponleu015@gmail.com</NuxtLink>
            </li>
          </ul>
        </div>
        <div>
          <h2 class="text-primary-subtitle">Connect</h2>
          <ul class="mt-2 text-white flex gap-2">
            <li>
              <NuxtLink>
                <Icon
                  name="uil:linkedin"
                  size="20"
                  class="hover:scale-110 transition-all"
                />
              </NuxtLink>
            </li>
            <li>
              <NuxtLink>
                <Icon
                  name="uil:github"
                  size="20"
                  class="hover:scale-110 transition-all"
                />
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
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
