import 'element-plus/lib/theme-chalk/base.css'
import { ElButton } from 'element-plus'
import { App } from 'vue'

const compoenents = [ElButton]

export default function (app: App): void {
  for (const component of compoenents) {
    app.component(component.name, component)
  }
}
