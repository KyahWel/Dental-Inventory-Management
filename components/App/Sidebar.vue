<template>
  <a-layout-sider v-model:collapsed="collapsed" style="background: #fff; padding: 0">
    <AppSidebarHeader :collapsed="collapsed"></AppSidebarHeader>
    <a-menu mode="inline" :selected-keys="[activeRoute]">
      <a-menu-item v-for="route in routes" :key="route.path" @click="navigate(route.path)">
        <Icon :type="route.icon"></Icon>
        <span :style="{'font-weight': isActivePage(route.path) ? 'bold' : 'normal'}">{{ route.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>


<script lang="ts" setup>
  import { computed } from 'vue'
  import { useRouter } from 'vue-router'

  const router = useRouter()

  const { isActivePage, routes } = useSidebarMenu()

  const activeRoute = computed(() => {
    const active = routes.find((r: any) => isActivePage(r.path))
    return active ? active.path : '/app/dashboard'
  })

  const navigate = (path: string) => {
    router.push(path)
  }

  // Use defineProps correctly to define `collapsed`
  const props = defineProps<{ collapsed: boolean }>()
  const collapsed = computed(() => props.collapsed)
</script>

<style scoped>

</style>

