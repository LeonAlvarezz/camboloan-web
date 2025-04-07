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
// const auth = ref<AuthJwt | null>(null);
// const { data } = await getMe();
const toast = useToast();
const { data: auth } = await getMe();
const router = useRouter();
const onLogout = async () => {
  try {
    const { error } = await adminLogout();
    if (error.value) {
      toast.add({
        severity: "error",
        summary: "Logout Failed",
        detail: error.value,
        life: 3000,
      });
      return;
    }
    router.push("/");
  } catch (error) {
    toast.add({
      severity: "error",
      summary: "Logout Failed",
      detail: error,
      life: 3000,
    });
  }
};
</script>

<style scoped></style>
