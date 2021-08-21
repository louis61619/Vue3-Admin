<template>
  <div class="user">
    <!-- <PageSearch
      :formConfig="formConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleQueryClick"
    /> -->
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="goods"
    >
      <template #image="scope">
        <el-image
          style="width: 100%; height: 100%"
          :src="scope.row.imgUrl"
          :preview-src-list="[scope.row.imgUrl]"
        ></el-image>
      </template>
      <template #oldPrice="scope">${{ scope.row.oldPrice }}</template>
    </PageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'

import usePageSearch from '@/hook/use-page-search'

// import { formConfig } from './config/search.config'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  components: {
    // PageSearch,
    PageContent
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    return {
      // formConfig,
      contentConfig,
      handleResetClick,
      handleQueryClick,
      pageContentRef
    }
  }
})
</script>

<style scoped></style>
