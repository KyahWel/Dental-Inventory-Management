<template>
    <div class="form-section bg-white p-12 rounded-lg shadow-md text-center w-full max-w-md">
      <div class="logo mb-6">
        <Logo :width="100" :shape="'square'"></Logo>
      </div>
      <h1 class="text-2xl font-bold text-gray-800 mb-6">Welcome, Admin!</h1>
      <a-form
        :model="formState"
        name="basic"
        class="form-container"
      >
        <a-form-item
          name="email"
          :rules="[{ required: true, message: 'Please input your username!' }]"
          class="form-item"
        >
          <a-input v-model:value="formState.email" class="input-field w-full p-3 text-base border border-gray-300 rounded" placeholder="username" />
        </a-form-item>

        <a-form-item
          name="password"
          :rules="[{ required: true, message: 'Please input your password!' }]"
          class="form-item"
        >
          <a-input-password v-model:value="formState.password" class="input-field w-full p-3 text-base border border-gray-300 " placeholder="password" />
        </a-form-item>

        <div class="buttons flex justify-center mt-6">
          <a-button type="primary" class="w-full text-white" @click="redirect">LOGIN</a-button>
        </div>
      </a-form>
    </div>
</template>

<script lang="ts" setup>

  definePageMeta({
      layout: "auth"
  })


  let route = useRouter()


  interface FormState {
    email: string;
    password: string;
  }

  const formState = reactive<FormState>({
    email: '',
    password: '',
  });

  let redirect = () => {
    route.push('/app/prices')
  }
</script>
