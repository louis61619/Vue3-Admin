<template>
  <div class="user">
    <BaseForm v-bind="formConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseForm from '@/base-ui/form'
import { formConfig } from './config/search.config'

export default defineComponent({
  name: 'user',
  components: {
    BaseForm
  },
  setup() {
    return {
      formConfig
    }
  }
})
</script>

<style scoped></style>
