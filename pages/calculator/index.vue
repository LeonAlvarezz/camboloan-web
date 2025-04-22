<template>
  <main class="min-h-[calc(100dvh-3.5rem)] global-p flex items-center w-full">
    <Card class="w-full py-10 px-4">
      <template #content>
        <div class="w-full flex flex-col gap-4">
          <div class="justify-between flex">
            <div class="flex flex-col gap-1">
              <label>Loan Type</label>
              <SelectButton
                v-model="loanType"
                :options="loanTypeOptions"
                disabled
              />
            </div>
            <div v-if="loanType === 'Car Loan'" class="flex flex-col gap-1">
              <label>Car Loan Type</label>
              <SelectButton
                v-model="carLoanType"
                :options="carLoanOptions"
                disabled
              />
            </div>
          </div>
          <div class="flex flex-col gap-1">
            <label>Bank</label>
            <Select
              v-model="selectedBanks"
              :options="banks"
              placeholder="Select a Bank"
              class="w-full md:w-56"
              option-label="name"
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
              Rate: <span class="text-primary font-semibold">10%</span> per
              annum, Max:
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
                :maxFractionDigits="10"
              />
              <Slider v-model="amount" :max="MAX_AMOUNT" />
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
              <p class="text-4xl font-bold text-primary">
                <span v-if="estimated >= 0">
                  {{ convertCurrency(estimated) }}
                </span>
                <span v-else> Invalid </span>
              </p>
            </div>
            <div class="flex flex-col gap-2 basis-2/5">
              <div class="flex justify-between">
                <p class="text-sm text-subtitle">Down Payment Amount</p>
                <p class="text-sm">{{ convertCurrency(downPayment) }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-sm text-subtitle">Actual Amount</p>
                <p class="text-sm">{{ convertCurrency(actualAmount) }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-sm text-subtitle">Total Interest Paid:</p>
                <p class="text-sm">~{{ convertCurrency(totalInterestPaid) }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-sm text-subtitle">Total Paid (over X years):</p>
                <p class="text-sm">~{{ convertCurrency(totalPaid) }}</p>
              </div>
              <div class="flex justify-between">
                <p class="text-sm text-subtitle">Grand Total Paid</p>
                <p class="text-sm">{{ convertCurrency(grandTotalPaid) }}</p>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { supportedBanks } from "~/constant/bank";

const loanTypeOptions = ["Car Loan", "House Loan"];
const carLoanOptions = ["Brand New", "Second Hand"];

const loanType = ref("Car Loan");
const carLoanType = ref("Brand New");
const MAX_AMOUNT = 100000;

const banks = supportedBanks.map((bank) => ({
  name: bank.name,
  icon: bank.image,
}));

const selectedBanks = ref();

const period = ref(12);
const amount = ref(1000);
const annualRate = ref(0.09);
const downPaymentRate = ref(0);

const monthlyRate = computed(() => annualRate.value / 12);
const num = computed(() => Math.pow(1 + monthlyRate.value, period.value));
const estimated = computed(() => {
  if (period.value <= 0) return 0;
  if (amount.value <= 0) return 0;
  if (isNaN(amount.value) || amount.value > 1000000) return 0;
  if (monthlyRate.value === 0) return actualAmount.value / period.value;

  const numerator = monthlyRate.value * num.value;
  const denominator = num.value - 1;

  // Prevent division by zero
  if (denominator === 0) return 0;

  return actualAmount.value * (numerator / denominator);
});
const downPayment = computed(() => {
  if (isNaN(downPaymentRate.value)) return 0;
  return Math.max(
    0,
    Math.min(downPaymentRate.value * amount.value, amount.value)
  );
});
const actualAmount = computed(() => {
  if (amount.value > MAX_AMOUNT) return 0;
  return Math.max(0, amount.value - downPayment.value);
});
const totalPaid = computed(() => {
  if (isNaN(estimated.value) || isNaN(period.value)) return 0;
  return estimated.value * period.value;
});
const totalInterestPaid = computed(() => {
  return Math.max(0, totalPaid.value - actualAmount.value);
});

const grandTotalPaid = computed(() => {
  return totalPaid.value + downPayment.value;
});

/**
 * Bank to have value like rate, max, period
 * loan amount and loan period will change by user
 * epm, dpa, aa, tip, tp, gtp all will reflect through the user input (la, lp)
 */
</script>

<style scoped></style>

<!-- M = p * (r*(1+r)^n)/(1+r)^n-1 -->
