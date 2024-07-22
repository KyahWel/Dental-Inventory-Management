<template>
  <div class="container flex h-screen justify-center items-center bg-cover bg-center" style="background-image: url('/background.png')">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
  const {theme} = useTheme()
</script>