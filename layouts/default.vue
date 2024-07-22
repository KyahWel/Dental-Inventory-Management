<template>

      <a-layout style="min-height: 100vh;" >
        <AppSidebar :collapsed="collapsedState"/>
        <a-layout class="bg-white-300">
          <AppMainHeader @collapse="collapsed"></AppMainHeader>
          <a-layout-content>
            <slot/>
          </a-layout-content>
        </a-layout>
        
      </a-layout>

  

</template>

<script lang="ts" setup>
const {theme} = useAppConfig()
let collapsedState = ref(false)

let collapsed = (val:boolean) => {
  collapsedState.value = val
}
</script>

<style>

</style>