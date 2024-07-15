<template>
  <Header>
    <div class="flex justify-center p-5">
      <Logo :width="props.collapsed ? 40 : 70" :shape="'square'"></Logo>
    </div>
  </Header>
</template>

<script lang="ts" setup>

let props = defineProps(['collapsed'])
</script>
