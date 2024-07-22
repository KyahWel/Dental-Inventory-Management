<template>
  <Icons :component="icon"></Icons>
</template>

<script lang="ts" setup>
  import * as vIcons from '@ant-design/icons-vue'
  import Icons from '@ant-design/icons-vue'

  let {type} = defineProps({
    type: {type:String, required: true}
  })
  const icon = computed(()=>{
    return vIcons[type]
  })
</script>

<style>

</style>