<template>
  <div class="text-link">
    <template v-for="(item, index) in textArrs" :key="index">
      <div class="item">
        <span class="title">{{ item.title }} : </span>
        <span class="primary">{{ item.desp }}</span>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    textArrs: {
      type: Array,

      default: () => []
    }
  },

  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.text-link {
  padding: 0 15px;
  margin-bottom: 40px;
  text-align: left;

  .title {
    position: relative;
    display: inline-block;
    margin-right: 20px;
  }

  .primary {
    color: var(--el-color-primary);
  }

  .item {
    margin: 5px;
  }

  .title::before {
    position: absolute;
    top: 40%;
    left: -15px;
    width: 5px;
    height: 5px;
    background: black;
    border-radius: 100%;
    content: '';
  }
}
</style>
