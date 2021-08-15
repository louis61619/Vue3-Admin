<template>
  <div class="app-form">
    <slot name="header"></slot>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in formItems" :key="item.label">
          <!-- input組件 -->
          <el-col :span="8" v-bind="colLayout">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="
                  !item.type ||
                  item.type === 'input' ||
                  item.type === 'password'
                "
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  v-model="formData[`${item.field}`]"
                ></el-input>
              </template>
              <!-- select組件 -->
              <template v-else-if="item.type === 'select'">
                <el-select
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                  v-model="formData[`${item.field}`]"
                >
                  <el-option
                    v-for="options in item.options"
                    :key="options.value"
                    :value="options.value"
                  >
                    {{ options.label }}
                  </el-option>
                </el-select>
              </template>
              <!-- date picker組件 -->
              <template v-else-if="item.type === 'datepicker'">
                <el-date-picker
                  style="width: 100%"
                  v-bind="item.otherOptions"
                  v-model="formData[`${item.field}`]"
                ></el-date-picker>
              </template>
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, watch } from 'vue'
import { IIFromItems } from '../types'

export default defineComponent({
  props: {
    modelValue: {
      type: Object,
      required: true
    },
    formItems: {
      type: Array as PropType<IIFromItems[]>,
      // vue3 default中如果是物件和陣列要使用箭頭函數
      default: () => []
    },
    labelWidth: {
      type: String,
      default: '100px'
    },
    itemStyle: {
      type: Object,
      default: () => ({ padding: '10px 40px' })
    },
    colLayout: {
      type: Object,
      default: () => {
        return {
          xl: 6, // 24/6 = 4 1920為一排4個
          lg: 8,
          md: 12,
          sm: 24,
          xm: 24
        }
      }
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const formData = ref({ ...props.modelValue })

    watch(
      formData,
      (newValue) => {
        emit('update:modelValue', newValue)
      },
      {
        deep: true
      }
    )

    return {
      formData
    }
  }
})
</script>

<style scoped lang="less">
/* 如果在scoped中選擇子元素的根元素也是會生效的 */
.app-form {
  padding-top: 22px;

  .footer {
    text-align: right;
    padding: 0 45px 20px 0;
  }
}
</style>
