<template>
  <div class="flex justify-center items-center w-full min-h-dvh">
    <div class="flex flex-col gap-6">
      <div class="flex flex-col gap-2 items-center">
        <div v-if="auth">
          <p>You are Authenticated</p>
          <p
            v-if="status === 'success'"
            class="font-mono bg-neutral-300 px-4 py-1 rounded-lg"
          >
            {{ auth.sub }}
          </p>
          <Skeleton
            v-else-if="status === 'pending'"
            class="w-full bg-neutral-400! h-10!"
          />
          <p v-else class="font-mono bg-red-700 px-4 py-1 rounded-lg">
            Something went wrong!
          </p>
        </div>
        <div v-else>
          <p>You are not Authenticated</p>
        </div>
      </div>
      <Button v-if="auth" severity="danger" @click="onLogout">Logout</Button>
      <Button
        v-else
        severity="danger"
        @click="() => router.push('/admin/login')"
        >Go to Login</Button
      >
    </div>
  </div>
</template>

<script setup lang="ts">
import { adminLogout, getMe } from "~/api/admin";
import type { AuthResponse } from "~/generated";
// const auth = ref<AuthJwt | null>(null);
// const { data } = await getMe();
const toast = useToast();
const auth = ref<AuthResponse>();
const { data, status } = await getMe();
if (data.value && data.value.data) {
  auth.value = data.value.data;
}
const router = useRouter();
const onLogout = async () => {
  const { error } = await adminLogout();
  if (error) {
    toast.add({
      severity: "error",
      summary: "Logout Failed",
      detail: error.message,
      life: 3000,
    });
    return;
  }
  router.push("/admin/login");
};
</script>

<style scoped></style>
