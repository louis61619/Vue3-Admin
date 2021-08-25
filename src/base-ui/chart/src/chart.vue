<template>
  <div class="charts">
    <div ref="echartRef" :style="{ height: height, width: width }"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineProps, withDefaults } from 'vue'
import * as echarts from 'echarts'

// 定義props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
  }>(),
  {
    width: '100%',
    height: '360px'
  }
)

const echartRef = ref<HTMLElement>()

onMounted(() => {
  const echartInstance = echartRef.value && echarts.init(echartRef.value)

  var option = {
    title: {
      text: 'ECharts 入门示例'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    legend: {
      data: ['销量']
    },
    xAxis: {
      data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
    },
    yAxis: {},
    series: [
      {
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  }

  echartInstance?.setOption(option)
})
</script>

<style scoped></style>
