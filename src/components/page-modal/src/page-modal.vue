<template>
  <div class="page-modal">
    <el-dialog title="新建用戶" v-model="dialogVisible" center>
      <BaseForm v-bind="modalConfig" v-model="formData"> </BaseForm>
      <template #footer>
        <span class="dialog-footer">
          <el-button type="primary">確定</el-button>
          <el-button @click="dialogVisible = false">取消</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, PropType } from 'vue'
import { IForm } from '@/base-ui/form/types'
import BaseForm from '@/base-ui/form'

export default defineComponent({
  components: {
    BaseForm
  },
  props: {
    modalConfig: {
      type: Object as PropType<IForm>,
      required: true
    },
    defaultInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const formData = ref<any>({})

    watch(
      () => props.defaultInfo,
      (newValue) => {
        for (let item of props.modalConfig.formItems) {
          formData.value[`${item.field}`] = newValue[`${item.field}`]
        }
      }
    )

    return {
      dialogVisible,
      formData
    }
  }
})
</script>

<style scoped>
.page-modal::v-deep .el-dialog {
  max-width: 500px;
  min-width: 350px;
}
</style>
