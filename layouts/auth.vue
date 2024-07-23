<template>
  <a-config-provider :theme="theme">
    <div class="container flex h-screen justify-center items-center bg-cover bg-center" style="background-image: url('/background.png')">
      <slot/>
    </div>
  </a-config-provider>
</template>

<script lang="ts" setup>
  let {theme} = useAppConfig();
</script>