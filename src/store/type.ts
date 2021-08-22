import { ILoginState } from './login/type'
import { ISystemState } from './main/system/type'

interface IRootStore {}

interface IRootWithModule {
  login: ILoginState
  system: ISystemState
}

type IStoreType = IRootStore & IRootWithModule

export { IRootStore, IStoreType }
