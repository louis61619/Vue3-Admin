<template>
  <div class="user">
    <PageSearch
      :formConfig="formConfig"
      @queryBtnClick="handleQueryClick"
      @resetBtnClick="handleQueryClick"
    />
    <PageContent
      ref="pageContentRef"
      :contentConfig="contentConfig"
      pageName="users"
      @editBtnClick="handleEditData"
      @newBtnClick="handleNewData"
    />
    <PageModal
      ref="pageModalRef"
      :defaultInfo="defaultInfo"
      :modalConfig="modalConfigRef"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store'

import PageSearch from '@/components/page-search'
import PageContent from '@/components/page-content'
import PageModal from '@/components/page-modal'

import usePageSearch from '@/hook/use-page-search'
import usePageModal from '@/hook/use-page-modal'

import { formConfig } from './config/search.config'
import { contentConfig } from './config/content.config'
import { modalConfig } from './config/modal.config'

export default defineComponent({
  name: 'user',
  components: {
    PageSearch,
    PageContent,
    PageModal
  },
  setup() {
    const { pageContentRef, handleResetClick, handleQueryClick } =
      usePageSearch()

    const newCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) passwordItem.isHidden = false
    }

    const editCallback = () => {
      const passwordItem = modalConfig.formItems.find(
        (item) => item.field === 'password'
      )
      if (passwordItem) passwordItem.isHidden = true
    }

    const { pageModalRef, handleNewData, handleEditData, defaultInfo } =
      usePageModal(newCallback, editCallback)

    // 動態添加部門角色列表
    const store = useStore()
    const modalConfigRef = computed(() => {
      const departmentItem = modalConfig.formItems.find((item) => {
        return item.field === 'departmentId'
      })
      if (departmentItem) {
        departmentItem.options = store.state.departmentList.map((item) => {
          return { label: item.name, value: item.id }
        })
      }
      const roleItem = modalConfig.formItems.find((item) => {
        return item.field === 'roleId'
      })
      if (roleItem) {
        roleItem.options = store.state.roleList.map((item) => {
          return { label: item.name, value: item.id }
        })
      }

      return modalConfig
    })

    return {
      formConfig,
      contentConfig,
      modalConfigRef,
      handleResetClick,
      handleQueryClick,
      pageContentRef,
      pageModalRef,
      handleNewData,
      handleEditData,
      defaultInfo
    }
  }
})
</script>

<style scoped></style>
