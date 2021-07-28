import registerElement from './regirster-element'
import { App } from 'vue'

export function globalRegister(app: App): void {
  registerElement(app)
}
