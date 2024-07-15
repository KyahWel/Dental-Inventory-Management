
<template>
  <div>
    <a-layout-header style="background: #fff; padding-left: 5px">
       
        <a-row type="flex" align="middle" justify="space-between" class="pl-3">
         
            <menu-unfold-outlined
              v-if="collapsed"
              @click="collapseState"
            />
          <menu-fold-outlined v-else class="trigger" @click="collapseState" />
       
         
          <span class="text-black font-bold">
            <a-tag color="purple" class="text-sm">DENTAL INVENTORY SYSTEM</a-tag>
          </span>
          <div></div>
          </a-row>
      </a-layout-header>  
  </div>
</template>

<script lang="ts" setup>
  const collapsed = ref(false);
 let emit = defineEmits(['collapse'])
  let collapseState = () => {
    collapsed.value = !collapsed.value
    emit('collapse', collapsed.value)
  }

</script>

<style>

</style>