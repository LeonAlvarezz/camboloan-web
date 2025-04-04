<template>
  <Form
    class="flex flex-col gap-4 py-4"
    :resolver="resolver"
    @submit="onFormSubmit"
  >
    <div class="flex flex-col gap-2">
      <FormField
        v-slot="$field"
        name="email"
        initial-value=""
        class="flex flex-col gap-1"
      >
        <label for="email">Email</label>
        <InputText id="email" />
        <Message
          v-if="$field.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}</Message
        >
      </FormField>
    </div>
    <div class="flex flex-col gap-2 w-full!">
      <FormField
        v-slot="$field"
        name="password"
        initial-value=""
        class="flex flex-col gap-1"
      >
        <label for="password">Password</label>
        <Password class="w-full!" :feedback="false" toggle-mask fluid />
        <Message
          v-if="$field.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}</Message
        >
      </FormField>
    </div>
    <div class="flex flex-col gap-2">
      <FormField
        v-slot="$field"
        name="otp"
        initial-value=""
        class="flex flex-col gap-1"
      >
        <label for="otp">OTP</label>
        <InputText
          input-id="otp"
          max-value="999999"
          maxlength="6"
          placeholder="666666"
          fluid
        />
        <Message
          v-if="$field.invalid"
          severity="error"
          size="small"
          variant="simple"
          >{{ $field.error?.message }}</Message
        >
      </FormField>
    </div>
    <Button class="mt-4" type="submit">Login</Button>
  </Form>
</template>

<script setup lang="ts">
import Form, { type FormSubmitEvent } from "@primevue/forms/form";
import { zodResolver } from "@primevue/forms/resolvers/zod";
import { adminLogin } from "~/api/admin";
import { LoginSchema, type Login } from "~/dto/auth.type";

const toast = useToast();

const resolver = zodResolver(LoginSchema);

const onFormSubmit = async ({ valid, values }: FormSubmitEvent) => {
  const formValues = values as Login;
  if (valid) {
    const { data, error } = await adminLogin(formValues);
    if (!data.value || error.value) {
      toast.add({
        severity: "error",
        summary: "Login Failed",
        life: 3000,
      });
      console.log(error.value);
      return;
    }
    toast.add({
      severity: "success",
      summary: "Login Success",
      life: 3000,
    });
    setAccessToken(data.value.access_token);
  }
};
</script>

<style scoped></style>
