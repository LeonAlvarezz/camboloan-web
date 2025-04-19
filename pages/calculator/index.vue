<template>
  <main class="min-h-[calc(100dvh-3.5rem)] global-p flex items-center w-full">
    <div class="w-full flex flex-col gap-4">
      <div class="flex flex-col">
        <label>Loan Type</label>
        <SelectButton v-model="value" :options="options" />
      </div>
      <div class="flex flex-col">
        <label>Bank</label>
        <Select
          v-model="selectedCity"
          :options="cities"
          optionLabel="name"
          placeholder="Select a City"
          class="w-full md:w-56"
        />
      </div>

      <div class="flex flex-col">
        <label>Loan Amount</label>
        <InputNumber
          v-model="amount"
          class="w-full"
          mode="currency"
          currency="USD"
          locale="en-US"
        />
        <Slider v-model="amount" :max="100000" />
      </div>
      <div class="flex flex-col">
        <label>Loan Period</label>
        <InputNumber v-model="period" class="w-full" suffix=" months" />
        <Slider v-model="period" :step="12" :max="96" />
      </div>
      <div class="flex flex-col gap-4 mt-10">
        <p class="text-2xl">Estimated (per month):</p>
        <p class="text-4xl">$500.00</p>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
const options = ["Car Loan", "House Loan"];
const value = ref("Car Loan");

const selectedCity = ref();
const cities = ref([
  { name: "New York", code: "NY" },
  { name: "Rome", code: "RM" },
  { name: "London", code: "LDN" },
  { name: "Istanbul", code: "IST" },
  { name: "Paris", code: "PRS" },
]);
const period = ref(12);
const amount = ref(1000);
</script>

<style scoped></style>
