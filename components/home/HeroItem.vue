<template>
  <div
    :class="
      cn(
        'h-24 border border-gray-400 rounded-lg flex items-center gap-4 px-2'
        // bank.isPriority && 'scale-115'
      )
    "
  >
    <Avatar
      :image="bank.image"
      class="flex-shrink-0 rounded-md overflow-hidden"
      size="xlarge"
    />
    <div class="w-full">
      <h1 class="text-lg">{{ bank.name }}</h1>
      <div class="flex gap-10 w-full">
        <p class="text-sm text-subtitle">Car Loan: {{ bank.carLoan }}%</p>
        <p class="text-sm text-subtitle">House Loan: {{ bank.homeLoan }}%</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Bank } from "~/types/bank.type";

defineProps<{
  bank: Bank;
}>();
</script>

<style scoped></style>
