<template>
  <main class="min-h-[calc(100dvh-3.5rem)] global-p flex items-center w-full">
    <div class="w-full flex flex-col gap-4">
      <div class="justify-between flex">
        <div class="flex flex-col gap-1">
          <label>Loan Type</label>
          <SelectButton v-model="loanType" :options="loanTypeOptions" />
        </div>
        <div v-if="loanType === 'Car Loan'" class="flex flex-col gap-1">
          <label>Car Loan Type</label>
          <SelectButton v-model="carLoanType" :options="carLoanOptions" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label>Bank</label>
        <Select
          v-model="selectedCity"
          :options="cities"
          placeholder="Select a Bank"
          class="w-full md:w-56"
        >
          <template #value="slotProps">
            <div v-if="slotProps.value" class="flex items-center gap-2">
              <NuxtImg
                :src="slotProps.value.icon"
                :alt="slotProps.value.name"
                class="h-6 w-fit rounded-md"
              />
              <div>{{ slotProps.value.name }}</div>
            </div>
            <span v-else>
              {{ slotProps.placeholder }}
            </span>
          </template>
          <template #option="slotProps">
            <div class="flex items-center gap-2">
              <NuxtImg
                :src="slotProps.option.icon"
                :alt="slotProps.option.name"
                class="h-6 w-fit rounded-md"
              />
              <div>{{ slotProps.option.name }}</div>
            </div>
          </template>
        </Select>
        <p class="text-sm text-subtitle">
          Rate: <span class="text-primary font-semibold">10%</span> per annum,
          Max:
          <span class="text-primary font-semibold">$80,000</span>
        </p>
        <Button variant="outlined" class="h-fit w-fit !py-1"
          >View Detail</Button
        >
      </div>

      <div class="flex flex-col gap-1">
        <label>Loan Amount</label>
        <div>
          <InputNumber
            v-model="amount"
            class="w-full"
            mode="currency"
            currency="USD"
            locale="en-US"
            :max="100000"
          />
          <Slider v-model="amount" :max="100000" />
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <label>Loan Period</label>
        <div>
          <InputNumber v-model="period" class="w-full" suffix=" months" />
          <Slider v-model="period" :step="12" :max="96" />
        </div>
      </div>
      <div class="flex justify-between mt-10 h-full items-center">
        <div class="flex flex-col gap-4 items-start">
          <p class="text-xl">Estimated per month</p>
          <p class="text-4xl font-bold text-primary">$500.00</p>
        </div>
        <div class="flex flex-col gap-2 basis-2/5">
          <div class="flex justify-between">
            <p class="text-sm text-subtitle">Down Payment Amount</p>
            <p class="text-sm">$4000.00</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm text-subtitle">Actual Amount</p>
            <p class="text-sm">$16,000.00</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm text-subtitle">Total Interest Paid:</p>
            <p class="text-sm">~$3,930.20</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm text-subtitle">Total Paid (over X years):</p>
            <p class="text-sm">~$19,930.20</p>
          </div>
          <div class="flex justify-between">
            <p class="text-sm text-subtitle">Grand Total Paid</p>
            <p class="text-sm">$23,930.20</p>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { supportedBanks } from "~/constant/bank";

const loanTypeOptions = ["Car Loan", "House Loan"];
const carLoanOptions = ["Brand New", "Second Hand"];
const loanType = ref("Car Loan");
const carLoanType = ref("Brand New");

const selectedCity = ref();
const cities = ref(
  supportedBanks.map((bank) => ({
    name: bank.name,
    value: bank.name,
    icon: bank.image,
  }))
);
const period = ref(12);
const amount = ref(1000);
</script>

<style scoped></style>
