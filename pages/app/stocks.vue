<template>
  <div>
    <AppContainer>
      <a-card>
        <template #extra>
          <a-button 
                    type="primary" 
                    class="w-full flex justify-center items-center" 
                    :style="{'background-color': theme.token.colorPrimary}"
                  >
                  <PlusCircleOutlined /> Create new data
                  </a-button> 
        </template>
        <a-table :columns="columns" :data-source="data">
          <template #headerCell="{ column }">
            <template v-if="column.key === 'name'">
              <span>
                <smile-outlined />
                Name
              </span>
            </template>
          </template>

          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <a>
                {{ record.name }}
              </a>
            </template>
            <template v-else-if="column.key === 'action'">
              <a-row :gutter="[10, 10]">
                <a-col :span="6">
                  <a-button 
                    type="primary" 
                    class="w-full flex justify-center items-center" 
                    :style="{'background-color': theme.token.colorPrimary}"
                  >
                    <EyeOutlined />
                  </a-button>
                </a-col>
                <a-col :span="6">
                  <a-button 
                    type="primary" 
                    class="w-full flex justify-center items-center" 
                    :style="{'background-color': theme.token.colorWarning}"
                  >
                    <EditOutlined />
                  </a-button>
                </a-col>
                <a-col :span="6">
                  <a-button 
                    type="primary" 
                    class="w-full flex justify-center items-center" 
                    :style="{'background-color': theme.token.colorDanger}"
                  >
                    <DeleteOutlined />
                  </a-button>
                </a-col>
              </a-row>
            </template>
          </template>
        </a-table>
      </a-card>
    </AppContainer>
  </div>
</template>

<script lang="ts" setup>
  definePageMeta({
      layout: "default"
  })

  const {theme} = useTheme()

  const columns = [
  {
    name: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Action',
    key: 'action',
    width: 200,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser'],
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher'],
  },
];
</script>

<style>

</style>