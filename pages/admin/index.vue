<template>
  <div class="flex justify-center items-center w-full min-h-dvh">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2 items-center">
        <p>You are Authenticated</p>
        <p class="font-mono bg-neutral-300 px-4 py-1 rounded-lg">
          {{ auth?.sub || "No Data" }}
        </p>
      </div>
      <Button severity="danger" @click="onLogout">Logout</Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { adminLogout, getMe } from "~/api/admin";
import type { AuthJwt } from "~/generated";
// const auth = ref<AuthJwt | null>(null);
// const { data } = await getMe();
const toast = useToast();
const auth = ref<AuthJwt>();
const { data } = await getMe();
if (data.value && data.value.data) {
  auth.value = data.value.data;
}
const router = useRouter();
const onLogout = async () => {
  const { error } = await adminLogout();
  if (error) {
    toast.add({
      severity: "error",
      summary: error.error,
      detail: error.message,
      life: 3000,
    });
    return;
  }
  router.push("/");
};
</script>

<style scoped></style>
