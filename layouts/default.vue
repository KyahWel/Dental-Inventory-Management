<template>
  <a-layout style="min-height: 100vh;" >
    <AppSidebar :collapsed="collapsedState"/>
    <a-layout>
      <AppMainHeader @collapse="collapsed"></AppMainHeader>
      <a-layout-content>
        <slot/>
      </a-layout-content>
    </a-layout>
    
  </a-layout>
 

</template>

<script lang="ts" setup>
let collapsedState = ref(false)

let collapsed = (val:boolean) => {
  collapsedState.value = val
}
</script>

<style>

</style>