<template>
  <main class="flex justify-center flex-col items-center global-p min-h-dvh">
    <Card class="min-w-[400px] p-3!">
      <template #title>Admin Login</template>
      <template #content>
        <LoginForm />
      </template>
    </Card>
    <a href="/admin" class="mt-10 text-blue-500">Go to Admin</a>
  </main>
</template>

<script setup lang="ts"></script>

<style scoped></style>
