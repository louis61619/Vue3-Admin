<template>
  <BaseForm v-bind="formConfig" v-model="formData">
    <template #header>
      <h2>高級檢索</h2>
    </template>
    <template #footer>
      <el-button icon="el-icon-search" @click="handleResetClick">
        重置
      </el-button>
      <el-button type="primary" icon="el-icon-refresh">搜索</el-button>
    </template>
  </BaseForm>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BaseForm from '@/base-ui/form'

export default defineComponent({
  components: {
    BaseForm
  },
  props: {
    formConfig: Object
  },
  setup(props) {
    const configData: any = {}
    const formItems = props.formConfig?.formItems || []
    for (const item of formItems) {
      configData[`${item.field}`] = ''
    }

    const formData = ref(configData)

    const handleResetClick = () => {
      console.log('-----------')
    }

    return {
      formData,
      handleResetClick
    }
  }
})
</script>

<style scoped></style>
