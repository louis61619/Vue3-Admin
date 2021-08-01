<template>
  <div class="login-account">
    <el-form :model="acount" :rules="rules" label-width="60px" ref="formRef">
      <el-form-item label="帳號" prop="name">
        <el-input type="password" v-model="acount.name"></el-input>
      </el-form-item>
      <el-form-item label="密碼" prop="password">
        <el-input v-model="acount.password"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { ElForm } from 'element-plus'
import { rules } from '../config/account-config'

export default defineComponent({
  setup() {
    const acount = reactive({
      name: '',
      password: '',
      email: ''
    })

    const formRef = ref<InstanceType<typeof ElForm>>()

    const loginAction = () => {
      formRef.value?.validate((valid) => {
        if (valid) {
          console.log('登陸成功')
        }
      })
    }

    return {
      acount,
      rules,
      loginAction,
      formRef
    }
  }
})
</script>

<style scoped lang="less">
.login-account::v-deep .el-form-item {
  .el-form-item__label {
    text-align: center;
  }
}
</style>
