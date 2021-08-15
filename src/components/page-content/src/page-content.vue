<template>
  <div class="content">
    <BaseTable v-bind="contentConfig" :list="datalist">
      <!-- header中的插槽 -->
      <template #headerHandler>
        <el-button type="primary" size="medium">新建用戶</el-button>
      </template>
      <!-- 列表中的插槽 -->
      <template #status="scope">
        <el-button
          plain
          size="mini"
          :type="scope.row.enable ? 'success' : 'danger'"
        >
          {{ scope.row.enable ? '啟用' : '禁用' }}
        </el-button>
      </template>
      <template #createAt="scope">
        {{ $filter.formateTime(scope.row.createAt) }}
      </template>
      <template #updateAt="scope">
        {{ $filter.formateTime(scope.row.updateAt) }}
      </template>
      <template #handler>
        <div class="handler-btns">
          <el-button icon="el-icon-edit" size="mini" type="text">
            修改
          </el-button>
          <el-button icon="el-icon-delete" size="mini" type="text">
            刪除
          </el-button>
        </div>
      </template>
    </BaseTable>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue'
import { getPageListData } from '@/service/main/system/system'

import BaseTable from '@/base-ui/table'

export default defineComponent({
  components: {
    BaseTable
  },
  props: {
    contentConfig: Object,
    pageUrl: {
      type: String,
      required: true
    },
    queryInfo: {
      type: Object,
      default: () => {
        return {
          offset: 0,
          size: 10
        }
      }
    }
  },
  setup(props) {
    const datalist = ref([])
    // const totalCount = ref()

    watchEffect(async () => {
      const pageResult = await getPageListData(props.pageUrl, props.queryInfo)
      const { list } = pageResult.data
      datalist.value = list
    })

    return {
      datalist
    }
  }
})
</script>

<style scoped>
.content {
  padding: 20px;
  border-top: 20px solid #f5f5f5;
}
</style>
