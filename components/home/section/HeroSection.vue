<template>
  <section class="flex gap-4 w-full items-center flex-col md:flex-row">
    <div class="flex flex-col gap-8 basis-1/2">
      <div class="flex flex-col gap-4">
        <h1 class="text-4xl font-bold leading-11">
          Check<br />
          Calculate<br />
          Compare
        </h1>
        <p class="text-subtitle text-md text-balance">
          Compare rates. Crunch numbers. Make the smart move with Camboloan.
        </p>
      </div>
      <div class="flex gap-2">
        <Button>Start Calculate Now</Button>
        <Button variant="outlined">Check Price</Button>
      </div>
    </div>
    <Hero />
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
