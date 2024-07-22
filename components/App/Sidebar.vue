<template>
  <a-layout-sider v-model:collapsed="props.collapsed" style="background: #fff; padding: 0">
    <AppSidebarHeader :collapsed="props.collapsed"></AppSidebarHeader>
    <a-menu mode="inline" :selected-keys="[activeRoute]">
      <a-menu-item v-for="route in routes" :key="route.path" @click="navigate(route.path)">
        <Icon :type="route.icon"></Icon>
        <span>{{ route.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts" setup>
const router = useRouter()

const { isActivePage, routes } = useSidebarMenu()

const activeRoute = computed(() => {
  return routes.find((r:any) => isActivePage(r.path) || {}).path || '/app/dashboard'
})

const navigate = (path:string) => {
 router.push(path)
}

let props = defineProps(['collapsed'])

</script>

<style>
</style>
