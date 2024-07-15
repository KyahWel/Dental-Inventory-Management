<template>
  <div>
    <a-avatar src="/logo.png" :size="props.width" :shape="props.shape"/>
  </div>
</template>

<script lang="ts" setup>
 let props = defineProps(['width','shape'])
</script>

<style>

</style>