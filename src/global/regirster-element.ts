import 'element-plus/lib/theme-chalk/base.css'
import {
  ElButton,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
} from 'element-plus'
import { App } from 'vue'

const compoenents = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElInput,
  ElForm,
  ElFormItem,
  ElCheckbox,
  ElLink
]

export default function (app: App): void {
  for (const component of compoenents) {
    app.component(component.name, component)
  }
}
