<template>
  <section class="flex flex-col justify-center gap-10 items-center py-20">
    <h1 class="text-2xl font-bold capitalize text-center">
      Frequently Asked Questions
    </h1>
    <Accordion value="0" class="w-full">
      <AccordionPanel v-for="(faq, index) of faqs" :key="faq.q" :value="index">
        <AccordionHeader> {{ faq.q }}</AccordionHeader>
        <AccordionContent>
          <p class="m-0">
            {{ faq.a }}
          </p>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  </section>
</template>

<script setup lang="ts">
const faqs = [
  {
    q: "Why is this important?",
    a: "It is important",
  },
  {
    q: "How is the rates collected?”",
    a: "It is important",
  },
  {
    q: "Is this really free?",
    a: "It is important",
  },
  {
    q: "Is this used to promote any specific bank?",
    a: "It is important",
  },
];
</script>

<style scoped></style>
