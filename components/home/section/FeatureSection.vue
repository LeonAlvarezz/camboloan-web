<template>
  <section class="min-h-dvh flex flex-col gap-10 justify-center w-full py-20">
    <!-- <h1 class="text-2xl font-bold capitalize text-center">
      Get all the best car loan and house loan with our best feature
    </h1>
    <div class="grid grid-cols-4 grid-rows-2 w-full h-full gap-4">
      <div
        class="border border-zinc-400 w-full col-span-2 row-span-2 min-h-[500px] rounded-md p-4"
      >
        <h2 class="text-lg font-semibold">Loan Calculator</h2>
        <p class="text-subtitle text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aspernatur et nesciunt!
        </p>
      </div>
      <div
        class="border border-zinc-400 w-full col-span-2 h-full rounded-md p-4"
      >
        <h2 class="text-lg font-semibold">Loan Comparator</h2>
        <p class="text-subtitle text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aspernatur et nesciunt!
        </p>
      </div>
      <div
        class="border border-zinc-400 w w-full col-span-2 h-full rounded-md p-4"
      >
        <h2 class="text-lg font-semibold">Rate Table</h2>
        <p class="text-subtitle text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
          aspernatur et nesciunt!
        </p>
      </div>
    </div> -->

    <h1 class="text-2xl font-bold capitalize text-center">
      Get all the best car loan and house loan with our best feature
    </h1>
    <div class="w-full h-full gap-4 flex flex-col overflow-x-auto no-scrollbar">
      <div
        class="border border-zinc-400 h-[400px] w-full rounded-md p-4 flex gap-4 items-center overflow-hidden"
      >
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold">Loan Calculator</h2>
          <p class="text-subtitle text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            aspernatur et nesciunt!
          </p>
          <NuxtLink
            to="/calculator"
            class="px-4 py-2 bg-primary w-fit rounded-sm text-white mt-4"
            >Try out Now</NuxtLink
          >
        </div>
        <div
          class="size-96 border shrink-0 relative left-10 rounded-sm border-gray-400 p-6 flex items-center"
        >
          <div class="flex gap-4 flex-col relative">
            <div>
              <h3 class="text-md font-semibold">Loan Type</h3>
              <p class="font-mono">Car Loan</p>
            </div>
            <div>
              <h3 class="text-md font-semibold">Amount</h3>
              <p class="font-mono">$25,000</p>
            </div>
            <div>
              <h3 class="text-md font-semibold">Bank</h3>
              <p class="font-mono">Aceleda</p>
            </div>
            <div>
              <h3 class="text-md font-semibold">Period</h3>
              <p class="font-mono">72 months</p>
            </div>
            <div>
              <h3 class="text-md font-semibold">Result</h3>
              <p class="font-mono text-2xl">$500/month</p>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-zinc-400 h-[400px] w-full rounded-md p-4 flex gap-4 items-center overflow-hidden"
      >
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold">Loan Comparator</h2>
          <p class="text-subtitle text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            aspernatur et nesciunt!
          </p>
          <NuxtLink
            to="/comparator"
            class="px-4 py-2 bg-primary w-fit rounded-sm text-white mt-4"
            >Try out Now</NuxtLink
          >
        </div>
        <div class="flex flex-col gap-2 relative left-10">
          <div
            class="size-96 border shrink-0 rounded-sm border-gray-400 bg-zinc-200 absolute -top-16 left-12 p-6 flex items-center z-20"
          >
            <div class="flex gap-4 flex-col relative">
              <div>
                <h3 class="text-md font-semibold">Loan Type</h3>
                <p class="font-mono">Car Loan</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Amount</h3>
                <p class="font-mono">$25,000</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Bank</h3>
                <p class="font-mono">Aceleda</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Period</h3>
                <p class="font-mono">72 months</p>
              </div>
              <div class="border border-red-700 w-fit p-2 rounded-md">
                <h3 class="text-md font-semibold text-red-700">Result</h3>
                <p class="font-mono text-2xl text-red-700">$500/month</p>
              </div>
              <!-- <div
                class="border w-52 h-10 border-red-700 absolute -bottom-1 -left-2 rounded-md"
              /> -->
            </div>
          </div>
          <div
            class="size-96 border shrink-0 rounded-sm border-gray-400 bg-zinc-200 p-6 relative flex items-center z-10 top-4 right-4"
          >
            <div class="flex gap-4 flex-col">
              <div>
                <h3 class="text-md font-semibold">Loan Type</h3>
                <p class="font-mono">Car Loan</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Amount</h3>
                <p class="font-mono">$25,000</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Bank</h3>
                <p class="font-mono">Aeon</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Period</h3>
                <p class="font-mono">72 months</p>
              </div>
              <div>
                <h3 class="text-md font-semibold">Result</h3>
                <p class="font-mono text-2xl">$534/month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="border border-zinc-400 h-[400px] w-full rounded-md p-4 flex gap-4 items-center overflow-hidden"
      >
        <div class="flex flex-col">
          <h2 class="text-lg font-semibold">Loan Rate</h2>
          <p class="text-subtitle text-sm">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima
            aspernatur et nesciunt!
          </p>
          <NuxtLink
            to="/calculator"
            class="px-4 py-2 bg-primary w-fit rounded-sm text-white mt-4"
            >View All</NuxtLink
          >
        </div>
        <DataTable
          :value="mock"
          class="w-full relative left-14 border border-zinc-400 rounded-md overflow-hidden"
          :pt="{
            Column: {
              headerCell: {
                class: ['!bg-primary !text-foreground'],
              },
              bodyCell: {
                class: ['!bg-zinc-200 !border-zinc-400/50'],
              },
            },
          }"
        >
          <Column field="bank" header="Bank">
            <template #body="slotProps">
              <div class="flex gap-4 items-center">
                <NuxtImg
                  v-if="slotProps.data.image"
                  :src="slotProps.data.image"
                  class="w-fit h-8"
                />
                <p>{{ slotProps.data.bank }}</p>
              </div>
            </template>
          </Column>
          <Column field="car_rate" header="Car Rate">
            <template #body="slotProps">
              {{ formatRate(slotProps.data.car_rate) }}
            </template></Column
          >
          <Column field="house_rate" header="House Rate">
            <template #body="slotProps">
              {{ formatRate(slotProps.data.house_rate) }}
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const mock = [
  {
    bank: "Aeon",
    image: "/image/bank/aeon.png",
    car_rate: 0.1,
    house_rate: 0.082,
  },

  {
    bank: "Aceleda",
    image: "/image/bank/ac.png",
    car_rate: 0.1,
    house_rate: 0.05,
  },
  {
    bank: "PPC",
    car_rate: 0.1,
    image: "/image/bank/ppc.png",
    house_rate: 0.03,
  },
  {
    bank: "Philp",
    car_rate: 0.1,
    image: "/image/bank/philip.png",
    house_rate: 0.02,
  },
  {
    bank: "Canadia",
    car_rate: 0.1,
    image: "/image/bank/canadia.png",
    house_rate: 0.02,
  },
];
const formatRate = (value: number) => {
  return value.toLocaleString("en", {
    style: "percent",
  });
};
</script>

<style scoped></style>
