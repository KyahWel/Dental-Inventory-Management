<template>
  <a-layout-sider v-model:collapsed="props.collapsed" style="background: #fff; padding: 0">
    <AppSidebarHeader :collapsed="props.collapsed"></AppSidebarHeader>
      <a-menu>
        <a-menu-item key="1">
          <user-outlined />
          <span>nav 1</span>
        </a-menu-item>
        <a-menu-item key="2">
          <video-camera-outlined />
          <span>nav 2</span>
        </a-menu-item>
        <a-menu-item key="3">
          <upload-outlined />
          <span>nav 3</span>
        </a-menu-item>
      </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>

const router = useRouter()
let props = defineProps(['collapsed'])

</script>

<style>

</style>