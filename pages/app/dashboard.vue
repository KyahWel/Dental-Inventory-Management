<template>
  <div>
      <AppContainer>
        <a-card class="w-100 h-100">
            <a-row :gutter="{ xs: 8, sm: 16, md: 24, lg: 32 }" class="w-100">
              <a-col :span="8">
                <a-card title="Total Sales" class="w-100 h-100">
                  Total Sales
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card title="Total Items Sold" class="w-100 h-100">
                  Total Items Sold
                </a-card>
              </a-col>
              <a-col :span="8">
                <a-card class="w-100 h-100">
                  <a-statistic
                    title="Feedback"
                    :value="11.28"
                    :precision="2"
                    suffix="%"
                    :value-style="{ color: '#3f8600' }"
                  >
                    <template #prefix>
                      <arrow-up-outlined />
                    </template>
                  </a-statistic> 
                   
                </a-card>
              </a-col>
              
            </a-row>
            <a-row class="w-100 mt-3">
              <a-col :span="24">
                <a-card title="'Total Sales Per Month'" class="w-100 h-100">
              
                </a-card>
              </a-col>
            </a-row>
        </a-card>
      </AppContainer>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
      layout: "default"
  })

</script>

<style>

</style>