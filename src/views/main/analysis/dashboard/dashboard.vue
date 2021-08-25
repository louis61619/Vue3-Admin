<template>
  <div class="dashboard">
    <Chart />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Chart from '@/base-ui/chart'

export default defineComponent({
  name: 'dashboard',
  components: {
    Chart
  },
  setup() {
    return {}
  }
})
</script>

<style scoped></style>
