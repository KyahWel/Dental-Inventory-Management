<template>
  <a-config-provider :theme="theme">
      <a-layout style="min-height: 100vh;" >
        <AppSidebar :collapsed="collapsedState"/>
        <a-layout class="bg-white-300">
          <AppMainHeader @collapse="collapsed"></AppMainHeader>
          <a-layout-content>
            <slot/>
          </a-layout-content>
        </a-layout>
        
      </a-layout>
  </a-config-provider>
  

</template>

<script lang="ts" setup>
let collapsedState = ref(false)
let {theme} = useAppConfig();
console.log('theme :>> ', {...theme});
let collapsed = (val:boolean) => {
  collapsedState.value = val
}
</script>

<style>

</style>