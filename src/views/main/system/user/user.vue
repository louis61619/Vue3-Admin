<template>
  <div class="user">
    <PageSearch :formConfig="formConfig" />
    <PageContent :contentConfig="contentConfig" pageUrl="/users/list" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import { formConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent
  },
  setup() {
    return {
      formConfig,
      contentConfig
    }
  }
})
</script>

<style scoped></style>
