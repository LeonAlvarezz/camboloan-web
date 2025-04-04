<template>
  <main class="flex justify-center items-center global-p min-h-dvh">
    <Card class="min-w-[400px] p-3!">
      <template #title>Admin Login</template>
      <template #content>
        <LoginForm />
      </template>
    </Card>

    <Card>
      <template #title>Admin List</template>
      <template #content>
        <div v-for="admin in admins" :key="admin.id">
          <p>{{ admin.username }}</p>
        </div>
      </template>
    </Card>
  </main>
</template>

<script setup lang="ts">
import { getAllAdmins } from "~/api/admin";
import type { AdminDto } from "~/generated";
const admins = ref<AdminDto[]>([]);
const { data } = await getAllAdmins();
admins.value = data.value || [];
</script>

<style scoped></style>
